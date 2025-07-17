# Lottery Components Design System

## Overview

This design system provides a comprehensive set of design tokens, components, and patterns for building consistent lottery application interfaces. Built with CSS custom properties for easy theming and maximum developer handoff efficiency.

## 🎯 Purpose

- **Designer → Developer Handoffs**: Clear, documented patterns for seamless implementation
- **Consistency**: Unified visual language across all components
- **Maintainability**: Centralized design tokens for easy updates
- **Accessibility**: WCAG 2.1 AA compliant patterns built-in
- **Responsiveness**: Mobile-first, flexible layouts

## 📁 File Structure

```
src/
├── styles/
│   └── design-system.css      # Core design system
├── components/
│   ├── OrderTrackingCard.tsx  # Main component
│   └── OrderTrackingCard.css  # Component styles using design system
├── index.css                  # Global styles + design system import
└── App.css                    # Demo app styles
```

## 🎨 Design Tokens

### Colors

#### Brand Colors
```css
--color-brand-primary: #1976D2        /* Primary brand blue */
--color-brand-primary-hover: #0056CC  /* Hover state */
--color-brand-primary-light: rgba(0, 122, 255, 0.1)  /* Light background */
```

#### Text Colors
```css
--color-text-primary: #131415    /* Primary text */
--color-text-secondary: #63707B  /* Secondary text */
--color-text-subdued: #8B8B8B    /* Subdued text */
--color-text-brand: #1976D2     /* Brand text */
--color-text-on-brand: #FFFFFF  /* Text on brand backgrounds */
--color-text-on-dark: #FFFFFF   /* Text on dark backgrounds */
```

#### Background Colors
```css
--color-bg-primary: #FFFFFF     /* Primary background */
--color-bg-secondary: #F8F9FA   /* Secondary background */
--color-bg-dark: #000000        /* Dark background */
--color-bg-brand: #007AFF       /* Brand background */
--color-bg-overlay: rgba(0, 0, 0, 0.08)  /* Overlay */
```

#### Border Colors
```css
--color-border-default: #E7EDF2     /* Default borders */
--color-border-subtle: #F1F3F4      /* Subtle borders */
--color-border-brand: #007AFF       /* Brand borders */
--color-border-interactive: #333    /* Interactive element borders */
```

### Typography

#### Font Families
```css
--font-family-primary: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', roboto, sans-serif
--font-family-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', roboto, sans-serif
```

#### Typography Scale
```css
/* Display Text - App titles, hero text */
--text-display-size: 2rem
--text-display-weight: 600
--text-display-line-height: 1.2

/* Header 01 - Component titles, section headers */
--text-header-01-size: 16px
--text-header-01-weight: 700
--text-header-01-line-height: 24px

/* Header 02 - Subsection headers */
--text-header-02-size: 1.1rem
--text-header-02-weight: 500
--text-header-02-line-height: 1.4

/* Body 01 & 02 - Regular text content */
--text-body-01-size: 14px
--text-body-01-weight: 400
--text-body-01-line-height: 20px

/* Emphasis 01 - Interactive elements */
--text-emphasis-01-size: 0.9rem
--text-emphasis-01-weight: 500
--text-emphasis-01-line-height: 1.4

/* Emphasis 02 - Status text, labels */
--text-emphasis-02-size: 14px
--text-emphasis-02-weight: 700
--text-emphasis-02-line-height: 20px
```

### Spacing System

Based on 4px grid system:
```css
--spacing-xs: 4px    /* Micro spacing */
--spacing-sm: 8px    /* Small spacing */
--spacing-md: 12px   /* Medium spacing */
--spacing-lg: 16px   /* Large spacing */
--spacing-xl: 20px   /* Extra large spacing */
--spacing-2xl: 24px  /* 2X large spacing */
--spacing-3xl: 32px  /* 3X large spacing */
--spacing-4xl: 40px  /* 4X large spacing */
--spacing-5xl: 48px  /* 5X large spacing */
```

### Border Radius
```css
--radius-sm: 4px   /* Small radius */
--radius-md: 8px   /* Medium radius */
--radius-lg: 12px  /* Large radius */
--radius-xl: 16px  /* Extra large radius */
```

