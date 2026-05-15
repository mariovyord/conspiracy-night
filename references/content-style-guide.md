# Content Style Guide

## Writing for Conspiracy Night

This guide helps maintain consistent tone, structure, and safety across all conspiracy theory content.

## Core Writing Principles

### 1. Curiosity Over Certainty
Present ideas with genuine curiosity, not absolute claims.

**Good:**
- "According to this theory..."
- "Some people believe..."
- "What if...?"
- "Believers claim..."

**Avoid:**
- "The truth is..."
- "Everyone knows..."
- "It's obvious that..."
- "Definitely" or "certainly"

### 2. Balance Over Bias
Always present both the conspiracy theory AND the skeptical response.

**Structure:**
1. What Believers Claim (fair presentation)
2. Why It's Compelling (understand the appeal)
3. Skeptical Take (rational counterarguments)

### 3. Playful Over Preachy
Make it fun to read, not a lecture.

**Good:**
- Humor and absurdity where appropriate
- Pop culture references
- Casual, conversational tone
- "Let's explore..." framing

**Avoid:**
- Condescending language
- Academic jargon without explanation
- Self-righteousness
- Mockery of sincere beliefs

### 4. Conversation Over Confrontation
The goal is to spark discussion, not win arguments.

**Good:**
- Discussion questions that invite multiple viewpoints
- "What do you think?" framing
- Acknowledge complexity
- Respect different perspectives

**Avoid:**
- Divisive political language
- "Us vs. them" framing
- Aggressive debunking
- Dismissing concerns entirely

## Content Structure Template

Every conspiracy topic should follow this structure:

### Frontmatter (YAML)
```yaml
---
title: "The Theory Name"
slug: "url-friendly-slug"
category: "urban-planning" # or health, money, culture, media, surveillance, paranoia
summary: "One compelling sentence that hooks the reader"
dangerLevel: 3        # 1-5: How harmful is believing this?
absurdityMeter: 2     # 1-5: How ridiculous is the claim?
rabbitHoleScore: 4    # 1-5: How deep/complex is the theory?
featured: true        # Show on homepage?
---
```

### Introduction (1-2 paragraphs)
Set the scene. Draw the reader in. Establish the basic premise without taking a side.

**Example:**
> "Imagine a world where you never need a car — everything you need is within a 15-minute walk or bike ride. Sounds idyllic, right? But according to some, it's actually a sinister plot to control your movement and trap you in open-air prisons. Welcome to the great 15-minute city debate."

### What Believers Claim (2-3 paragraphs)
Present the conspiracy theory fairly and clearly. Use "according to" and "believers claim" language.

**Include:**
- Core claims of the theory
- Who is supposedly behind it
- The alleged motive
- Key "evidence" believers cite

**Tone:** Neutral, journalistic, fair

### Why It's Compelling (2-3 paragraphs)
Explain the psychological, social, or cultural reasons this theory resonates.

**Include:**
- Real concerns it addresses
- Legitimate grievances it reflects
- Pattern recognition that makes it seem plausible
- Why intelligent people might find it convincing

**Tone:** Understanding, empathetic, insightful

### The Skeptical Take (2-3 paragraphs)
Present rational explanations and counterarguments.

**Include:**
- Alternative explanations
- What the evidence actually shows
- Expert consensus (when relevant)
- Logical flaws in the theory

**Tone:** Thoughtful, not dismissive

### Pop Culture References (1-2 paragraphs)
How has this conspiracy appeared in movies, TV, memes, social media?

**Include:**
- Movies or TV shows featuring similar themes
- Viral social media moments
- Meme culture
- Celebrity involvement

**Tone:** Fun, entertaining

### Discussion Questions (3-5 questions)
Conversation starters for couples/friends.

**Make them:**
- Open-ended (not yes/no)
- Thought-provoking
- Non-confrontational
- Fun to debate

**Example:**
- "If you could redesign your city, what would be within walking distance?"
- "Where's the line between urban planning and control?"
- "What conspiracy theory do you find most compelling and why?"

### Disclaimer
**ALWAYS INCLUDE** an appropriate disclaimer based on topic sensitivity.

See `/references/safety-and-disclaimers.md` for templates.

## Tone Guidelines by Section

### Introduction
**Voice:** Intriguing storyteller
**Mood:** Mysterious but inviting
**Length:** 100-150 words

### What Believers Claim
**Voice:** Neutral journalist
**Mood:** Serious, factual
**Length:** 200-300 words

### Why It's Compelling
**Voice:** Understanding friend
**Mood:** Empathetic, curious
**Length:** 150-250 words

### Skeptical Take
**Voice:** Thoughtful analyst
**Mood:** Rational, balanced
**Length:** 200-300 words

### Pop Culture References
**Voice:** Fun trivia enthusiast
**Mood:** Playful, entertaining
**Length:** 100-200 words

### Discussion Questions
**Voice:** Curious conversation starter
**Mood:** Open, non-judgmental
**Length:** 3-5 questions

## Language Patterns

### Hedging Language (Use Frequently)
- "According to the theory..."
- "Believers claim..."
- "Some people think..."
- "The idea suggests..."
- "Allegedly"
- "Supposedly"
- "It's said that..."

### Attribution
Always attribute claims to sources:
- ❌ "The government is watching us"
- ✅ "According to this theory, the government is watching us"

