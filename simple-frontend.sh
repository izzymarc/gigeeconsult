#!/bin/bash

# Change to client directory
cd client || exit 1

# Create basic configuration files if needed
mkdir -p src/lib
mkdir -p src/lib/hooks
mkdir -p attached_assets
mkdir -p ../shared

# Create utils.ts if it doesn't exist
if [ ! -f "src/lib/utils.ts" ]; then
  cat > src/lib/utils.ts << 'EOL'
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
EOL
fi

# Create minimal schema.ts in shared directory
if [ ! -f "../shared/schema.ts" ]; then
  cat > ../shared/schema.ts << 'EOL'
import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
  name: z.string().min(2),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
EOL
fi

# Create a minimal vite.config.js file
cat > vite.config.js << 'EOL'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    }
  },
  server: {
    port: 5173,
    host: 'localhost',
  }
});
EOL

# Kill any existing Vite processes
pkill -f "vite" 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

# Start Vite directly
echo "Starting frontend on http://localhost:5173"
npx vite 