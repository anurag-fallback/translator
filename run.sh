#!/bin/bash

# Start frontend server on port 80 (requires sudo)
echo "Starting frontend server on port 80 requires sudo..."
cd webapp
sudo nohup npm run start > frontend.log 2>&1 & 
FRONTEND_PID=$!
cd ..

echo "Frontend server started in background with PID $FRONTEND_PID. Logs are in webapp/frontend.log"
echo "To stop the frontend server, run: sudo kill $FRONTEND_PID"

# Placeholder for PostgreSQL check (without Docker)
echo "Checking for PostgreSQL... Manual check or specific command needed here"

# Start backend server
echo "Starting backend server..."
./gradlew server-app:bootRun
