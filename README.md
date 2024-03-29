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
- cd views (access the frontend folder)
- npm i
- cd .. (to get back to the root)
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
- npm start

## Important
To run/build individually the services:
- docker-compose up backend
- docker-compose up frontend
- docker-compose build backend
- docker-compose build frontend

To build the services without cache:
- docker-compose build backend --no-cache (to build a specific service without cache)
- docker-compose build --no-cache (to build all service without cache)