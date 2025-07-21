# Frontend & Full-Stack Developer Assignment

This repository serves as a technical assignment for frontend and full-stack developer candidates at [Promptwatch](https://promptwatch.com/). It provides a modern, production-ready monorepo foundation that you can build upon to demonstrate your skills.

**About Promptwatch**: Promptwatch helps companies monitor and optimize their brand visibility across AI search engines like ChatGPT, Claude, Perplexity, and other AI platforms. We're building the future of AI search optimization.

## 📋 Assignment Instructions

### What You Need to Build

Your task is to create a **CSV Upload and Data Management System** that demonstrates your full-stack development skills. This assignment simulates real-world functionality similar to what we build at Promptwatch.

### Core Requirements

**1. CSV File Upload Interface**
- Create a file upload component that accepts CSV files (`urls.csv`)
- Include proper file validation (file type, size limits, etc.)
- Show upload progress and success/error states (optional)

**2. Backend API Integration**
- Build a tRPC endpoint to handle CSV content
- Store the parsed data in the PostgreSQL database using Prisma
- Create a database schema for storing the data

**3. Data Display & Management**
- Display uploaded CSV data in a well-designed table on the main page
- Include features like pagination, sorting, or filtering
- Group by domain, show a little chart of occurences per website
- Create a line chart based on `last_updated`

### Technical Specifications

- **Frontend**: Use the existing Next.js setup with React and TypeScript
- **Backend**: Extend the tRPC API with new endpoints for file handling
- **Database**: Design appropriate Prisma models for storing CSV data
- **UI/UX**: Make it look professional - add your preferred styling solution

### What We're Evaluating

✅ **Code Quality**: Clean, readable, well-structured TypeScript code  
✅ **Full-Stack Integration**: Seamless frontend-backend communication via tRPC  
✅ **Database Design**: Thoughtful Prisma schema and data modeling  
✅ **User Experience**: Intuitive interface with proper loading states and error handling  
✅ **Error Handling**: Robust error management throughout the application  
✅ **Creativity**: Your choice of styling, additional features, and problem-solving approach  

### Bonus Points

- Add data validation and sanitization
- Implement real-time upload progress
- Include data export functionality
- Write basic tests

### Getting Started

1. Follow the setup instructions below to get the development environment running
2. Explore the existing codebase to understand the tRPC and Prisma setup
3. Design your database schema for storing CSV data
4. Build the upload functionality step by step
5. Create a great user interface to showcase your work

**Time Expectation**: This assignment typically takes 4-8 hours depending on your experience level and how much you want to polish it.

### How to Submit Your Work

**Clone this repository** to get started:

```bash
git clone https://github.com/promptwatch-com/promptwatch-assignment
cd promptwatch-assignment
```

This allows you to:
- Work on your solution locally
- Commit your progress as you build features
- Share your completed work by creating a zip file or new repository

Follow the setup instructions below to get your development environment running.

## 🏗️ Architecture Overview

This is a **Turborepo monorepo** with a complete full-stack setup:

```
📁 apps/
  ├── 🌐 web/          → Next.js frontend (React + TypeScript)
  └── 🚀 api/          → Fastify backend with tRPC (TypeScript)
📁 packages/
  ├── 🗄️ database/     → Prisma ORM + PostgreSQL
  ├── ⚙️ config-*/     → Shared ESLint & TypeScript configs
  └── 🐳 docker-compose/ → Local development infrastructure
📄 domains.csv         → Sample data file
```

### Tech Stack

**Frontend (Next.js)**
- ⚛️ React 18 with TypeScript
- 🔄 tRPC for type-safe API calls
- 🎨 Pages Router (ready for your UI framework of choice)

**Backend (Fastify + tRPC)**
- ⚡ Fastify server for high performance
- 🔄 tRPC for end-to-end type safety
- 📝 TypeScript throughout
- 🛡️ CORS configured for development

**Database & ORM**
- 🐘 PostgreSQL database
- 🔄 Prisma ORM with full TypeScript support
- 🌱 Database seeding capabilities
- 📦 Migration system ready

**Development Experience**
- 🏗️ Turborepo for fast builds and caching
- 🔧 ESLint + Prettier for code quality
- 🐳 Docker Compose for easy local setup
- 📦 PNPM for efficient package management

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **PNPM** (recommended) or npm/yarn
- **Docker** & **Docker Compose**

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Local Database

```bash
# Start PostgreSQL database in the background
cd packages/docker-compose
docker-compose up -d
```

The database will be available at `localhost:5432` with:
- **Database**: `repo_development` 
- **Username**: `repo`
- **Password**: `repo`

### 3. Set Up Environment Variables

Create `.env` files in the appropriate directories:

```bash
# For the database package
echo "DATABASE_URL=postgresql://repo:repo@localhost:5432/repo_development" > packages/database/.env

# For the web app (if needed)
echo "DATABASE_URL=postgresql://repo:repo@localhost:5432/repo_development" > apps/web/.env
```

### 4. Set Up Database Schema

```bash
# Generate Prisma client and apply migrations
pnpm run generate
pnpm run db:push

# Seed with sample data
pnpm run db:seed
```

### 5. Start Development Servers

```bash
# Start both frontend and backend in development mode
pnpm run dev
```

This starts:
- 🌐 **Frontend**: http://localhost:3000
- 🚀 **API**: http://localhost:4000
- 📡 **tRPC endpoint**: http://localhost:4000/trpc
- ❤️ **Health check**: http://localhost:4000/health

## 📂 Project Structure Explained

### `apps/web/` - Next.js Frontend
- **Pages Router** setup with TypeScript
- **tRPC client** configured for type-safe API calls
- Ready for your choice of UI framework (Tailwind, Material-UI, etc.)
- Connected to the backend via tRPC

### `apps/api/` - Backend API
- **Fastify server** for high performance
- **tRPC routers** for type-safe API endpoints
- **CORS** enabled for local development
- Health check endpoint included

### `packages/database/` - Database Layer
- **Prisma ORM** with PostgreSQL
- Database schema in `prisma/schema/main.prisma`
- Seeding script in `src/seed.ts`
- Generated TypeScript types

### `packages/config-*/` - Shared Configuration
- **ESLint configs** for consistent code style
- **TypeScript configs** shared across the monorepo

## 🛠️ Available Scripts

### Root Level Scripts
```bash
pnpm run dev          # Start all development servers
pnpm run build        # Build all apps and packages
pnpm run lint         # Lint all packages
pnpm run format       # Format code with Prettier

# Database operations
pnpm run db:migrate:dev    # Create and apply migrations
pnpm run db:push          # Push schema changes (dev only)
pnpm run db:seed          # Seed database with sample data
pnpm run generate         # Generate Prisma client
```

### Individual App Scripts
```bash
# Frontend (from apps/web/)
pnpm run dev          # Start Next.js dev server
pnpm run build        # Build for production
pnpm run start        # Start production build

# Backend (from apps/api/)
pnpm run dev          # Start Fastify dev server with hot reload
pnpm run build        # Compile TypeScript
pnpm run start        # Start production build
```

## 🗄️ Database Operations

### Viewing Your Data
```bash
# Open Prisma Studio to browse your database
cd packages/database
pnpm run studio
```

### Schema Changes
1. Modify `packages/database/prisma/schema/main.prisma`
2. Run `pnpm run db:push` (development) or create migration
3. Run `pnpm run generate` to update TypeScript types

### Adding Sample Data
Edit `packages/database/src/seed.ts` and run `pnpm run db:seed`

## 🎯 What You Can Build

This foundation is perfect for building:

- **📊 Dashboard Applications** - Analytics, admin panels, data visualization
- **🛒 E-commerce Platforms** - Product catalogs, shopping carts, user management  
- **📝 Content Management** - Blogs, documentation, media libraries
- **👥 Social Platforms** - User profiles, feeds, messaging systems
- **🎮 Real-time Applications** - Chat apps, collaborative tools, games
- **📱 API-first Applications** - Mobile backends, microservices, integrations

## 🔧 Customization & Extension

### Adding UI Components
```bash
# Example: Add Tailwind CSS
cd apps/web
pnpm add tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

### Adding New API Endpoints
1. Create new router in `apps/api/src/routers/`
2. Add to `apps/api/src/routers/index.ts`
3. Use in frontend with full type safety!

### Database Models
Add models to `packages/database/prisma/schema/main.prisma`:

```prisma
model User {
  id    String @id @default(cuid())
  email String @unique
  name  String?
  posts Post[]
}

model Post {
  id     String @id @default(cuid())
  title  String
  author User   @relation(fields: [authorId], references: [id])
  authorId String
}
```

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check if PostgreSQL is running
docker-compose ps

# Restart database
cd packages/docker-compose
docker-compose down && docker-compose up -d

# Check logs
docker-compose logs postgres_database
```

### Port Conflicts
- Frontend (3000): Change in `apps/web/package.json`
- Backend (4000): Set `PORT` environment variable
- Database (5432): Change in `packages/docker-compose/docker-compose.yml`

### Build Issues
```bash
# Clean and reinstall
rm -rf node_modules **/**/node_modules pnpm-lock.yaml
pnpm install

# Regenerate Prisma client
pnpm run generate
```

## 📚 Next Steps

1. **Explore the Code** - Look at the example tRPC endpoint and frontend integration
2. **Define Your Schema** - Add database models for your application
3. **Build Features** - Create new API endpoints and frontend pages
4. **Style Your App** - Add your preferred UI framework and design system
5. **Deploy** - The setup is production-ready for platforms like Vercel, Railway, or Docker

## 🤝 Need Help?

- **tRPC Documentation**: https://trpc.io/docs
- **Prisma Documentation**: https://www.prisma.io/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Turborepo Documentation**: https://turbo.build/repo/docs

---

**Happy coding! 🚀** Show us what you can build with this foundation.
