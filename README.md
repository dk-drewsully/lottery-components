# Lottery Components Demo

An interactive React TypeScript component demo showcasing a professional OrderTrackingCard for lottery applications.

## 🎮 Live Demo

**View the interactive demo:** [https://dk-drewsully.github.io/lottery-components/](https://dk-drewsully.github.io/lottery-components/)

### Demo Features
- **Three Interactive States**: Switch between "Order Received", "Getting Results", and "Ready to View"
- **Real-time State Changes**: Click buttons to instantly see different component phases
- **Animated Elements**: Sparkle animation in the "Getting Results" state
- **Professional Design**: Clean, modern UI with design system colors

## 🚀 Component Features

- **TypeScript**: Full type safety and excellent developer experience
- **React 18**: Modern React with hooks and state management
- **Responsive Design**: Works on all screen sizes
- **Design System**: CSS custom properties for consistent styling
- **Component Architecture**: Reusable, well-structured component design

## 📦 Development Setup

### Prerequisites
- **Node.js** (v18 or higher) 
- **npm**

### Quick Start

1. **Clone and setup**:
   ```bash
   git clone https://github.com/dk-drewsully/lottery-components.git
   cd lottery-components
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Component States

The OrderTrackingCard showcases three distinct states:

### 1. Order Received (25% progress)
- ✅ Initial confirmation state
- 📧 "Order received successfully" message
- 🔗 Details and Play More buttons available

### 2. Getting Results (90% progress)  
- ⏳ Active loading state with animated sparkle icon
- 📡 "Getting drawing results..." message
- 🎲 Shows lottery order in progress

### 3. Ready to View (100% progress)
- 🎉 Completion state
- ✨ "Results are ready to view" message
- 🎁 Ready for user to check results

## 🛠️ Technical Architecture

```
src/
├── components/
│   ├── OrderTrackingCard.tsx     # Main component
│   └── OrderTrackingCard.css     # Component styles
├── types/
│   └── lottery.ts                # TypeScript interfaces
├── App.tsx                       # Demo app with state selector
├── App.css                       # App-level styles
└── main.tsx                      # React entry point
```

## 🎨 Design System

The component uses CSS custom properties for consistent theming:

```css
--text-text_brand: #007AFF        /* Primary brand text */
--text-text_subdued: #8B8B8B      /* Secondary text */
--background-background_brand: #007AFF  /* Brand backgrounds */
--border-border_default: #333     /* Default borders */
```

## 📱 Usage Example

```tsx
import { OrderTrackingCard } from './components/OrderTrackingCard';

const order = {
  id: 'DS78DL',
  lotteryName: 'Mega Millions',
  orderDate: '2024-05-02',
  totalAmount: 8.00,
  numberOfPlays: 4,
  status: {
    stage: 'getting_results',
    message: 'Getting drawing results...',
    progress: 90
  }
};

function App() {
  return (
    <OrderTrackingCard
      order={order}
      onDetailsClick={() => console.log('Details clicked')}
      onPlayMoreClick={() => console.log('Play More clicked')}
    />
  );
}
```

## 🚀 Deployment

The demo is deployed to GitHub Pages using Vite's build output:

```bash
npm run build
# Deploy dist/ contents to gh-pages branch
```

## 📄 License

MIT License - feel free to use this component in your projects!

---

**Built with React + TypeScript + Vite** 🚀 