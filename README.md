# BABYDICK 👑 Cosmic Neon Landing Page

![App Preview](https://imgix.cosmicjs.com/e0637760-6f5e-11f1-b7fe-27b51f9bc579-autopilot-photo-1454789548928-9efd52dc4031-1782258870733.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A complete single-page cosmic neon landing page for the meme coin **BABYDICK** — built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Deep space black background, vibrant pink/purple/cyan/rainbow gradients, glowing stars, floating crypto coins, dripping meme-style logo, and full meme energy. 🚀

## Features

- 🌌 **Deep space neon theme** — glowing stars, floating coins, animated gradients
- 👑 **Hero section** with dripping BABYDICK logo, throne king + rocket-to-moon imagery, and glowing CTA buttons
- 📖 **About section** with side-by-side meme images
- 💰 **Tokenomics** neon glowing cards (data-driven from Cosmic)
- 🛣️ **Cosmic roadmap timeline** ending at the moon
- 🖼️ **Meme gallery** grid pulling all BABYDICK memes
- 🌐 **Community links footer** with "To The Moon 🚀"
- 📱 Fully responsive, smooth scroll animations, hype meme vibes

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3b1c74f4a53de1c27f479f&clone_repository=6a3b1d51f4a53de1c27f47d6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete single-page cosmic neon landing page for the meme coin BABYDICK using Cosmic JS as headless CMS.
> Content Model in Cosmic:
> Object Type: 'Hero' (singleton) → fields: title, subtitle, hero_image (media), cta_button_text, cta_link
> Object Type: 'Babydick_Meme' → fields: image (media), title, description
> Object Type: 'Tokenomics' → fields: title, items (array of {label, value, description})
> Object Type: 'Roadmap' → fields: stages (array of {phase, title, description})
> Object Type: 'Community_Links' → fields: links (array of {platform, url, icon})
> Design & Style (Dark Cosmic Neon Theme):
> Background: deep space black with vibrant pink, purple, cyan, rainbow gradients + glowing stars, moons, floating crypto coins.
> Font: dripping bold for titles (like meme style), modern sans for body.
> BABYDICK Character: Use exact classic pink phallic cartoon style — rounded pink glans head with hair tuft, big sparkling eyes, happy mouth, diaper, crown on throne version, sunglasses on rocket version.
> Page Structure (One Page Scroll): Hero, About, Tokenomics, Roadmap, Meme Gallery, Footer. Use Tailwind CSS + smooth scroll animations. Make it fully responsive, hype, fun, meme energy."

### Code Generation Prompt

> Build a Next.js application for a website called "Create complete single-page". The content is managed in Cosmic CMS with the following object types: hero, babydick-memes, tokenomics, roadmap, community-links. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the bucket containing your content

### Installation

```bash
bun install
bun run dev
```

Visit `http://localhost:3000`.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch the Hero singleton
const { object: hero } = await cosmic.objects
  .findOne({ type: 'hero' })
  .depth(1)

// Fetch all memes
const { objects: memes } = await cosmic.objects
  .find({ type: 'babydick-memes' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from five object types: `hero`, `babydick-memes`, `tokenomics`, `roadmap`, and `community-links`. All data is fetched server-side using the Cosmic SDK. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel**: Import the repo and set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.
- **Netlify**: Same environment variables in site settings.

<!-- README_END -->