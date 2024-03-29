"""API application related functions."""
from typing import Optional, List

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controllers.configs import configs
from controllers.endpoints import musics, health
from models.schemas import (HealthcheckResult, PrettyJSONResponse, Music)
from controllers.utils import setup_logging, get_music_data


def create_application() -> FastAPI:
    """Create a FastAPI app instance with the classification and embeddings endpoints registered.

    :return: A FastAPI application instance
    """
    # Start the logger
    setup_logging()

    # Create the FastAPI app instance
    app = FastAPI(title=configs.service_title,
                  description=configs.service_description,
                  version=configs.service_version)

    # CORS
    app.add_middleware(CORSMiddleware,
                       allow_origins=['*'],
                       allow_credentials=True,
                       allow_methods=["POST", "GET"],
                       allow_headers=["*"])

    # Register the category_predict_single endpoint
    app.add_api_route(path="/health",
                      name="health",
                      endpoint=health,
                      response_model=HealthcheckResult,
                      response_class=PrettyJSONResponse,
                      methods=["GET"],
                      status_code=200,
                      tags=["healthcheck"],
                      description="Healthcheck endpoint.")

    app.add_api_route(
        path="/musics",
        name="music",
        endpoint=musics,
        response_model=Optional[Music],
        response_class=PrettyJSONResponse,
        response_model_exclude_none=True,
        methods=["POST"],
        status_code=200,
        tags=["musics"],
        description="Single Music endpoint.")

    app.add_api_route(
        path="/musics",
        name="musics",
        endpoint=musics,
        response_model=List[Music],
        response_class=PrettyJSONResponse,
        response_model_exclude_none=True,
        methods=["GET"],
        status_code=200,
        tags=["musics"],
        description="List musics endpoint.")

    # Load the musics
    get_music_data()

    # Returns the created API instance
    return app


# Debugger entry point only
if __name__ == "__main__":
    uvicorn.run(create_application(), host="0.0.0.0", port=8080)
