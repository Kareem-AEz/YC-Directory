# Startup Platform

<div align="center">
  <img src="/public/logo.png" alt="Startup Platform Logo" width="250">
  <p>Your platform to discover the most innovative startups across all industries.</p>
  
  <div>
    <img src="https://img.shields.io/badge/Next.js-15.3.0-black" alt="Next.js">
    <img src="https://img.shields.io/badge/React-19.0.0-blue" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Sanity%20CMS-3.85.1-red" alt="Sanity CMS">
  </div>
</div>

## ✨ Features

- 🔍 Discover and explore startups across various categories
- 🔐 User authentication with NextAuth
- 📝 Content management with Sanity CMS
- 📱 Fully responsive design
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 📊 Performance monitoring with Sentry
- 🔄 Server and client components with the Next.js App Router
- 📋 Form handling with validation

## 📚 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/) methodology
- **Content Management**: [Sanity CMS](https://www.sanity.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Form Validation**: [Zod](https://github.com/colinhacks/zod)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Error Monitoring**: [Sentry](https://sentry.io/)
- **Markdown**: [Markdown-it](https://github.com/markdown-it/markdown-it) and [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/startup-platform.git
cd startup-platform
```

2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Set up environment variables

```bash
# Create a .env.local file with the following variables
cp .env.example .env.local
# Update the variables in .env.local
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── ui/              # UI components
│   │   └── ...              # Feature-specific components
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── sanity/              # Sanity configuration
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── sanity.config.ts         # Sanity CMS configuration
└── ...                      # Other config files
```

## 🔧 Configuration

### Next.js

Configuration for Next.js can be found in `next.config.ts`.

### Sanity CMS

The Sanity Studio is integrated into the app and can be accessed at `/studio`. Configuration can be found in `sanity.config.ts`.

### Sentry

Error monitoring is set up with Sentry. Configuration can be found in the sentry config files.

## 🧪 Features Showcase

### User Authentication

- Sign up, login, and profile management
- OAuth authentication options

### Startup Discovery

- Browse startups by categories
- Search and filter functionality
- Detailed startup profiles

### Content Management

- Full Sanity CMS integration
- Rich text editing with markdown support
- Image optimization

### Responsive Design

- Mobile-first approach
- Tailwind CSS for styling
- Smooth animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👏 Acknowledgements

- Based on a tutorial by [JavaScript Mastery](https://youtu.be/Zq5fmkH0T78?si=3DO-l0qyjxUgeIzm)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Created by [Kareem Ahmed](https://github.com/Kareem-AEz) with additional enhancements
