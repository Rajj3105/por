# Portfolio Website for Rajdeep Patel

## Overview

This is a modern, interactive portfolio website built for Rajdeep Patel, an AI developer and final-year MCA student. The application showcases his projects, skills, and professional information through a sleek, dark-themed interface with glassmorphism effects and animated components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clean separation between frontend and backend components:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend bundling
- **Development**: Hot module replacement with Vite dev server

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints under `/api` prefix
- **Development Setup**: Custom Vite middleware integration for seamless development
- **Error Handling**: Centralized error handling middleware

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Basic user schema defined but not actively used
- **Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle-kit for schema migrations

### UI Component System
- **Base Library**: Radix UI primitives for accessibility
- **Styling**: Class Variance Authority for component variants
- **Theme**: Dark theme with neon cyan and magenta accents
- **Responsive**: Mobile-first responsive design

## Data Flow

1. **Client Request**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express server handles requests and processes data
3. **Response**: JSON responses sent back to client
4. **State Management**: TanStack Query manages caching and state updates
5. **UI Updates**: React components re-render based on state changes

### Contact Form Flow
- Form submission triggers POST request to `/api/contact`
- Server validates form data and logs submission
- Success/error feedback shown via toast notifications
- Form resets on successful submission

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database adapter
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Built frontend served by Express in production

### Environment Configuration
- **Development**: Vite dev server with HMR, Express API server
- **Production**: Single Express server serving both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Start production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Push database schema changes

### Hosting Considerations
- **Static Files**: Served from `dist/public` directory
- **API Routes**: All backend routes prefixed with `/api`
- **Database**: Requires PostgreSQL instance with connection string
- **Environment Variables**: DATABASE_URL required for database operations

The application is designed to be easily deployable to platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.