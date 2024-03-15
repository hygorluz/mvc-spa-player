# :musical_note: MVC SPA Player

Project created as part of the discipline Backend Architecture.

## Endpoints

- **/music** - Generate the music path to the player.
- **/docs** - Swagger UI.
- **/redoc** - ReDoc UI.
- **/health** - Health checker endpoint.

## Documentation

- ReDoc: http://127.0.0.1:8080/docs
- Swagger UI: http://127.0.0.1:8080/redoc
- OpenAPI Specs: http://127.0.0.1:8080/openapi.json
- Postman collection: Please import the postman request collection from the postman [folder](/postman) in the root of
  the repository.

## How to run?

Docker version:
- cd mvc-spa-player (access the project root folder)
- docker-compose build
- docker-compose up

#### Without docker version:
Starting backend:
- cd mvc-spa-player (access the project root folder)
- pip install -r requirements.txt (Install dependencies)

Starting frontend:
- cd mvc-spa-player (access the project root folder)
- cd views (access the frontend folder)
- npm i
- ./start.sh (Start gunicorn process)