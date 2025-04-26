#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Fixing import paths in all files ===${NC}"

# Change to client directory if script is run from project root
if [ -d "client" ]; then
  cd client
fi

# Create utils file if it doesn't exist
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

# Function to fix imports in a file
fix_imports() {
  local file=$1
  echo -e "${YELLOW}Fixing imports in ${file}${NC}"
  
  # Fix problematic import paths
  if grep -q ".././" "$file"; then
    # Fix imports with .././ pattern
    sed -i '' 's|".././components/ui|"../ui|g' "$file"
    sed -i '' 's|".././components|"../../components|g' "$file"
    sed -i '' 's|".././lib/utils"|"../../lib/utils"|g' "$file"
    sed -i '' 's|".././lib|"../../lib|g' "$file"
    sed -i '' 's|".././hooks|"../../hooks|g' "$file"
  fi
  
  # Replace @/components with ../components or ./components
  if grep -q "@/components" "$file"; then
    if [[ $file == src/pages/* ]]; then
      sed -i '' 's|@/components|\.\.\/components|g' "$file"
    elif [[ $file == src/components/* ]]; then
      depth=$(echo "$file" | grep -o "/" | wc -l)
      if [ "$depth" -gt 2 ]; then
        # For nested components, calculate the correct path
        sed -i '' 's|@/components|\.\.\/\.\.\/components|g' "$file"
      else
        sed -i '' 's|@/components|\.\.|g' "$file"
      fi
    else
      sed -i '' 's|@/components|\.\/components|g' "$file"
    fi
  fi
  
  # Replace @/lib with ../lib or ./lib
  if grep -q "@/lib" "$file"; then
    if [[ $file == src/pages/* ]]; then
      sed -i '' 's|@/lib|\.\.\/lib|g' "$file"
    elif [[ $file == src/components/* ]]; then
      depth=$(echo "$file" | grep -o "/" | wc -l)
      if [ "$depth" -gt 2 ]; then
        # For nested components, calculate the correct path
        sed -i '' 's|@/lib|\.\.\/\.\.\/lib|g' "$file"
      else
        sed -i '' 's|@/lib|\.\.\/lib|g' "$file"
      fi
    else
      sed -i '' 's|@/lib|\.\/lib|g' "$file"
    fi
  fi
  
  # Replace @shared/ with ../shared/ 
  if grep -q "@shared/" "$file"; then
    sed -i '' 's|@shared/|\.\.\/\.\.\/shared/|g' "$file"
  fi
  
  # Replace @assets/ with ../assets/ 
  if grep -q "@assets/" "$file"; then
    sed -i '' 's|@assets/|\.\.\/\.\.\/attached_assets/|g' "$file"
  fi
}

# Find all TypeScript/JavaScript files and fix imports
echo -e "${GREEN}Finding all TypeScript and JavaScript files...${NC}"
find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) | while read -r file; do
  if grep -q "@/" "$file" || grep -q "@shared/" "$file" || grep -q "@assets/" "$file" || grep -q ".././" "$file"; then
    fix_imports "$file"
  fi
done

# Create a shared schema if it doesn't exist but is referenced
mkdir -p shared
if [ ! -f "shared/schema.ts" ] && grep -q "shared/schema" $(find src -type f -name "*.ts" -o -name "*.tsx"); then
  echo -e "${YELLOW}Creating basic schema.ts file${NC}"
  cat > shared/schema.ts << 'EOL'
import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
EOL
fi

echo -e "${GREEN}Import paths fixed successfully!${NC}" 