# Lottery Components - Professional Design System Demo

A comprehensive React TypeScript component library showcasing professional OrderTrackingCard components with a complete design system optimized for designer-developer handoffs.

## 🎮 Live Demo

**View the interactive demo:** [https://dk-drewsully.github.io/lottery-components/](https://dk-drewsully.github.io/lottery-components/)

### Demo Features
- **Three Interactive States**: Switch between "Order Received", "Getting Results", and "Ready to View"  
- **Real-time State Changes**: Click buttons to instantly see different component phases
- **Animated Progress Bar**: Continuous sheen animation flows across filled segments
- **Professional Design System**: Complete token-based styling with accessibility support

## 🎯 Design System Features

- **📐 Design Tokens**: Comprehensive CSS custom properties for colors, typography, spacing
- **♿ Accessibility**: WCAG 2.1 AA compliant with focus management and motion preferences  
- **📱 Responsive**: Mobile-first design with flexible breakpoints
- **🎨 Professional Patterns**: Reusable button, card, and progress components
- **🔧 Developer Handoffs**: Self-documenting code with clear component boundaries

## 📦 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm**

### Development Setup

1. **Clone and install**:
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

## 🏗️ Architecture

### File Structure
```
src/
├── styles/
│   └── design-system.css      # Complete design system with tokens
├── components/
│   ├── OrderTrackingCard.tsx  # Main component with TypeScript
│   └── OrderTrackingCard.css  # Component styles using design system
├── types/
│   └── lottery.ts             # TypeScript interfaces
├── App.tsx                    # Interactive demo with state management
├── App.css                    # Demo app styles using design system
├── index.css                  # Global styles + design system import
└── main.tsx                   # React 18 entry point
```

### Design System Architecture
- **Token-Based**: All values defined as CSS custom properties
- **Utility Classes**: Common patterns available as reusable classes
- **Component Patterns**: Standard card, button, and progress patterns
- **Accessibility Built-in**: Focus management, reduced motion, high contrast

## 🎨 Design System

### Core Design Tokens

#### Colors
```css
/* Brand Colors */
--color-brand-primary: #1976D2
--color-brand-primary-hover: #0056CC

/* Text Colors */  
--color-text-primary: #131415
--color-text-secondary: #63707B
--color-text-brand: #1976D2

/* Backgrounds */
--color-bg-primary: #FFFFFF
--color-bg-dark: #000000
--color-bg-brand: #007AFF
```

#### Typography Scale
```css
/* Display (App Titles) */
--text-display-size: 2rem
--text-display-weight: 600

/* Headers (Component Titles) */
--text-header-01-size: 16px
--text-header-01-weight: 700

/* Body Text */
--text-body-02-size: 14px
--text-body-02-weight: 400

/* Emphasis (Status, Labels) */
--text-emphasis-02-size: 14px
--text-emphasis-02-weight: 700
```

#### Spacing System (4px Grid)
```css
--spacing-xs: 4px    /* Micro spacing */
--spacing-sm: 8px    /* Small spacing */
--spacing-md: 12px   /* Medium spacing */
--spacing-lg: 16px   /* Large spacing */
--spacing-xl: 20px   /* Extra large spacing */
```

### Component Usage

#### Basic Card Pattern
```tsx
<div className="card">
  <div className="card-header">
    <h3 className="text-header-01 color-text-brand">Title</h3>
  </div>
  <div className="card-body">
    <p className="text-body-01 color-text-primary">Content</p>
  </div>
</div>
```

#### Progress Bar Pattern
```tsx
<div className="progress-container" data-progress="67">
  <div className="progress-segment active"></div>
  <div className="progress-segment active"></div>
  <div className="progress-segment"></div>
</div>
```

## 🧩 Component States

The OrderTrackingCard demonstrates three distinct states with accurate progress visualization:

### 1. Order Received (33% progress)
- ✅ **Status**: "Order received successfully"
- 📊 **Progress**: 1 of 3 segments filled
- 🎯 **Use Case**: Initial confirmation state

### 2. Getting Results (67% progress)  
- ⏳ **Status**: "Getting drawing results..." with animated sparkle
- 📊 **Progress**: 2 of 3 segments filled  
- 🎯 **Use Case**: Active processing state

### 3. Ready to View (67% progress)
- 🎉 **Status**: "Results are ready to view"
- 📊 **Progress**: 2 of 3 segments filled
- 🎯 **Use Case**: Completion state ready for user action

## 📱 Responsive Features

- **Mobile-First**: Optimized for mobile with flexible scaling
- **Flexible Layout**: Card width adapts to container
- **Touch-Friendly**: Button sizes optimized for touch interaction
- **Performance**: Minimal CSS with efficient animations

## ♿ Accessibility

### Built-in Features
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Readers**: Semantic markup with ARIA support
- **Motion Sensitivity**: Respects `prefers-reduced-motion`
- **High Contrast**: Enhanced contrast mode support
- **Focus Management**: Proper focus order and visibility

### WCAG 2.1 AA Compliance
- Color contrast ratios exceed 4.5:1
- Interactive elements meet minimum size requirements
- Keyboard navigation available for all functionality

## 🚀 Deployment

### GitHub Pages Deployment
```bash
# Build the project
npm run build

# Deploy to gh-pages branch (automated)
git add dist && git commit -m "Deploy updates"
git push origin main
```

### Production Build Features
- **Optimized Assets**: Vite builds optimized for production
- **Cache Busting**: Automatic asset versioning
- **Clean URLs**: Proper routing for GitHub Pages

## 🛠️ Development Workflow

### Designer → Developer Handoffs

1. **Design Tokens**: All values defined in `design-system.css`
2. **Component Patterns**: Reusable patterns documented in `DESIGN_SYSTEM.md`
3. **Self-Documenting**: Clean, readable code with inline documentation
4. **TypeScript**: Full type safety for reliable handoffs

### Best Practices
- Use design tokens instead of hard-coded values
- Follow established component patterns  
- Test accessibility with keyboard navigation
- Verify responsive behavior on mobile devices

## 📄 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**: Comprehensive design system documentation
- **Component Comments**: Inline documentation in component files
- **TypeScript**: Self-documenting interfaces and props

## 🔧 Technical Stack

- **React 18**: Modern React with hooks and TypeScript
- **TypeScript**: Full type safety and excellent developer experience
- **Vite**: Fast development server and optimized builds
- **CSS Custom Properties**: Token-based styling system
- **GitHub Pages**: Automated deployment with cache busting

## 🎯 Use Cases

### For Product Designers
- **Prototype Development**: Quick, interactive prototypes for stakeholder review
- **Design System**: Complete token library for consistent design
- **Component Library**: Reusable patterns for multiple projects
- **Handoff Documentation**: Clear specifications for development teams

### For Developers  
- **Component Implementation**: Production-ready React components
- **Design System**: Token-based styling for easy maintenance
- **TypeScript**: Type-safe interfaces and props
- **Accessibility**: WCAG-compliant patterns built-in

### For Stakeholders
- **Interactive Demo**: Live component demonstration
- **State Visualization**: Clear progress and status representations
- **Professional Quality**: Production-ready UI components

## 📈 Performance

- **Lightweight**: Minimal CSS with efficient utility classes
- **Optimized**: Vite build optimization for fast loading
- **Animations**: Hardware-accelerated CSS animations
- **Responsive**: Efficient media queries with mobile-first approach

## 📄 License

MIT License - feel free to use these components and design system in your projects!

---

**Built with React + TypeScript + Vite + Professional Design System** 🚀

*Optimized for designer-developer handoffs and production deployment* 