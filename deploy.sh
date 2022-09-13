#!/bin/bash

echo "Pulling..."
git pull origin deployment

echo "Building application..."
docker-compose up -d --build 

