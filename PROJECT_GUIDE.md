# Portfolio Project Guide

This file is a practical guide for explaining the portfolio during recruiter or technical interviews.

## What The Project Is

This is a one-page portfolio built with Next.js, React, TypeScript, and CSS Modules. It shows my frontend profile, selected projects, CV downloads, and contact links.

The goal is not to be a large app. The goal is to show that I can build a clean, responsive, typed, maintainable frontend project and explain my choices.

## How The Page Is Organized

The main page is in `app/page.tsx`:

```tsx
<main>
  <Header />
  <Hero />
  <About />
  <Projects />
  <Contact />
</main>
```

Each section lives in `sections/`, and reusable pieces live in `components/`.

## Important Files

| File | What it does |
| --- | --- |
| `app/layout.tsx` | Sets metadata, font, global background helpers, and root layout |
| `app/globals.css` | Global gradient background, base styles, shared section spacing variables |
| `sections/Header/Header.tsx` | Fixed header, burger state, active section state |
| `sections/Hero/Hero.tsx` | First screen with intro, portrait, and skills marquee |
| `sections/About/About.tsx` | About text, certificate, practical skills, CV links |
| `sections/Projects/Projects.tsx` | Renders project cards from data and opens the modal |
| `components/ProjectModal/ProjectModal.tsx` | Project details dialog |
| `components/useBodyScrollLock.ts` | Locks background scroll while menu/modal is open |
| `data/projectsData.ts` | All project content in one typed data file |
| `data/skillsData.ts` | Skill marquee data and icon classes |

## Typed Project Data

Project cards and modals are generated from `data/projectsData.ts`. The shape is defined in `types/projectType.ts`.

Example:

```ts
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  highlights: string[];
  image: string;
  video?: string;
  tech?: string[];
  live?: string;
  github?: string;
  featured?: boolean;
}
```

How to explain it:

"I keep project content in a typed data file. This keeps the UI reusable and makes it easy to add or update projects without changing the card or modal component."

## Project Cards

`Projects.tsx` maps over `orderedProjects` and renders one `ProjectCard` for each item.

```tsx
{orderedProjects.map((project, index) => (
  <ProjectCard
    project={project}
    featured={project.featured}
    onClick={() => setSelectedProject(project)}
  />
))}
```

How to explain it:

"The component only receives data and an `onClick` handler. The card does not know how the modal works, so responsibilities stay separated."

## Project Modal

The selected project is stored in state:

```tsx
const [selectedProject, setSelectedProject] =
  useState<ProjectType | null>(null);
```

When a card is clicked, the project becomes selected. The modal receives that project:

```tsx
<ProjectModal
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
```

The modal also listens for Escape:

```tsx
useEffect(() => {
  if (!project) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [project, onClose]);
```

How to explain it:

"The modal is controlled by React state. It supports mouse close, Escape close, and accessible dialog attributes."

## Scroll Lock

The burger menu and project modal both use `useBodyScrollLock`.

Why it exists:

When an overlay is open, the page behind it should stay still. Without scroll locking, mobile browsers can scroll the background or jump after closing a modal.

How it works:

```ts
document.body.style.position = "fixed";
document.body.style.top = `-${lockState.scrollY}px`;
document.body.style.width = "100%";
document.documentElement.style.overflow = "hidden";
```

When the overlay closes, it restores the previous styles and returns to the same scroll position.

How to explain it:

"I made scroll locking reusable because both the burger menu and modal need the same behavior. The hook stores the original scroll position and restores it without a visual jump."

## Responsive CSS

The CSS is mobile-first. Base styles are for mobile, then there are only two breakpoints:

```css
@media (min-width: 768px) {
  /* tablet */
}

@media (min-width: 1024px) {
  /* desktop */
}
```

Section spacing is shared in `app/globals.css`:

```css
:root {
  --section-padding-x: 16px;
  --section-padding-y: 54px;
}
```

How to explain it:

"I use one shared spacing system for sections, so About, Projects, and Contact have consistent rhythm. Each section can still adjust its internal grid at tablet and desktop sizes."

## Global Background

The global page background lives in `app/globals.css`, and `ScrollBackground.tsx` updates CSS variables while scrolling.

Example CSS variable:

```css
--scroll-bg-a: 25 0 25;
```

The component updates those values:

```ts
root.style.setProperty(
  "--scroll-bg-a",
  formatRgb(mixRgb(start.bgA, end.bgA, localProgress)),
);
```

How to explain it:

"The background is controlled by CSS variables. JavaScript only updates color values based on scroll progress, and CSS handles the visual rendering."

## Skills Icons

Most skill icons come from Devicon. Next.js can be hard to see on a dark background, so it has a readable fallback icon:

```ts
{ name: "Next.js", fallbackIcon: "N" }
```

How to explain it:

"I used Devicon for common technology icons, but added a fallback for Next.js to keep the UI reliable and readable."

## Contact Section

Contact cards are simple links:

```tsx
<a
  href={item.href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
>
  ...
</a>
```

How to explain it:

"I used real links instead of JavaScript `window.open`, because links are simpler, more accessible, and easier for browsers and screen readers to understand."

## What I Improved

- Fixed the Next.js skills icon with a readable fallback.
- Removed unused dependencies.
- Removed unused CSS classes.
- Simplified Contact from JavaScript buttons to real links.
- Removed unnecessary client components where possible.
- Kept CSS mobile-first with consistent breakpoints.
- Made overlay scroll locking reusable.
- Kept project content typed and data-driven.

## Questions Recruiters Might Ask

### Why did you choose Next.js?

Because it gives a production-ready React setup with routing, metadata, optimized images, and simple deployment on Vercel.

### Why CSS Modules instead of Tailwind or a UI library?

CSS Modules keep styles close to components while still using plain CSS. For a portfolio, this is simple, readable, and easy to review.

### Why store projects in a data file?

It separates content from UI. The card and modal components stay reusable, and new projects can be added by editing data only.

### What was the trickiest issue?

Scroll locking for overlays. The burger menu and modal should open over the current page position without causing the page to jump. I solved it with a shared hook.

### What would you improve next?

I would add automated visual regression tests, improve analytics for recruiter interactions, and add a small language switch if needed.
