# AI Agent Instructions

This document provides guidance for AI agents working on the Conspiracy Night website project.

## Project Overview

This is an Astro-based informational/entertainment website exploring modern conspiracy theories. The site is designed for a fun couples' activity — not to spread misinformation or present speculation as fact.

**Core Purpose**: Entertainment, satire, speculation, and cultural analysis of conspiracy theories.

**Important**: This is NOT a platform for promoting dangerous misinformation. Content must be presented with appropriate disclaimers and skeptical framing.

## Key Principles

1. **Tone**: Fun, atmospheric, curious, slightly absurd
2. **Framing**: Entertainment and cultural commentary, not factual claims
3. **Safety**: Add disclaimers for health, political, and sensitive topics
4. **Balance**: Present "what believers claim" alongside "skeptical explanations"
5. **Engagement**: Create conversation starters, not propaganda

## Specialized Agent Roles

This project uses specialized agents for different tasks:

- **Content Writer** (`.opencode/agents/content-writer.md`): Creates and edits conspiracy topic content
- **Astro Developer** (`.opencode/agents/astro-developer.md`): Handles technical implementation
- **Design Reviewer** (`.opencode/agents/design-reviewer.md`): Ensures design consistency
- **Fact Checker** (`.opencode/agents/fact-checker.md`): Reviews content for safety and accuracy

## Quick Start for AI Sessions

### Before Making Changes

1. Read `/references/site-vision.md` for project goals
2. Check `/references/content-style-guide.md` for tone guidance
3. Review `/references/safety-and-disclaimers.md` for content safety rules

### Common Tasks

- **Add new conspiracy topic**: See `.opencode/agents/content-writer.md`
- **Modify site design**: See `.opencode/agents/astro-developer.md`
- **Review content safety**: See `.opencode/agents/fact-checker.md`
- **Update styling**: See `.opencode/agents/design-reviewer.md`

## Project Structure

```
conspiracy/
├── src/
│   ├── content/
│   │   └── topics/          # Conspiracy topic markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout wrapper
│   ├── components/
│   │   ├── TopicCard.astro  # Card for topic listing
│   │   ├── Disclaimer.astro # Warning/disclaimer component
│   │   └── ScoreBadge.astro # Danger/absurdity meters
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── topics/          # Topic listing and individual pages
│       └── about.astro      # About page
├── references/              # Project documentation
└── .opencode/
    └── agents/             # Specialized agent instructions
```

## Content Architecture

Topics are stored as Astro content collections in `src/content/topics/`. Each topic file includes:

- Frontmatter with metadata (title, category, scores)
- Structured sections (claims, explanations, references)
- Required disclaimer

See `/references/content-style-guide.md` for full schema.

## Safety Guidelines

**Always include disclaimers for:**
- Health-related claims (COVID, vaccines, etc.)
- Political conspiracy theories
- Claims about real people or organizations
- Sensitive cultural or religious topics

**Never:**
- Present speculation as proven fact
- Make definitive medical or legal claims
- Target specific individuals with false claims
- Promote violence or hatred

## Design Philosophy

- Dark mode first
- "Classified document" aesthetics
- Mysterious but playful
- Readable and accessible
- Warning labels and "redacted" styling

See `/references/design-style-guide.md` for details.

## Testing Content

Before committing new content:
1. Check tone (fun but not malicious)
2. Verify disclaimers are present
3. Ensure balance (claims + skeptical view)
4. Test readability
5. Review for potential harm

## Getting Help

If uncertain about content safety or tone, consult:
- `/references/safety-and-disclaimers.md`
- `/references/content-style-guide.md`

When in doubt, add a disclaimer and err on the side of skepticism.
