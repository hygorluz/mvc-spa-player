"""Service endpoints."""
import time

from fastapi import Response,BackgroundTasks

from service.schemas import MusicResult, Payload, HealthcheckResult


def health(response: Response):
    """Ping the service.

    :param: response: The fast api response object.
    :return: A HealthcheckResult instance.
    """
    return_obj = HealthcheckResult()
    return_obj.api_server_online = True

    return return_obj


def music(requested_payload: Payload,
             background_tasks: BackgroundTasks = None) -> MusicResult:
    """Instant Ranking service for an NFT."""
    request_start_time: float = time.time()


    return None
