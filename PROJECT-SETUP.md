# Conspiracy Night - Setup Complete! 🎉

Your AI-friendly Astro website for exploring conspiracy theories is ready!

## What's Been Created

### 1. AI Agent Instructions ✅
Located in `.opencode/agents/` and `AGENTS.md`:
- **content-writer.md** - Guide for creating conspiracy topic content
- **astro-developer.md** - Technical implementation guide
- **design-reviewer.md** - Design system and visual consistency
- **fact-checker.md** - Content safety and disclaimer guidelines
- **AGENTS.md** - Overview document for AI sessions

### 2. Reference Documentation ✅
Located in `references/`:
- **site-vision.md** - Project philosophy and goals
- **content-style-guide.md** - Writing tone, structure, and templates
- **design-style-guide.md** - Complete design system (colors, typography, components)
- **topic-taxonomy.md** - Category system and organization
- **safety-and-disclaimers.md** - Safety policies and disclaimer templates
- **page-ideas.md** - 50+ conspiracy topic ideas and feature suggestions

### 3. Astro Content Collections ✅
- Content collection schema defined in `src/content.config.ts`
- Categories: urban-planning, health, money, culture, media, surveillance, paranoia
- Scoring system: danger level, absurdity meter, rabbit hole score
- Support for featured topics and metadata

### 4. Sample Content ✅
Three complete conspiracy topics created:
- **15-Minute Cities** (urban-planning) - Walkable neighborhoods as control
- **CBDCs** (money) - Digital currency surveillance
- **Satanic Messages in Pop Music** (culture) - Occult symbolism

### 5. Components & Layouts ✅
Created in `src/components/` and `src/layouts/`:
- **BaseLayout.astro** - Main page wrapper with header/footer
- **TopicCard.astro** - Topic preview card with scores
- **Disclaimer.astro** - Reusable warning component (4 types)
- **ScoreBadge.astro** - Visual score indicators

### 6. Pages ✅
Created in `src/pages/`:
- **index.astro** - Homepage with hero, featured topics, how-it-works
- **topics/index.astro** - All topics listing page
- **topics/[slug].astro** - Dynamic topic detail pages
- **about.astro** - About page with disclaimers

### 7. Design System ✅
Located in `src/styles/global.css`:
- Dark mode first (black backgrounds, light text)
- "Classified document" aesthetic
- CSS variables for consistency
- Responsive design (mobile-first)
- Accessibility features

## Project Structure

```
conspiracy/
├── .opencode/
│   └── agents/              # AI agent instructions
├── references/              # Project documentation
├── src/
│   ├── content/
│   │   └── topics/         # Conspiracy topic markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── TopicCard.astro
│   │   ├── Disclaimer.astro
│   │   └── ScoreBadge.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── topics/
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── AGENTS.md               # Main AI instructions
└── README.md
```

## How to Use

### Run the Development Server
```bash
npm run dev
```
Visit: http://localhost:4321

### Build for Production
```bash
npm run build
npm run preview
```

### Add New Conspiracy Topics

1. Create a new markdown file in `src/content/topics/`
2. Use this template:

```markdown
---
title: "Your Conspiracy Theory Title"
slug: "url-friendly-slug"
category: "category-name"
summary: "One sentence hook"
dangerLevel: 3
absurdityMeter: 2
rabbitHoleScore: 4
featured: true
---

## What Believers Claim
[Content here]

## Why It's Compelling
[Content here]

## The Skeptical Take
[Content here]

## Pop Culture References
[Content here]

## Discussion Questions for Conspiracy Night
[Questions here]

---

⚠️ **[Appropriate Disclaimer]**
```

3. Follow the content style guide in `references/content-style-guide.md`

## Key Features

### Scoring System
- 🔥 **Danger Level** (1-5): How harmful is believing this?
- 🎪 **Absurdity Meter** (1-5): How ridiculous is the claim?
- 🐰 **Rabbit Hole Score** (1-5): How deep/complex is the theory?

### Safety First
- All sensitive topics include appropriate disclaimers
- Health topics emphasize consulting professionals
- Balance between entertainment and responsibility
- Content safety guidelines in every agent instruction

### AI-Friendly
- Comprehensive agent instructions for different tasks
- Clear content style guide
- Safety and disclaimer templates
- Design system documentation
- 50+ topic ideas ready to implement

## Next Steps

### Immediate Improvements
1. Add more conspiracy topics (see `references/page-ideas.md`)
2. Test on mobile devices
3. Add favicon and social media images
4. Set up deployment (Netlify, Vercel, Cloudflare Pages)

### Future Features
Consider adding (from `references/page-ideas.md`):
- Search functionality
- Category filtering
- "Conspiracy Theory Generator" tool
- Newsletter signup
- Community features (moderated)
- Podcast integration

## AI Agent Usage

When working with AI on this project:

1. **Adding Content**: Use the content-writer agent
2. **Technical Changes**: Use the astro-developer agent
3. **Design Updates**: Use the design-reviewer agent
4. **Safety Review**: Use the fact-checker agent

All agent instructions are in `.opencode/agents/` and reference the documentation in `references/`.

## Important Reminders

### Content Safety
- Always include appropriate disclaimers
- Present multiple perspectives
- Use attributive language ("believers claim")
- Never provide medical/legal/financial advice
- Review safety guidelines before publishing

### Design Consistency
- Use CSS variables from global.css
- Follow component patterns
- Maintain dark mode aesthetic
- Ensure mobile responsiveness
- Test accessibility

### Tone Guidelines
- Curious, not condescending
- Playful, not mean-spirited
- Balanced, not preachy
- Entertaining, not scary

## Resources

- Astro Docs: https://docs.astro.build
- Content Collections: https://docs.astro.build/en/guides/content-collections/
- All project documentation in `references/`
- All agent instructions in `.opencode/agents/`

## Build Status

✅ Build successful
✅ All pages rendering correctly
✅ Content collections working
✅ Components functional
✅ Styling applied
✅ Sample content created

---

**Have fun exploring conspiracy theories responsibly!** 🕵️🔍🌙
