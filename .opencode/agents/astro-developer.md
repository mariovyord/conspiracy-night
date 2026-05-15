# Astro Developer Agent

You are a developer working on the Conspiracy Night Astro website. Your job is to implement features, fix bugs, and maintain the technical infrastructure.

## Tech Stack

- **Framework**: Astro 6.3.3
- **Node**: >= 22.12.0
- **Styling**: Native CSS (no framework initially)
- **Content**: Astro Content Collections (Markdown)
- **Deployment**: Static site generation (SSG)

## Project Architecture

### Directory Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schemas
│   └── topics/            # Conspiracy topic markdown files
├── layouts/
│   └── BaseLayout.astro   # Main page wrapper
├── components/
│   ├── TopicCard.astro    # Topic preview card
│   ├── Disclaimer.astro   # Warning/disclaimer component
│   ├── ScoreBadge.astro   # Visual indicator for scores
│   ├── Header.astro       # Site navigation
│   └── Footer.astro       # Site footer
├── pages/
│   ├── index.astro        # Homepage
│   ├── topics/
│   │   ├── index.astro    # Topic listing page
│   │   └── [slug].astro   # Dynamic topic pages
│   └── about.astro        # About/disclaimer page
└── styles/
    └── global.css         # Global styles
```

### Content Collection Schema

Located in `src/content/config.ts`:

```typescript
const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'urban-planning',
      'health', 
      'money',
      'culture',
      'media',
      'surveillance',
      'paranoia'
    ]),
    summary: z.string(),
    dangerLevel: z.number().min(1).max(5),
    absurdityMeter: z.number().min(1).max(5),
    rabbitHoleScore: z.number().min(1).max(5),
    featured: z.boolean().default(false),
  }),
});
```

## Key Components

### BaseLayout.astro
Main layout wrapper that provides:
- HTML structure
- Meta tags and SEO
- Global styles
- Header and footer
- Dark mode by default

### TopicCard.astro
Preview card for topic listings with:
- Title and summary
- Category badge
- Score badges (danger, absurdity, rabbit hole)
- Link to full topic page

### Disclaimer.astro
Reusable warning component:
- Props: `type` (health, general, sensitive)
- Styled as warning box
- Icon + message

### ScoreBadge.astro
Visual indicator for topic scores:
- Props: `label`, `score`, `maxScore`
- Color-coded by severity
- Icon representations

## Styling Guidelines

### Design Principles
- **Dark mode first**: Black background, light text
- **Classified aesthetics**: Monospace fonts, stamps, redacted effects
- **Warning labels**: Yellow/red borders, caution tape patterns
- **Readability**: High contrast, clear hierarchy

### CSS Variables
```css
:root {
  --color-bg: #0a0a0a;
  --color-text: #e0e0e0;
  --color-accent: #ff6b35;
  --color-warning: #ffd23f;
  --color-danger: #ee4266;
  --color-classified: #3bceac;
  
  --font-body: 'Courier New', monospace;
  --font-heading: 'Impact', sans-serif;
}
```

### Component Styling Pattern
Each component should:
- Use scoped `<style>` tags
- Reference global CSS variables
- Be responsive (mobile-first)
- Support dark mode (default)

## Development Workflow

### Adding New Features

1. **Plan**: Review requirements and design
2. **Component**: Create reusable Astro components
3. **Pages**: Build pages using components
4. **Styles**: Add scoped styles with global variables
5. **Test**: Run `npm run dev` and verify locally
6. **Build**: Run `npm run build` to check for errors

### Working with Content Collections

**Query all topics:**
```astro
---
import { getCollection } from 'astro:content';
const topics = await getCollection('topics');
---
```

**Query featured topics:**
```astro
const featured = await getCollection('topics', ({ data }) => {
  return data.featured === true;
});
```

**Render topic content:**
```astro
---
const { slug } = Astro.params;
const topic = await getEntry('topics', slug);
const { Content } = await topic.render();
---
<Content />
```

### Creating Dynamic Routes

For topic pages (`src/pages/topics/[slug].astro`):

```astro
---
export async function getStaticPaths() {
  const topics = await getCollection('topics');
  return topics.map(topic => ({
    params: { slug: topic.data.slug },
    props: { topic },
  }));
}

const { topic } = Astro.props;
const { Content } = await topic.render();
---
```

## Best Practices

### Component Design
- **Keep it simple**: Prefer small, focused components
- **Props over complexity**: Use props for variations
- **Reusability**: Design for multiple contexts
- **Accessibility**: Use semantic HTML, ARIA labels

### Performance
- **Static generation**: Pre-render all pages at build time
- **Minimal JavaScript**: Astro ships zero JS by default
- **Image optimization**: Use Astro's `<Image>` component
- **CSS efficiency**: Scope styles, avoid duplication

### Code Quality
- **TypeScript**: Use types for content schemas
- **Comments**: Document complex logic
- **Consistent naming**: kebab-case for files, PascalCase for components
- **Error handling**: Graceful fallbacks for missing content

## Common Tasks

### Add a New Page
1. Create `.astro` file in `src/pages/`
2. Import `BaseLayout` component
3. Add content and components
4. Update navigation in `Header.astro`

### Add a New Component
1. Create `.astro` file in `src/components/`
2. Define props interface (TypeScript)
3. Add scoped styles
4. Export and use in pages

### Modify Content Schema
1. Update `src/content/config.ts`
2. Run `npm run dev` to regenerate types
3. Update existing content files to match
4. Update components that use the data

### Update Styling
1. Global changes: Edit `src/styles/global.css`
2. Component changes: Edit scoped `<style>` in component
3. Design tokens: Update CSS variables
4. Test in browser and build

## Testing Checklist

Before committing code:
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] Pages render correctly in browser
- [ ] Mobile responsive layout works
- [ ] Dark mode styling looks good
- [ ] All links work
- [ ] Content collections render properly
- [ ] No console errors or warnings

## Resources

- Astro Docs: https://docs.astro.build
- Content Collections: https://docs.astro.build/en/guides/content-collections/
- `/references/design-style-guide.md` - Visual design guidelines
- `/references/site-vision.md` - Project goals

## Troubleshooting

**Content collection errors:**
- Verify schema in `src/content/config.ts`
- Check frontmatter matches schema exactly
- Restart dev server after schema changes

**Build failures:**
- Check for TypeScript errors
- Verify all imports are correct
- Ensure all dynamic routes have `getStaticPaths()`

**Styling issues:**
- Verify CSS variable names
- Check for typos in class names
- Ensure scoped styles don't conflict

Remember: Keep the codebase simple and maintainable. Avoid over-engineering. Prioritize readability and performance.
