"""API application related functions."""

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controllers.configs import configs
from controllers.endpoints import music, health
from models.schemas import (HealthcheckResult, PrettyJSONResponse, MusicResult)
from controllers.utils import setup_logging


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
        path="/music",
        name="music",
        endpoint=music,
        response_model=MusicResult,
        response_class=PrettyJSONResponse,
        response_model_exclude_none=True,
        methods=["POST"],
        status_code=200,
        tags=["music"],
        description="Single NFT Ranking endpoint. Responsible to return the NFT Ranking, Checklist, and factors")

    # Returns the created API instance
    return app


# Debugger entry point only
if __name__ == "__main__":
    uvicorn.run(create_application(), host="0.0.0.0", port=8080)