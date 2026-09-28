# Evangeline Tanoto — Portfolio

Personal portfolio website for Evangeline Tanoto, UI/UX & Product Designer and final-year IT student.

A single-page, editorial "Backstage Pass" experience split into three connected sections:

- **The Board** — pinboard hero with a pinned portrait, bio, and skills, linked by hand-drawn connector strings.
- **The Feature** — magazine-style spreads for Projects, Hackathons, Internships, and Volunteering. Tap a spread to read the full story, and tap the star to pin it to your board.
- **Backstage** — a flippable ID badge (contact links on the back), a Secret Menu of fun facts, and a live recap of everything you pinned.

Pins persist across the page via `localStorage`, and each section fades in as you scroll.

## Tech Stack

- [Next.js 15](https://nextjs.org/) + React 19 + TypeScript
- Plain CSS (no framework) for styling
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered reveals and text animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/page.tsx` — the page, assembling all three sections
- `src/components/` — Badge, FeatureCard, SecretMenu, PinBoardPanel, PinStar, SiteNav, Reveal, BlurText
- `src/context/PinContext.tsx` — pin/save state, persisted to `localStorage`
- `src/data/content.ts` — bio, skills, and all project/hackathon/internship/volunteering content

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
