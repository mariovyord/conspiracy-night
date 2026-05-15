# Design Style Guide

## Visual Identity

The Conspiracy Night website combines mysterious aesthetics with modern usability. Think "classified documents meet design system" — organized, readable, but with that conspiratorial edge.

## Design Philosophy

### Core Principles

1. **Dark Mode First**: Default to black backgrounds and light text
2. **Classified Aesthetic**: Document stamps, redacted text, warning labels
3. **Readable Above All**: Mystery shouldn't compromise usability
4. **Playful Professionalism**: Fun but not amateurish
5. **Responsive Design**: Mobile-friendly from the start

### Mood & Atmosphere

- 🕵️ Mysterious but inviting
- 📁 Organized like classified files
- ⚠️ Warning labels and caution tape
- 🌙 Night mode, late-night browsing vibe
- 🎭 Slightly absurd, never scary

## Color System

### Primary Palette

```css
/* Background Colors */
--color-bg: #0a0a0a;           /* Primary background - deep black */
--color-bg-elevated: #1a1a1a;  /* Cards, elevated surfaces */
--color-bg-hover: #252525;     /* Hover states */
--color-border: #333333;       /* Borders and dividers */

/* Text Colors */
--color-text: #e0e0e0;         /* Primary text - light gray */
--color-text-dim: #999999;     /* Secondary text */
--color-text-muted: #666666;   /* Tertiary text */

/* Accent Colors */
--color-accent: #ff6b35;       /* Primary CTA - bright orange */
--color-accent-hover: #ff8555; /* Hover state */
--color-classified: #3bceac;   /* "Classified" teal/cyan */
--color-mystery: #9b5de5;      /* Purple for mystery elements */
```

### Semantic Colors

```css
/* Status & Feedback */
--color-success: #06d6a0;      /* Success states */
--color-info: #118ab2;         /* Informational */
--color-warning: #ffd23f;      /* Warnings, caution */
--color-danger: #ee4266;       /* Errors, high danger */

/* Score-Specific Colors */
--color-danger-score: #ef476f;    /* Danger level badge */
--color-absurd-score: #ffd23f;    /* Absurdity meter badge */
--color-rabbit-score: #9b5de5;    /* Rabbit hole badge */
```

### Color Usage Guidelines

**Backgrounds:**
- Main pages: `--color-bg`
- Cards, modals: `--color-bg-elevated`
- Hover states: `--color-bg-hover`

**Text:**
- Headings: `--color-text`
- Body: `--color-text`
- Captions, labels: `--color-text-dim`
- Disabled: `--color-text-muted`

**Interactive:**
- Primary buttons: `--color-accent`
- Links: `--color-accent`
- Links (hover): `--color-accent-hover`

**Decorative:**
- Stamps, labels: `--color-classified`
- Warning boxes: `--color-warning`
- Danger notices: `--color-danger`

## Typography

### Font Families

```css
/* Primary Fonts */
--font-body: 'Courier New', 'Courier', monospace;
--font-heading: 'Impact', 'Arial Black', sans-serif;
--font-ui: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Special Use */
--font-code: 'Courier New', monospace;
--font-stamp: 'Impact', sans-serif;
```

### Font Sizes

```css
/* Size Scale */
--text-xs: 0.75rem;    /* 12px - tiny labels */
--text-sm: 0.875rem;   /* 14px - small text */
--text-base: 1rem;     /* 16px - body text */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.25rem;    /* 20px - small headings */
--text-2xl: 1.5rem;    /* 24px - medium headings */
--text-3xl: 2rem;      /* 32px - large headings */
--text-4xl: 2.5rem;    /* 40px - hero text */
--text-5xl: 3rem;      /* 48px - extra large */
```

### Line Heights

```css
--leading-tight: 1.2;      /* Headings */
--leading-normal: 1.5;     /* Body text */
--leading-relaxed: 1.75;   /* Long-form content */
```

### Font Weights

```css
--font-normal: 400;
--font-medium: 500;
--font-bold: 700;
--font-black: 900;
```

### Typography Usage

**Headings:**
```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-black);
  text-transform: uppercase;
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
}

h3 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  line-height: var(--leading-normal);
  font-weight: var(--font-bold);
}
```

**Body Text:**
```css
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--font-normal);
}
```

**UI Elements:**
```css
button, .button {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## Spacing System

### Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Spacing Usage

**Component Padding:**
- Small: `var(--space-3)`
- Medium: `var(--space-4)`
- Large: `var(--space-6)`

**Section Margins:**
- Small: `var(--space-8)`
- Medium: `var(--space-12)`
- Large: `var(--space-16)`

**Layout Gaps:**
- Tight: `var(--space-2)`
- Normal: `var(--space-4)`
- Relaxed: `var(--space-6)`

## Layout System

### Breakpoints

```css
--screen-sm: 640px;    /* Mobile landscape */
--screen-md: 768px;    /* Tablet */
--screen-lg: 1024px;   /* Desktop */
--screen-xl: 1280px;   /* Large desktop */
```

### Container

```css
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

