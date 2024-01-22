lsof -i tcp:8000 -t | xargs kill && lsof -i tcp:8001 -t | xargs kill && lsof -i tcp:8002 -t | xargs kill && lsof -i tcp:8888 -t | xargs kill
