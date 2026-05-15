# Conspiracy Night 🕵️🔍🌙

An entertainment website exploring modern conspiracy theories for fun, discussion, and cultural analysis. Designed as a conversation starter for couples and friends, not as a source of factual information.

## 🎯 What Is This?

Conspiracy Night presents conspiracy theories with:
- **Balanced perspectives** - What believers claim + skeptical explanations
- **Entertainment framing** - Fun and curious, not preachy or scary
- **Safety first** - Appropriate disclaimers for sensitive topics
- **Conversation starters** - Discussion questions for date night or game night

## ✨ Features

- **8 Conspiracy Topics** across 7 categories
- **Dark mode design** with "classified document" aesthetics
- **Scoring system**: Danger Level 🔥 | Absurdity Meter 🎪 | Rabbit Hole 🐰
- **AI-friendly** with comprehensive agent instructions
- **Mobile responsive** and accessible
- **Static site** - fast, secure, easy to deploy

## 📖 Topics Included

### Urban Planning
- 15-Minute Cities: Urban Utopia or Open-Air Prison?

### Money
- CBDCs: The End of Financial Privacy?

### Culture
- Satanic Messages in Pop Music: Selling Souls or Selling Records?
- Bulgarians: The True Chosen People?

### Media
- 9/11: Inside Job or Tragic Attack?

### Surveillance
- Chemtrails: Geoengineering or Contrails?

### Paranoia
- The Moon Landing Was Faked
- Flat Earth: The Ultimate Conspiracy

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.12.0
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit http://localhost:4321 to see the site.

## 📁 Project Structure

```
conspiracy/
├── .opencode/
│   └── agents/              # AI agent instructions
├── references/              # Project documentation
│   ├── site-vision.md
│   ├── content-style-guide.md
│   ├── design-style-guide.md
│   ├── topic-taxonomy.md
│   ├── safety-and-disclaimers.md
│   └── page-ideas.md
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
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   └── topics/        # Topic pages
│   ├── styles/
│   │   └── global.css     # Design system
│   └── content.config.ts  # Content collection schema
├── AGENTS.md               # AI instructions overview
├── PROJECT-SETUP.md        # Complete setup guide
└── README.md              # This file
```

## 🎨 Design System

- **Dark mode first** - Black backgrounds, light text
- **"Classified" aesthetics** - Stamps, redacted text, warning labels
- **Monospace body** + Impact headings
- **Color-coded scores** for danger, absurdity, and complexity
- **Mobile-first responsive** design

## 📝 Adding New Topics

1. Create markdown file in `src/content/topics/`
2. Use frontmatter template:

```yaml
---
title: "Your Conspiracy Theory"
slug: "url-friendly-slug"
category: "category-name"
summary: "One sentence hook"
dangerLevel: 3
absurdityMeter: 2
rabbitHoleScore: 4
featured: false
---
```

3. Follow content structure:
   - What Believers Claim
   - Why It's Compelling
   - The Skeptical Take
   - Pop Culture References
   - Discussion Questions
   - Disclaimer

See `references/content-style-guide.md` for detailed guidance.

## 🤖 AI-Friendly Architecture

This project includes comprehensive AI agent instructions:
- **content-writer.md** - Creating conspiracy content safely
- **astro-developer.md** - Technical implementation
- **design-reviewer.md** - Design consistency
- **fact-checker.md** - Content safety review

See `AGENTS.md` for overview and `.opencode/agents/` for detailed instructions.

## 🛡️ Safety & Disclaimers

All content includes appropriate disclaimers:
- Health topics emphasize consulting professionals
- Political content presented for cultural analysis
- Real people/events handled with sensitivity
- Entertainment framing throughout

See `references/safety-and-disclaimers.md` for policies.

## 🚢 Deployment

This is a static Astro site that can be deployed to:
- **Netlify** - Connect GitHub repo, auto-deploy
- **Vercel** - Import project, auto-deploy
- **Cloudflare Pages** - Connect repo, auto-deploy
- Any static hosting service

Build output is in `dist/` directory.

## 📚 Documentation

- **PROJECT-SETUP.md** - Complete setup and features guide
- **AGENTS.md** - AI agent overview
- **references/** - Style guides, safety policies, topic ideas

## 🎯 Future Ideas

From `references/page-ideas.md`:
- 50+ additional conspiracy topics
- Search and filtering
- Category pages
- Interactive tools (conspiracy generator, belief quiz)
- Newsletter
- Community features (moderated)

## 🤝 Contributing

This is a personal project for fun date nights. If you want to:
- **Suggest topics** - Check `references/page-ideas.md` first
- **Report issues** - Safety concerns take priority
- **Improve content** - Follow style guides in `references/`

## ⚠️ Important Notice

**This is an entertainment website.** Content explores conspiracy theories for discussion and cultural analysis, not to spread misinformation or convince anyone of anything.

- Always verify claims through credible sources
- Consult professionals for medical, legal, or financial advice
- Think critically about all information (including ours)
- Have fun, but stay safe

## 📄 License

This project is for personal/educational use.

## 🛠️ Built With

- [Astro](https://astro.build) - Static site framework
- Vanilla CSS - No frameworks, just variables
- Content Collections - Markdown-based content
- Node.js 22+ - Runtime requirement

## 🌟 Credits

Created as a fun project for exploring conspiracy theories with curiosity, skepticism, and humor.

**Have fun exploring conspiracy theories responsibly!** 🕵️🔍🌙
