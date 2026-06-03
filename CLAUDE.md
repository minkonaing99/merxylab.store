# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

React + Vite dark-theme landing page for selling premium digital subscriptions. Single-page storefront with animated sections, product pricing cards, and channel/contact entry points.

## Tech stack

- React 18, Vite 5
- GSAP 3 - animations (scroll triggers, timelines)

No test framework. No linting config. No TypeScript.

## Dev commands

```bash
npm run dev       # start dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project structure

```
src/
  App.jsx                  # root; mounts all sections in order
  main.jsx                 # entry point
  styles.css               # global styles / CSS variables
  sections/                # page-level sections (one per page region)
    Navbar.jsx
    HeroSection.jsx
    CategoryStrip.jsx
    ServicesSection.jsx    # imports product data + PixelTransition
    BottomCtaSection.jsx
    ChannelsSection.jsx    # imports channel data + ReflectiveCard
    ValueSection.jsx       # bento-grid trust section (6 cards)
    Footer.jsx
  components/              # reusable UI primitives (not page-specific)
    DomeGallery.jsx/.css   # 3-D rotating dome of product images
    PixelTransition.jsx/.css
    ReflectiveCard.jsx/.css
    StarBorder.jsx/.css
    TargetCursor.jsx/.css
    SplitText.jsx          # GSAP letter-by-letter animation; accepts startDelay (seconds)
  data/                    # raw data arrays, extracted from sections
    products.js            # productsData, toneMap, imageMap → all prices in Ks
    channels.js            # channels array + video imports
    categories.js          # category strip labels
    navigation.js          # navItems + footerColumns
images/           # all artwork / logos (used by DomeGallery AND product cards)
moving_card/      # MP4 videos used as channel card backgrounds (heaviest assets)
```

## Key content locations

| Content | File |
|---|---|
| Product pricing & cards | `src/data/products.js` |
| Channel links & handles | `src/data/channels.js` |
| Category strip labels | `src/data/categories.js` |
| Nav links & footer columns | `src/data/navigation.js` |
| Global CSS variables / tokens | `src/styles.css` |
| Page section order | `src/App.jsx` |

## Data flow

`productsData` in `products.js` is `[{ popular: [...], other: [...] }]` - a single-element array with two sub-arrays. `ServicesSection` flattens both at module scope (not inside the component) via `productsData.flatMap(g => [...g.popular, ...g.other])`.

`normalizePlans` in `ServicesSection` handles products with empty or array `price` fields by returning `[{ label: 'Contact', price: 'DM for price' }]`.

## Section anchor IDs

Scroll nav targets: `#top` (page root), `#services` (ServicesSection), `#channels` (ChannelsSection). Hero CTA buttons link to these. Do not remove or rename them.

## Asset import patterns

Two patterns are in use - do not mix them:
- `DomeGallery`: static ESM `import imgName from '../../images/foo.jpg'` - Vite resolves and hashes at build time.
- `imageMap` in `products.js`: `new URL('../../images/foo.jpg', import.meta.url).href` - dynamic but still build-time resolved by Vite.
- `channels.js`: static ESM `import videoName from '../../moving_card/foo.mp4'` - Vite handles MP4 natively, no plugin needed.

## Key decisions & notes

- All prices use `Ks` prefix (not MMK).
- `productImages/` folder was deleted - product cards now source images from `images/` alongside the dome gallery. Fallback mappings: `zoompro` → `microsoft365.jpg`, `geminipro` → `gemini.jpg`, `vpn` → `express.jpg`.
- `SplitText` accepts a `startDelay` prop (seconds, default `0`). The hero "Overpaying" text uses `startDelay={2}`.
- `DomeGallery` RAF loop fully stops when the dome is scrolled off-screen and resumes via IntersectionObserver - do not remove `restartRAFRef`.
- `ReflectiveCard` video plays once on first full intersection (`threshold: 1`), then the observer disconnects. Video is `preload="none"` and only plays if `videoSrc` is provided and `prefers-reduced-motion` is not set.
- `content-visibility: auto` is applied to all below-fold sections for rendering performance. Do not add it to the hero/navbar.
- `will-change` is intentionally absent from service cards - it was removed to eliminate ~25 unnecessary GPU compositor layers.
- Product card images use `loading="lazy"`.
