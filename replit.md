# Portfolio Website for Rajdeep Patel

## Overview

This is a modern, interactive portfolio website built for Rajdeep Patel, an AI developer and final-year MCA student. The application showcases his projects, skills, and professional information through a sleek, dark-themed interface with glassmorphism effects and animated components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack Next.js architecture:

- **Framework**: Next.js 15 with App Router and TypeScript
- **Frontend**: React-based with Server Side Rendering (SSR) and Static Site Generation (SSG)
- **Backend**: Next.js API Routes for backend functionality
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Next.js built-in Turbopack and SWC
- **Development**: Hot module replacement with Next.js dev server

## Key Components

### Frontend Architecture
- **Framework**: Next.js 15 with App Router and React 18
- **Routing**: Next.js App Router with file-based routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Rendering**: Server-side rendering (SSR) and static generation (SSG)

### Backend Architecture
- **Server**: Next.js API Routes with TypeScript
- **API Structure**: RESTful endpoints under `/api` prefix in app directory
- **Development Setup**: Next.js built-in development server
- **Error Handling**: Next.js error boundaries and API error handling

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
- `npm run dev`: Start Next.js development server with hot reloading
- `npm run build`: Build Next.js application for production
- `npm run start`: Start Next.js production server
- `npm run lint`: Run ESLint for code quality
- `npm run check`: TypeScript type checking
- `npm run db:push`: Push database schema changes

### Recent Changes (July 16, 2025)
- **Major Migration**: Migrated from Vite + Express.js to Next.js 15
- **Architecture Change**: Now using Next.js App Router for both frontend and backend
- **API Routes**: Migrated Express API endpoints to Next.js API routes
- **Build System**: Replaced Vite with Next.js built-in Turbopack
- **Development**: Now using Next.js dev server on port 5000
- **Configuration**: Updated TypeScript and ESLint configs for Next.js

### Hosting Considerations
- **Static Files**: Served from `dist/public` directory
- **API Routes**: All backend routes prefixed with `/api`
- **Database**: Requires PostgreSQL instance with connection string
- **Environment Variables**: DATABASE_URL required for database operations

The application is designed to be easily deployable to platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.