### Active vs. Passive Voice
Use active voice for clarity, passive for hedging.

**Active (for clarity):**
- "Conspiracy theorists claim..."
- "Critics argue..."

**Passive (for hedging):**
- "It's believed by some that..."
- "This has been interpreted as..."

## Formatting Guidelines

### Headers
- Use proper Markdown hierarchy (##, ###)
- Keep headers concise (3-7 words)
- Make them scannable

### Paragraphs
- Keep to 3-5 sentences
- One main idea per paragraph
- Use line breaks for readability

### Lists
- Use bullet points for multiple items
- Numbered lists for sequential information
- Keep items parallel in structure

### Emphasis
- **Bold** for key terms and important warnings
- *Italic* for emphasis or introducing terms
- `Code formatting` for technical terms (if needed)

### Links
- Link to credible sources for claims
- Open external links in new tabs
- Provide context for links ("according to the CDC")

## Category Definitions

### urban-planning
15-minute cities, smart cities, walkable neighborhoods, car-free zones

### health
COVID theories, vaccine skepticism, alternative medicine, health surveillance

### money
Digital currencies, CBDCs, cashless society, financial control, economic conspiracies

### culture
Satanic panic, occult symbolism, entertainment industry theories, celebrity conspiracies

### media
Fake news, propaganda, media ownership, narrative control, censorship

### surveillance
Cameras, tracking, data collection, privacy concerns, tech surveillance

### paranoia
General "they're watching" theories, vague control mechanisms, internet culture

## Scoring Guidelines

### Danger Level (1-5)
**How harmful is believing this theory?**

- **1**: Harmless fun (ancient aliens)
- **2**: Mostly harmless (celebrity theories)
- **3**: Could lead to bad decisions (political distrust)
- **4**: Potentially harmful (financial scams)
- **5**: Dangerous (health misinformation)

### Absurdity Meter (1-5)
**How ridiculous is the claim?**

- **1**: Actually somewhat plausible
- **2**: Unlikely but not impossible
- **3**: Pretty far-fetched
- **4**: Requires serious mental gymnastics
- **5**: Completely bonkers

### Rabbit Hole Score (1-5)
**How complex/interconnected is the theory?**

- **1**: Simple, standalone theory
- **2**: A few connected ideas
- **3**: Multiple layers to explore
- **4**: Deep web of connections
- **5**: Universe-encompassing mega-conspiracy

## SEO Guidelines

### Titles
- 50-60 characters
- Include main keyword
- Make it intriguing

### Summaries (Meta Description)
- 150-160 characters
- Hook the reader
- Include category context

### Keywords
- Focus on conspiracy theory names
- Include related cultural terms
- Avoid clickbait tactics

## Accessibility

### Readability
- Write at 8th-grade reading level
- Short sentences (15-20 words average)
- Active voice preferred
- Define jargon terms

### Screen Readers
- Use proper heading hierarchy
- Provide alt text for images
- Avoid emoji overload
- Clear link text (not "click here")

## What to Avoid

### Content Red Flags
- ❌ Presenting speculation as fact
- ❌ Making medical/legal advice
- ❌ Targeting specific individuals
- ❌ Promoting violence
- ❌ Encouraging illegal activity
- ❌ Missing disclaimers on sensitive topics

### Writing Red Flags
- ❌ Wall of text (break it up!)
- ❌ Academic tone (keep it conversational)
- ❌ Excessive jargon (explain terms)
- ❌ Mockery or condescension
- ❌ Political bias (stay balanced)
- ❌ Fear-mongering (keep it fun)

## Examples

### Good Introduction
> "What if the money in your pocket is about to become obsolete? According to some, central bank digital currencies (CBDCs) aren't just a technological upgrade — they're a tool for total financial surveillance and control. Let's dive into why this theory has people clutching their cash."

**Why it works:** Engaging question, balanced presentation, inviting tone

### Bad Introduction
> "The government is definitely planning to eliminate cash so they can track every purchase you make. This is happening right now and everyone needs to know the truth about digital currencies before it's too late!"

**Why it fails:** Absolute claims, fear-mongering, no attribution

### Good Discussion Question
> "If all money became digital and traceable, what purchases would you be most uncomfortable having monitored?"

**Why it works:** Open-ended, thought-provoking, personal, non-political

### Bad Discussion Question
> "Do you think the government should be allowed to spy on your spending?"

**Why it fails:** Yes/no question, loaded language, confrontational framing

## Resources

- Writing Style: Conversational but informed
- Reading Level: 8th grade (use Hemingway Editor)
- Length: 800-1200 words per topic
- Disclaimers: `/references/safety-and-disclaimers.md`
- Tone: `/references/site-vision.md`

## Final Checklist

Before publishing any conspiracy topic:

- [ ] Title is compelling and clear
- [ ] Summary hooks the reader
- [ ] Structure follows template
- [ ] All required sections are present
- [ ] Tone is balanced and playful
- [ ] Language uses proper attribution
- [ ] Scores match content severity
- [ ] Appropriate disclaimer included
- [ ] No absolute claims without attribution
- [ ] Pop culture references included
- [ ] Discussion questions are open-ended
- [ ] Formatting is clean and readable
- [ ] Links are credible and relevant
- [ ] Content passes safety review

Remember: When in doubt, add more hedging language and stronger disclaimers!