### Shadows
```css
--shadow-sm: 0px 1px 2px rgba(0, 0, 0, 0.04)  /* Subtle shadow */
--shadow-md: 0px 2px 4px rgba(0, 0, 0, 0.08)  /* Medium shadow */
--shadow-lg: 0px 4px 8px rgba(0, 0, 0, 0.12)  /* Large shadow */
```

### Transitions
```css
--transition-fast: 0.15s ease    /* Fast transitions */
--transition-normal: 0.2s ease   /* Normal transitions */
--transition-slow: 0.3s ease     /* Slow transitions */
```

## 🧩 Component Patterns

### Buttons

#### Primary Button
```css
.btn.btn-primary {
  background: var(--color-bg-brand);
  color: var(--color-text-on-brand);
  padding: var(--spacing-md) var(--spacing-xl);
}
```

#### Secondary Button
```css
.btn.btn-secondary {
  background: transparent;
  color: var(--color-text-brand);
  border: 1px solid var(--color-border-interactive);
  padding: var(--spacing-md) var(--spacing-xl);
}
```

#### Ghost Button
```css
.btn.btn-ghost {
  background: transparent;
  color: var(--color-text-brand);
  padding: var(--spacing-md) var(--spacing-xl);
}
```

### Cards

#### Standard Card
```css
.card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}
```

### Progress Indicators

#### Progress Bar
```css
.progress-container {
  display: flex;
  gap: var(--spacing-xs);
  height: var(--spacing-xs);
  position: relative;
}

.progress-segment {
  flex: 1;
  background: var(--color-progress-inactive);
  border-radius: var(--radius-sm);
}

.progress-segment.active {
  background: var(--color-progress-active);
}
```

## 🎭 Animations

### Available Animations
```css
.animate-shimmer   /* Shimmer effect for progress bars */
.animate-sparkle   /* Sparkle animation for status icons */
.animate-fadeIn    /* Fade in animation */
.animate-slideIn   /* Slide in animation */
```

### Custom Keyframes
- `shimmer`: Horizontal shimmer effect
- `sparkle`: Scale and rotate animation
- `fadeIn`: Opacity and translate fade in
- `slideIn`: Horizontal slide in

## 📱 Responsive Design

### Breakpoints
- Mobile: `max-width: 480px`
- Additional breakpoints can be added as needed

### Mobile Adjustments
- Reduced spacing values
- Flexible card widths
- Stacked button layouts

## ♿ Accessibility Features

### Focus Management
- Visible focus indicators with `--color-brand-primary`
- `:focus-visible` support for keyboard navigation
- Focus-within states for container components

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  /* Enhanced contrast ratios */
}
```

### Screen Reader Support
- `.sr-only` class for screen reader only content
- Proper semantic markup patterns

## 🛠️ Usage Guidelines

### For Designers

1. **Use Design Tokens**: Reference the token values for consistent spacing, colors, and typography
2. **Component Patterns**: Leverage existing patterns before creating new ones
3. **Accessibility**: Ensure color contrast ratios meet WCAG standards
4. **Responsive**: Design mobile-first, then enhance for larger screens

### For Developers

1. **Import Design System**: Always import `design-system.css` first
2. **Use CSS Custom Properties**: Reference tokens instead of hard-coded values
3. **Utility Classes**: Use provided utility classes for common patterns
4. **Component Classes**: Follow the established naming conventions

### Implementation Example

```tsx
// Component using design system
<div className="card">
  <div className="card-header">
    <h3 className="text-header-01 color-text-brand">Title</h3>
  </div>
  <div className="card-body">
    <p className="text-body-01 color-text-primary">Content</p>
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

## 🔄 Maintenance

### Adding New Tokens
1. Define in `:root` section of `design-system.css`
2. Follow naming convention: `--category-property-variant`
3. Update documentation
4. Test across all components

### Updating Existing Tokens
1. Update value in `design-system.css`
2. Verify impact across all components
3. Update documentation if needed

## 📊 Performance

### Optimization Features
- CSS custom properties for efficient theming
- Minimal CSS specificity
- Reusable utility classes
- Print-optimized styles

### Best Practices
- Use utility classes for common patterns
- Avoid inline styles
- Leverage CSS custom properties for consistency
- Test performance impact of animations

## 🚀 Future Enhancements

### Potential Additions
- Dark theme variants
- Additional component patterns
- Extended color palette
- Additional animation library
- Component sizing variants

### Extensibility
The design system is built to be easily extensible. New tokens, patterns, and components can be added following the established conventions. 