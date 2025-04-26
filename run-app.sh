#!/bin/bash

# Print colorful messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

clear
echo -e "${BLUE}=== GIGEE Consult Development Environment Startup ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Function to check if a command is available
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check for required tools
echo -e "${YELLOW}Checking required dependencies...${NC}"
if ! command_exists node; then
  echo -e "${RED}Node.js is not installed. Please install Node.js v16+ and try again.${NC}"
  exit 1
fi

# Kill any existing processes on the development ports
echo -e "${YELLOW}Stopping any existing servers...${NC}"
pkill -f "vite" || true
pkill -f "tsx server" || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
lsof -ti:8080 | xargs kill -9 2>/dev/null || true

# Install global dependencies if needed
if ! command_exists tsx; then
  echo -e "${YELLOW}Installing tsx globally...${NC}"
  npm install --global tsx
fi

# Install project dependencies if they're missing
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing server dependencies...${NC}"
  npm install
fi

# Install client dependencies if they're missing
if [ ! -d "client/node_modules" ]; then
  echo -e "${YELLOW}Installing client dependencies...${NC}"
  cd client && npm install && cd ..
fi

# Start the client on port 5173
echo -e "${GREEN}Starting client on port 5173...${NC}"
cd client && npm run dev &
CLIENT_PID=$!

# Switch back to project root and give client time to start
cd ..
sleep 2

# Check if client started successfully
if ! lsof -ti:5173 >/dev/null 2>&1; then
  echo -e "${RED}Client failed to start on port 5173. Starting with alternative method...${NC}"
  cd client && npx vite --port 5173 &
  CLIENT_PID=$!
  cd ..
  sleep 2
fi

# Start the server on port 8080
echo -e "${GREEN}Starting server on port 8080...${NC}"
PORT=8080 npm run dev:server &
SERVER_PID=$!

# Wait to ensure server starts correctly
sleep 2

# Check if both processes are running
CLIENT_RUNNING=false
SERVER_RUNNING=false

if lsof -ti:5173 >/dev/null 2>&1; then
  CLIENT_RUNNING=true
fi

if lsof -ti:8080 >/dev/null 2>&1; then
  SERVER_RUNNING=true
fi

echo ""
if $CLIENT_RUNNING && $SERVER_RUNNING; then
  echo -e "${GREEN}✓ Development environment started successfully!${NC}"
else
  echo -e "${RED}⚠ Some components failed to start:${NC}"
  if ! $CLIENT_RUNNING; then
    echo -e "${RED}  ✗ Client is not running${NC}"
  fi
  if ! $SERVER_RUNNING; then
    echo -e "${RED}  ✗ Server is not running${NC}"
  fi
fi

echo ""
echo -e "${BLUE}Available endpoints:${NC}"
if $CLIENT_RUNNING; then
  echo -e "${GREEN}• Client:${NC} http://localhost:5173/"
fi
if $SERVER_RUNNING; then
  echo -e "${GREEN}• Server:${NC} http://localhost:8080/"
fi
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}"

# Function to clean up processes on exit
cleanup() {
  echo ""
  echo -e "${YELLOW}Shutting down development environment...${NC}"
  kill $CLIENT_PID 2>/dev/null || true
  kill $SERVER_PID 2>/dev/null || true
  pkill -f "vite" || true
  pkill -f "tsx server" || true
  echo -e "${GREEN}Development servers stopped.${NC}"
  exit 0
}

# Set up trap for clean exit
trap cleanup EXIT INT TERM

# Keep script running until manual termination
wait 