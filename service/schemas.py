"""API Schemas."""
import json
from typing import Any

from humps import camelize
from pydantic import BaseModel, Field
from starlette.responses import Response


class CustomBaseModel(BaseModel):
    """Custom base model that changes the default pydantic settings."""

    class Config:
        """Model config class to customize some pydantic options."""

        str_strip_whitespace = True  # Trim strings by default
        alias_generator = camelize  # Forces lowerCamelCase
        populate_by_name = True  # Allow the alias trick
        use_enum_values = True  # Better enums


class PrettyJSONResponse(Response):
    """Helps setup FastAPI to pretty print the responses."""

    media_type = "application/json"

    def render(self, content: Any) -> bytes:
        """Render the json results."""
        return json.dumps(
            content,
            ensure_ascii=False,
            allow_nan=False,
            indent=4,
            separators=(", ", ": "),
        ).encode("utf-8")


class HealthcheckResult(CustomBaseModel):
    """Healthcheck output schema."""

    api_server_online: bool = Field(default=False, description="True if the api server is online.")


class MusicResult(CustomBaseModel):
    """Music result schema."""

    path: str = Field(default=False, description="Image path")
    image: str = Field(description="Music image")


class Payload(CustomBaseModel):
    """payload schema."""

    name: str = Field(default=False, description="Image path")
