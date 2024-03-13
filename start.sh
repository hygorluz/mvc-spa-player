#!/bin/bash
#####
# START THE SERVICE
#####

# Show some basic settings
echo "USER: $(whoami)"
echo "PYTHON VERSION: $(python -V)"
echo "PYTHON BIN: $(which python)"

# Start the Flask service
echo "Starting the API server..."
exec gunicorn "service.application:create_application()" --workers 2 --worker-class uvicorn.workers.UvicornWorker --threads 8 --max-requests 100 --bind 0.0.0.0:8080 &
echo $! > gunicorn.pid

echo "Running the worker loop..."
while :
do
    python worker.py || { echo "Main ranking worker finished!" && exit 1 ; }
    echo "Sleeping between loops.."
    sleep 600
done


