"""Service endpoints."""
import time
from typing import Optional, List

from fastapi import Response, HTTPException, Request
from unidecode import unidecode

from controllers import utils
from controllers.utils import get_music_data
from models.schemas import Music, Payload, HealthcheckResult


def health(response: Response):
    """Ping the controllers.

    :param: response: The fast api response object.
    :return: A HealthcheckResult instance.
    """
    return_obj = HealthcheckResult()
    return_obj.api_server_online = True

    return return_obj


def musics(request: Request, requested_payload: Payload = None) -> Optional[Music]:
    """Instant Ranking controllers for an NFT."""

    music: Music = None
    if not requested_payload and request.method == "GET":
        return get_music_data()
    elif request.method == "POST":
        music_name: str = requested_payload.name
        for music_data in utils.get_music_data():
            file_music_name: str = unidecode(music_data.title.lower().strip().replace(" ", "_"))
            requested_music_name: str = unidecode(music_name.lower().strip().replace(" ", "_"))
            if file_music_name == requested_music_name:
                music = music_data
        if not music:
            raise HTTPException(status_code=404, detail="Musica não foi encontrada.")

        return music
