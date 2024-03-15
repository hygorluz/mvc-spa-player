"""Service's static configuration variables."""

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Config:
    """Service Configurations."""

    # The url-friendly name of the controllers
    service_name: str = os.environ.get('SERVICE_NAME', 'mvc-spa-player')

    # The user-friendly name of the controllers
    service_title: str = os.environ.get('SERVICE_NAME', 'MVC SPA Player')

    # A short description of the controllers
    service_description: str = os.environ.get('SERVICE_DESCRIPTION', 'Service that will play music')

    # The current controllers version
    service_version: str = os.environ.get('SERVICE_VERSION', '1.0.0')

    # The flask controllers host
    service_host: str = os.environ.get('SERVICE_HOST', '0.0.0.0')

    # The flask controllers port
    service_port: str = os.environ.get('SERVICE_PORT', '8080')

    # Music settings
    music_file_path: str = os.environ.get("MUSIC_FILE_PATH", "./../fixture/musics.json")


# Loaded configs
configs = Config()
