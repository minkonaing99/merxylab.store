# MerxyLab

MerxyLab is a React + Vite landing page for selling premium digital subscriptions.  
It is designed as a dark storefront with animated sections, product pricing cards, and direct channel/contact entry points.

## Current sections

- Responsive navbar
- Hero section with animated dome gallery
- Category strip
- Product cards with multi-duration pricing
- Final CTA section
- Reflective channel cards with local video backgrounds
- Trust/value section
- Footer

## Tech stack

- React
- Vite
- GSAP
- `@use-gesture/react`

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

- `src/` - application source
- `src/components/` - UI sections and animated components
- `productImages/` - product card images
- `moving_card/` - video files used in channel cards
- `images/` - artwork/logos used in the hero dome and other visuals

## Notes

- Product pricing is defined in `src/components/ServicesSection.jsx`.
- Channel card content is defined in `src/components/ChannelsSection.jsx`.
- The heaviest assets in the project are the MP4 files in `moving_card/`.
