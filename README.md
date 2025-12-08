# Mobile App Prototype - Next.js

A mobile-focused prototype application built with Next.js and Tailwind CSS, featuring a dark green gradient theme with navigation drawer and bottom navigation.

## Features

- **Mobile-first design** - Optimized for mobile viewport (375px max-width)
- **Navigation Drawer** - Slide-out menu with expandable "Start a project" section
- **Bottom Navigation** - Dynamic navigation bar with different icon sets based on active tab
- **History Pages** - Multiple variants showing saved chats, scan history, chat history, and live history
- **Interactive Components** - All buttons and navigation items are fully functional
- **Responsive Layout** - Fixed mobile container size for consistent mobile app appearance

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the mobile app prototype.

## Project Structure

- `app/components/` - React components
  - `NavigationDrawer.tsx` - Side navigation with expandable sections
  - `BottomNav.tsx` - Bottom navigation bar
  - `HistoryPage.tsx` - History page with multiple variants
  - `HomePage.tsx` - Home page component
- `app/page.tsx` - Main app page with mobile container
- `app/globals.css` - Global styles and Tailwind configuration

## Design

The app features:
- Dark green to black gradient background
- Light green/white text and icons
- Mobile-focused layout (max-width: 375px)
- Smooth transitions and interactions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
