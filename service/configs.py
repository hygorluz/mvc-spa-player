"""Service's static configuration variables."""

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Config:
    """Service Configurations."""

    # The url-friendly name of the service
    service_name: str = os.environ.get('SERVICE_NAME', 'mvc-spa-player')

    # The user-friendly name of the service
    service_title: str = os.environ.get('SERVICE_NAME', 'MVC SPA Player')

    # A short description of the service
    service_description: str = os.environ.get('SERVICE_DESCRIPTION', 'Service that will play music')

    # The current service version
    service_version: str = os.environ.get('SERVICE_VERSION', '1.0.0')

    # The flask service host
    service_host: str = os.environ.get('SERVICE_HOST', '0.0.0.0')

    # The flask service port
    service_port: str = os.environ.get('SERVICE_PORT', '8080')


# Loaded configs
configs = Config()
