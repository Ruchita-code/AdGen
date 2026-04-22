# AdGen — AI Ad Generator

An AI-powered SaaS that creates professional product images and videos using Google's Gemini and Veo AI models.

## ⚠️ Note
> AI generation is currently paused due to API costs.  
> Can be re-enabled instantly by activating Google Cloud billing.

## Live Demo
- 🌐 Frontend: https://ad-49sxv2815-ruchita-codes-projects.vercel.app
- 🔧 Backend: https://adgen-backend-awza.onrender.com

## Features
- 🎨 AI Image Generation (Gemini 3 Pro)
- 🎬 AI Video Generation (Veo 3.1)
- 💳 Credit-based payment system
- 🔐 Authentication (Clerk)
- ☁️ Cloud media storage (Cloudinary)
- 🗄️ PostgreSQL database (Prisma ORM)
- 👥 Community page to explore generations
- 📱 Social-ready formats (9:16 & 16:9)

## Tech Stack
### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)

### AI & Services
- Google Gemini 3 Pro (Image Generation)
- Google Veo 3.1 (Video Generation)
- Clerk (Authentication & Payments)
- Cloudinary (Media Storage)
- Sentry (Error Monitoring)

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Google Cloud API key
- Clerk account
- Cloudinary account

### Installation

1. Clone the repo
\`\`\`bash
git clone https://github.com/Ruchita-code/AdGen.git
cd AdGen
\`\`\`

2. Install dependencies
\`\`\`bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
# server/.env
DATABASE_URL=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SIGNING=
GOOGLE_CLOUD_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# client/.env
VITE_BASEURL=
VITE_CLERK_PUBLISHABLE_KEY=
\`\`\`

4. Run database migrations
\`\`\`bash
cd server
npx prisma migrate deploy
\`\`\`

5. Start the development server
\`\`\`bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev
\`\`\`

## Deployment
- Frontend deployed on **Vercel**
- Backend deployed on **Render**
- Database hosted on **Neon** (PostgreSQL)