## Components

### Buttons

**Primary Button:**
```css
.button-primary {
  background: var(--color-accent);
  color: var(--color-bg);
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: 2px;
  font-family: var(--font-ui);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease;
}

.button-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
}
```

**Secondary Button:**
```css
.button-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  /* ... rest same as primary */
}
```

### Cards

**Topic Card:**
```css
.topic-card {
  background: var(--color-bg-elevated);
  border: 2px solid var(--color-border);
  padding: var(--space-6);
  border-radius: 4px;
  transition: all 200ms ease;
}

.topic-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
```

### Badges

**Score Badge:**
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: 12px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  font-family: var(--font-ui);
}

.badge-danger {
  background: rgba(239, 71, 111, 0.2);
  color: var(--color-danger-score);
  border: 1px solid var(--color-danger-score);
}
```

### Disclaimer Box

**Warning Style:**
```css
.disclaimer {
  background: rgba(255, 210, 63, 0.1);
  border: 3px solid var(--color-warning);
  border-left-width: 8px;
  padding: var(--space-6);
  margin: var(--space-8) 0;
}

.disclaimer-heading {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-warning);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-3);
}
```

**Danger Style:**
```css
.disclaimer-danger {
  background: rgba(238, 66, 102, 0.1);
  border-color: var(--color-danger);
}

.disclaimer-danger .disclaimer-heading {
  color: var(--color-danger);
}
```

## Special Effects

### "Classified" Stamp

```css
.stamp {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  border: 3px solid var(--color-classified);
  color: var(--color-classified);
  font-family: var(--font-stamp);
  font-size: var(--text-lg);
  font-weight: var(--font-black);
  text-transform: uppercase;
  transform: rotate(-5deg);
  opacity: 0.8;
  letter-spacing: 0.1em;
}
```

### Redacted Text Effect

```css
.redacted {
  background: #000;
  color: transparent;
  text-shadow: none;
  user-select: none;
  position: relative;
}

.redacted::before {
  content: '███████████';
  position: absolute;
  left: 0;
  color: #000;
}
```

### Warning Tape Border

```css
.warning-border {
  border: 4px solid;
  border-image: repeating-linear-gradient(
    45deg,
    #ffd23f 0,
    #ffd23f 20px,
    #000 20px,
    #000 40px
  ) 4;
}
```

### Glitch Effect (Optional)

```css
.glitch {
  position: relative;
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}
```

## Iconography

### Icon Style
- Use simple, line-based icons
- Consistent stroke width (2px)
- Match text color by default
- Size: 20px × 20px (medium), 24px × 24px (large)

### Score Icons
- 🔥 Danger Level (fire)
- 🎪 Absurdity Meter (circus tent)
- 🐰 Rabbit Hole Score (rabbit)

### UI Icons
- ⚠️ Warning/Disclaimer
- 🔍 Search
- 📁 Category
- 🔗 External link
- ✕ Close/Cancel
- ✓ Success/Check

## Accessibility

### Contrast Requirements
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text (18px+): 3:1 minimum
- UI elements: 3:1 minimum

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Touch Targets
- Minimum size: 44px × 44px
- Spacing between: 8px minimum

### Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Design

### Mobile First Approach
Start with mobile styles, add complexity for larger screens.

```css
/* Mobile default */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Typography Scaling

```css
/* Mobile */
h1 { font-size: var(--text-3xl); }

/* Tablet and up */
@media (min-width: 768px) {
  h1 { font-size: var(--text-4xl); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  h1 { font-size: var(--text-5xl); }
}
```

## Animation Guidelines

### Transition Timing
```css
--transition-fast: 100ms;
--transition-normal: 200ms;
--transition-slow: 300ms;
```

### Easing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Usage
- Hover effects: 200ms ease-out
- Page transitions: 300ms ease-in-out
- Micro-interactions: 100ms ease-out

## Implementation Notes

### CSS Organization
```
styles/
├── global.css          # CSS variables, resets
├── typography.css      # Font styles (if separate)
├── components.css      # Reusable components (if separate)
└── utilities.css       # Helper classes (if separate)
```

### Component-Scoped Styles
Prefer scoped `<style>` tags in Astro components over global styles.

### CSS Variables
Always use CSS variables for colors, spacing, and typography to maintain consistency.

## Design Checklist

Before publishing any page:
- [ ] Dark mode styling is applied
- [ ] Text contrast meets WCAG AA
- [ ] Touch targets are 44px minimum
- [ ] Hover and focus states are visible
- [ ] Mobile responsive (320px width works)
- [ ] Spacing uses spacing scale
- [ ] Colors use CSS variables
- [ ] Typography uses defined sizes
- [ ] Animations respect prefers-reduced-motion
- [ ] "Classified" aesthetic is present
- [ ] Warning/disclaimer styling stands out

## Resources

- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Responsive design testing: Chrome DevTools
- Accessibility: https://www.w3.org/WAI/WCAG21/quickref/

Remember: Design should enhance the content, not overshadow it. Keep it mysterious but readable!
