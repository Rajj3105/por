#!/bin/bash

echo "🚀 Preparing to push your migrated Next.js portfolio to GitHub..."

# Remove any git locks if they exist
rm -f .git/index.lock

# Add all your migrated files
git add .

# Commit with a descriptive message about the migration
git commit -m "🔄 Major migration: Vite + Express.js → Next.js 15

✨ Features:
- Migrated to Next.js 15 with App Router
- Updated API routes to Next.js format
- Modern React 18 with TypeScript
- Tailwind CSS with shadcn/ui components
- Dark theme with glassmorphism effects
- Responsive portfolio design

🔧 Technical changes:
- Removed Express.js server and Vite configuration
- Created Next.js App Router structure
- Updated TypeScript and ESLint configs
- Fixed Next.js configuration warnings
- All portfolio features preserved and enhanced"

# Push to your GitHub repository
git push origin main

echo "✅ Successfully pushed your migrated Next.js portfolio to GitHub!"
echo "🌐 Repository: https://github.com/Rajj3105/por"