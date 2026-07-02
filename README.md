# Anastasiia Totska Portfolio

Live demo: https://anastasiia-totska-github-io.vercel.app/

Personal portfolio for a junior frontend developer. The site presents my profile, practical skills, selected projects, downloadable CVs, and contact links in one responsive page.

## Stack

| Technology | Purpose |
| --- | --- |
| Next.js | App Router, metadata, image optimization |
| React | Component-based UI |
| TypeScript | Typed project data and component props |
| CSS Modules | Scoped, mobile-first styles |
| Framer Motion | Small section and modal animations |
| Vercel | Deployment |

## Main Features

- Fixed header with active section state and smooth anchor navigation.
- Hero section with skill marquees and visible technology icons.
- About section with certificate, practical skills, and CV downloads.
- Project cards generated from typed data in `data/projectsData.ts`.
- Project details modal with scroll locking and Escape key close.
- Contact section built with accessible links.
- Global scroll-reactive gradient background.

## Project Structure

```text
app/                  Next.js app entry, metadata, global styles
components/           Reusable UI and behavior helpers
data/                 Typed content used by sections
sections/             Page sections: Header, Hero, About, Projects, Contact
types/                Shared TypeScript interfaces
public/               Images, videos, CV files, favicon
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

Open http://localhost:3000 after `npm run dev`.

## Quality Checklist

- `npm run lint` passes.
- `npm run build` passes.
- CSS is mobile-first with only two breakpoints: `768px` and `1024px`.
- Layout uses simple components, typed data, and CSS Modules.
- Unused dependencies and unused CSS were removed.
- A recruiter-facing explanation is available in `PROJECT_GUIDE.md`.

## Author

Anastasiia Totska

- GitHub: https://github.com/Anastasiia-git
- LinkedIn: https://www.linkedin.com/in/anastasiia-totska-53a76b3a8/
