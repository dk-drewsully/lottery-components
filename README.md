# Lottery Components

A professional React TypeScript component library for lottery applications, featuring modern development practices and clean architecture.

## 🚀 Features

- **TypeScript**: Full type safety and excellent developer experience
- **React 18**: Latest React with modern patterns and hooks
- **Vite**: Fast development server and optimized builds
- **Component-driven**: Reusable, well-structured components
- **Design System**: CSS variables and consistent styling
- **Professional Architecture**: Proper separation of concerns

## 📦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Install Node.js** (if not already installed):
   ```bash
   # On macOS with Homebrew
   brew install node
   
   # Or download from https://nodejs.org
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

### Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 🏗️ Project Structure

```
lottery-components/
├── src/
│   ├── components/           # React components
│   │   ├── OrderTrackingCard.tsx
│   │   └── OrderTrackingCard.css
│   ├── types/               # TypeScript interfaces
│   │   └── lottery.ts
│   ├── styles/              # Global styles
│   ├── App.tsx              # Main app component
│   ├── App.css              # App-specific styles
│   ├── main.tsx             # Entry point
│   └── index.css            # Global CSS reset
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎯 Components

### OrderTrackingCard

A professional lottery order tracking component with:

- **TypeScript interfaces** for type safety
- **Proper props** for reusability
- **Responsive design** that works on all devices
- **Interactive buttons** with callback functions
- **Progress tracking** with animated progress bar
- **Design system** CSS variables

#### Usage

```tsx
import { OrderTrackingCard } from './components/OrderTrackingCard';
import { LotteryOrder } from './types/lottery';

const order: LotteryOrder = {
  id: 'DS78DL',
  lotteryName: 'Mega Millions',
  orderDate: '2024-05-02',
  totalAmount: 8.00,
  numberOfPlays: 4,
  status: {
    stage: 'received',
    message: 'Order received',
    progress: 33
  }
};

<OrderTrackingCard
  order={order}
  onDetailsClick={() => console.log('Details clicked')}
  onPlayMoreClick={() => console.log('Play More clicked')}
/>
```

## 🎨 Design System

The components use CSS custom properties for consistent theming:

```css
:root {
  --text-text_brand: #1976D2;
  --header-01-font-family: "Proxima Nova";
  --header-01-font-size: 16px;
  --header-01-line-height: 24px;
}
```

## 🚀 Deployment

### GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   # The dist/ folder contains the built files
   # Push to gh-pages branch or configure GitHub Pages
   ```

The Vite config is already set up for GitHub Pages deployment with the correct base path.

## 🛠️ Development

### Adding New Components

1. Create component file in `src/components/`
2. Add TypeScript interfaces in `src/types/`
3. Create component-specific CSS file
4. Export from main App component

### Type Safety

All components use proper TypeScript interfaces:

```typescript
interface LotteryOrder {
  id: string;
  lotteryName: string;
  orderDate: string;
  totalAmount: number;
  numberOfPlays: number;
  status: OrderStatus;
}
```

## 💎 Production Ready

This project follows modern React development best practices:

- ✅ **TypeScript** for type safety
- ✅ **Component-driven architecture**
- ✅ **Proper separation of concerns**
- ✅ **Reusable interfaces**
- ✅ **Modern build tooling**
- ✅ **ESLint configuration**
- ✅ **Professional project structure**

No more script tags or inline React - this is a real, maintainable React application! 🎰✨ 