# GIGEE Consult Website

A modern, responsive website for GIGEE Consultancy built with React, TypeScript, and Tailwind CSS.

## Project Structure

The project is organized into two main parts:
- `client`: React frontend with TypeScript and Tailwind CSS
- `server`: Node.js backend API

## Fixed Issues

The following issues have been fixed in this update:

1. **Duplicate API function**: Merged duplicate `apiRequest` functions in queryClient.ts to simplify requests
2. **Path alias resolution**: Updated path aliases in vite.config.ts and tsconfig.json to properly resolve imports
3. **Tailwind CSS circular dependency**: Fixed circular dependency in text-white CSS classes
4. **Server port configuration**: Updated server to use 'localhost' instead of '0.0.0.0' to avoid ENOTSUP error on macOS
5. **Missing assets**: Added placeholders for missing assets like CEO images
6. **Schema import paths**: Moved schema files to src/shared directory for easier access

## Dependencies

- Node.js v18+ (recommended v20)
- npm v9+
- Vite v5+
- React v18+
- TypeScript v5+
- Tailwind CSS v3+

## Getting Started

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
PORT=8080 npm run dev
```

This will start both the API server and the React development server. The client app will be available at http://localhost:5173 (or another port if 5173 is in use).

## Building for Production

```bash
npm run build
```

This will create a production build in the `dist` folder.

## Environment Variables

- `PORT`: Server port (default: 8080)
- `NODE_ENV`: Environment mode (development or production)

## Project Features

- Multi-language support (English, French, Spanish)
- Dark/light theme toggle
- Responsive design for all device sizes
- Animations with Framer Motion
- Contact form with validation
- SEO optimizations
- Accessibility features

## License

This project is proprietary and confidential.

## Project Overview

This project is built with modern web technologies:
- React for the frontend
- Express for the backend
- Tailwind CSS and Shadcn/UI for styling
- Vite as the development and build tool

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/gigee-consult-website.git
cd gigee-consult-website

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

This will start both the Express backend and the Vite development server.

### Building for Production

```bash
# Build the project
npm run build
# or
yarn build
```

This will create a production build in the `dist` directory.

## Deployment

### Deploying to GitHub Pages

1. Create a GitHub repository for your project
2. Push your code to the repository
3. Set up GitHub Pages:
   - Go to the repository settings
   - Scroll down to the GitHub Pages section
   - Select the branch you want to deploy (usually `main` or `master`)
   - Set the folder to `/docs` or `/dist` if you've configured your build output
   - Click Save

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

The `netlify.toml` file in this repository is already configured for deployment.

### Deploying to Cloudflare Pages

1. Create an account on [Cloudflare](https://www.cloudflare.com/)
2. Go to the Pages section
3. Connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy

The `_headers` and `_redirects` files in this repository are configured for Cloudflare Pages deployment.

## Project Structure

```
/
├── client/              # Frontend React application
│   ├── public/          # Static assets
│   ├── src/             # Source code
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   └── App.tsx      # Main application component
├── server/              # Backend Express application
│   ├── index.ts         # Server entry point
│   └── routes.ts        # API routes
├── shared/              # Shared code between frontend and backend
│   └── schema.ts        # Data schemas
└── dist/                # Production build (generated)
```

## Contact Information

For any questions or support related to this website, please contact:

- **Email:** gigeeconsultltd@gmail.com
- **Phone:** +234 812 222 4471 | +234 809 111 6342
- **Locations:**
  - Kano Office: #67, Babban Kwari Street, Off Lamido Street, Nasarawa GRA, Kano State
  - Kaduna Office: #6, Gimbason Street, Mahuta New Extension, Off NNPC Junction, Kaduna
  - Abuja Office: #21, Nathaniel Ogwuche Crescent, Dawaki, Abuja