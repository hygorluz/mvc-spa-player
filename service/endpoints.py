"""Service endpoints."""
import time

from fastapi import Response

from service.schemas import MusicResult, Payload, HealthcheckResult


def health(response: Response):
    """Ping the service.

    :param: response: The fast api response object.
    :return: A HealthcheckResult instance.
    """
    return_obj = HealthcheckResult()
    return_obj.api_server_online = True

    return return_obj


def music(requested_payload: Payload) -> MusicResult:
    """Instant Ranking service for an NFT."""
    request_start_time: float = time.time()
    music_name: str = requested_payload.name
    # TODO: Pesquisar dentro do diretorio de musicas a musica correspondente e retornar o path

    return None
