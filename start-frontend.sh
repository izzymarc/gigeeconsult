#!/bin/bash

# Print colorful messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

clear
echo -e "${BLUE}=== GIGEE Consult Frontend Development Server ===${NC}"
echo -e "${BLUE}=================================================${NC}"

# Function to check if a command is available
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check for Node.js
echo -e "${YELLOW}Checking Node.js...${NC}"
if ! command_exists node; then
  echo -e "${RED}Error: Node.js is not installed. Please install Node.js v16+ and try again.${NC}"
  exit 1
fi

# Kill any existing Vite process
echo -e "${YELLOW}Stopping any existing frontend servers...${NC}"
pkill -f "vite" || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

# Move to client directory
if [ -d "client" ]; then
  cd client
fi

# Create empty attached_assets directory if needed
mkdir -p attached_assets

# Create utils.ts if it doesn't exist
mkdir -p src/lib
if [ ! -f "src/lib/utils.ts" ]; then
  echo -e "${YELLOW}Creating utils.ts file${NC}"
  cat > src/lib/utils.ts << 'EOL'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOL
fi

# Create shared schema if needed
mkdir -p ../shared
if [ ! -f "../shared/schema.ts" ]; then
  echo -e "${YELLOW}Creating shared schema.ts file${NC}"
  cat > ../shared/schema.ts << 'EOL'
import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  subject: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
EOL
fi

# Install dependencies if they're missing
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing frontend dependencies...${NC}"
  npm install
fi

# Run the fix-imports script if it exists and is executable
if [ -f "../fix-imports.sh" ] && [ -x "../fix-imports.sh" ]; then
  echo -e "${YELLOW}Fixing import paths...${NC}"
  bash ../fix-imports.sh
elif [ -f "fix-imports.sh" ] && [ -x "fix-imports.sh" ]; then
  echo -e "${YELLOW}Fixing import paths...${NC}"
  bash ./fix-imports.sh
fi

# Support for quick debugging of import issues
echo -e "${YELLOW}Creating debug vite.config.js file...${NC}"
cat > vite.config.js << 'EOL'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react-scroll',
      'wouter',
      'next-themes',
      '@tanstack/react-query',
    ],
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
EOL

# Start the frontend server with full debugging
echo -e "${GREEN}Starting frontend development server...${NC}"
npx vite --debug --logLevel=info &
FRONTEND_PID=$!

# Give the server time to start
sleep 3

# Check if server started successfully
if ! lsof -ti:5173 >/dev/null 2>&1; then
  echo -e "${RED}Frontend server failed to start on port 5173. Trying alternative method...${NC}"
  npx vite --port 5174 --debug &
  FRONTEND_PID=$!
  sleep 3
  
  if ! lsof -ti:5174 >/dev/null 2>&1; then
    echo -e "${RED}Still unable to start the frontend server. Starting on a random port...${NC}"
    npx vite &
    FRONTEND_PID=$!
    sleep 3
  else
    echo -e "${GREEN}✓ Frontend development server started on port 5174!${NC}"
    echo -e "${BLUE}Frontend:${NC} http://localhost:5174/"
  fi
else
  echo -e "${GREEN}✓ Frontend development server started successfully!${NC}"
  echo -e "${BLUE}Frontend:${NC} http://localhost:5173/"
fi

echo ""
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"

# Function to clean up processes on exit
cleanup() {
  echo ""
  echo -e "${YELLOW}Shutting down frontend server...${NC}"
  kill $FRONTEND_PID 2>/dev/null || true
  pkill -f "vite" || true
  echo -e "${GREEN}Frontend server stopped.${NC}"
  exit 0
}

# Set up trap for clean exit
trap cleanup EXIT INT TERM

# Keep script running until manual termination
wait 