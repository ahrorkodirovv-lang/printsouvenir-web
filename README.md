# Printing & Souvenir Company Website

A modern, multi-page website for a full-service printing and souvenir company built with Next.js 14, TypeScript, Tailwind CSS, and advanced features including 3D product viewers, multi-language support, and dark mode.

## Features

- ✅ **Multi-language Support**: Uzbek (uz), Russian (ru), and English (en)
- ✅ **Dark/Light Theme**: Seamless theme switching with persistent preferences
- ✅ **3D Product Viewers**: Interactive 360° product models using Three.js
- ✅ **Interactive Flipbook**: Digital page-flipping for printed materials
- ✅ **Multi-step Order Form**: Comprehensive custom order form with file upload
- ✅ **Price Calculator**: Instant price estimation widget
- ✅ **Responsive Design**: Mobile-first, fully responsive layout
- ✅ **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- ✅ **Admin Panel**: Basic CRUD interface for managing products and orders

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Internationalization**: Custom i18n implementation with Zustand
- **Theme Management**: next-themes
- **3D Graphics**: Three.js / React-Three-Fiber
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **State Management**: Zustand
- **File Upload**: react-dropzone

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd printsouvenir-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
printsouvenir-web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page with 3D/flipbook
│   ├── custom-order/      # Multi-step order form
│   ├── help/              # FAQ page
│   ├── contacts/          # Contact page
│   ├── admin/             # Admin panel
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── PriceCalculator.tsx
│   ├── ThreeDViewer.tsx
│   ├── Flipbook.tsx
│   └── ...
├── lib/
│   └── i18n/             # Translation files
│       ├── en.ts
│       ├── ru.ts
│       └── uz.ts
└── hooks/                # Custom hooks
    ├── useStore.ts
    └── useTranslations.ts
```

## Pages

- **Homepage** (`/`): Hero section, benefits, services grid, featured portfolio, price calculator
- **Services** (`/services`): Detailed service categories with price calculator
- **Portfolio** (`/portfolio`): Filterable gallery with 3D viewers and flipbook
- **Custom Order** (`/custom-order`): Multi-step form with file upload
- **Help** (`/help`): Collapsible FAQ sections
- **Contacts** (`/contacts`): Contact information and map integration
- **Admin** (`/admin`): Admin panel for managing content

## Customization

### Theme Colors

Edit `app/globals.css` to customize light/dark theme colors:

```css
:root {
  --light-bg: #FFFFFF;
  --light-text: #2F2F2F;
  --light-primary: #2A5C8B;
  --light-accent: #F4B942;
  --dark-bg: #121212;
  --dark-text: #E0E0E0;
  --dark-primary: #64B5F6;
  --dark-accent: #F4B942;
}
```

### Translations

Add or modify translations in `lib/i18n/`:
- `en.ts` - English
- `ru.ts` - Russian
- `uz.ts` - Uzbek

## Building for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.
