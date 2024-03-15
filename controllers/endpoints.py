"""Service endpoints."""
import time
from typing import Optional

from fastapi import Response, HTTPException
from unidecode import unidecode

from controllers import utils
from models.schemas import Music, Payload, HealthcheckResult


def health(response: Response):
    """Ping the controllers.

    :param: response: The fast api response object.
    :return: A HealthcheckResult instance.
    """
    return_obj = HealthcheckResult()
    return_obj.api_server_online = True

    return return_obj


def musics(requested_payload: Payload) -> Optional[Music]:
    """Instant Ranking controllers for an NFT."""
    music_name: str = requested_payload.name
    music: Music = None
    for music_data in utils.get_music_data():
        file_music_name: str = unidecode(music_data.title.lower().strip().replace(" ", "_"))
        requested_music_name: str = unidecode(music_name.lower().strip().replace(" ", "_"))
        if file_music_name == requested_music_name:
            music = music_data
    if not music:
        raise HTTPException(status_code=404, detail="Musica não foi encontrada.")

    return music
