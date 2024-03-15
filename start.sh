#!/bin/bash
#####
# START THE SERVICE
#####

# Show some basic settings
echo "USER: $(whoami)"
echo "PYTHON VERSION: $(python -V)"
echo "PYTHON BIN: $(which python)"

# Start the Flask controllers
echo "Starting the API server..."
exec uvicorn --host 0.0.0.0 --port 8080 --no-access-log --factory "controllers.application:create_application"




