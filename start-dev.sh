#!/bin/bash

# Print colorful messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== GIGEE Consult Development Environment Startup ===${NC}"

# Kill any existing processes on the development ports
echo -e "${YELLOW}Stopping any existing servers...${NC}"
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
lsof -ti:8080 | xargs kill -9 2>/dev/null || true

# Install dependencies if they're missing
if [ ! -d "node_modules" ] || [ ! -d "client/node_modules" ]; then
  echo -e "${YELLOW}Installing dependencies...${NC}"
  npm install
  
  echo -e "${YELLOW}Installing client dependencies...${NC}"
  cd client && npm install && cd ..
fi

# Make sure TSX is installed
if ! command -v tsx &> /dev/null; then
  echo -e "${YELLOW}Installing tsx globally...${NC}"
  npm install --global tsx
fi

# Starting Vite in client directory 
echo -e "${GREEN}Starting client development server on port 5173...${NC}"
cd client && npm exec -- vite --host localhost --port 5173 &
CLIENT_PID=$!

# Give the client time to start
sleep 2
cd ..

# Start the server on port 8080
echo -e "${GREEN}Starting server on port 8080...${NC}"
PORT=8080 npm run dev:server &
SERVER_PID=$!

# Wait a bit to ensure server starts correctly
sleep 2

echo ""
echo -e "${GREEN}Development servers started successfully!${NC}"
echo -e "${BLUE}Client:${NC} http://localhost:5173/"
echo -e "${BLUE}Server:${NC} http://localhost:8080/"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}"

# Function to clean up processes on exit
cleanup() {
  echo ""
  echo -e "${YELLOW}Shutting down development servers...${NC}"
  kill $CLIENT_PID 2>/dev/null || true
  kill $SERVER_PID 2>/dev/null || true
  echo -e "${GREEN}Development servers stopped.${NC}"
  exit 0
}

# Set up trap for clean exit
trap cleanup EXIT INT TERM

# Keep script running
wait 