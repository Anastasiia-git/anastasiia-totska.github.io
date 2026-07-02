import { ProjectType } from "../types/projectType";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and TypeScript to present my experience, selected projects, CVs, and contact links in one focused page.",
    role: "Designed and built the responsive page structure, reusable project cards, modal details, contact section, SEO metadata, and CV download flow.",
    problem:
      "Recruiters need to understand my skills, project experience, and contact options quickly without opening several separate pages.",
    solution:
      "I created a clean one-page portfolio with data-driven project content, hover previews, responsive sections, and direct links to live apps and GitHub repositories.",
    result:
      "The site is deployed on Vercel, passes lint and production build, and gives a structured overview of my junior frontend profile.",
    highlights: [
      "Responsive layout",
      "Reusable components",
      "Typed project data",
      "Accessible buttons and links",
    ],
    image: "/projects/web.webp",
    video: "/videos/portfolio.mp4",
    demo: "https://anastasiia-totska-github-io.vercel.app/",
    tech: ["Next.js", "TypeScript", "Framer Motion", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/anastasiia-totska.github.io",
    live: "https://anastasiia-totska-github-io.vercel.app/",
  },
  {
    id: 2,
    title: "MovieFinder",
    description:
      "Responsive movie search app connected to the TMDB API, with search results, movie details, cast information, and reviews.",
    role: "Built the frontend flow, API requests, search experience, detail views, loading feedback, error handling, and responsive layout.",
    problem:
      "Users need a fast way to search movies and check useful details before deciding what to watch.",
    solution:
      "I connected React components to the TMDB API, organized the UI into reusable parts, and handled search, details, reviews, loading, and empty states.",
    result:
      "The project demonstrates API integration, async data handling, routing, reusable UI, and practical user states.",
    highlights: [
      "REST API integration",
      "Loading and error states",
      "Movie details and reviews",
      "Responsive React UI",
    ],
    image: "/projects/movie-finder.webp",
    video: "/videos/movie.mp4",
    demo: "https://movie-finder-ebon-zeta.vercel.app/",
    tech: [
      "React",
      "Axios",
      "React Hot Toast",
      "API",
      "TMDB (The Movie Database)",
    ],
    github: "https://github.com/Anastasiia-git/MovieFinder",
    live: "https://movie-finder-ebon-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "NoteHub",
    description:
      "Task and note management app built with Next.js, TypeScript, Zustand, filters, detail views, and a responsive dashboard-style interface.",
    role: "Built the App Router structure, task UI, note filtering, typed Zustand state, modal details, and responsive dashboard layout.",
    problem:
      "Users need a simple workspace to create, organize, filter, and review tasks without losing context.",
    solution:
      "I used Next.js, TypeScript, and Zustand to keep state predictable, then built filters, task cards, and detail views around clear user actions.",
    result:
      "This project is the strongest example of my state management, typed data, product thinking, and frontend architecture.",
    highlights: [
      "Next.js App Router",
      "Zustand state management",
      "Typed task data",
      "Filtering and detail views",
    ],
    image: "/projects/note-hub.webp",
    video: "/videos/noteHub.mp4",
    demo: "https://note-hub-drab.vercel.app/",
    tech: ["Next.js", "TypeScript", "Zustand", "App Router", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/NoteHub",
    live: "https://note-hub-drab.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "sama-zlipula",
    description:
      "Live client-facing website with a polished responsive interface. The source code is private, but the deployed project is available online.",
    role: "Built the responsive frontend, arranged the page sections, prepared production assets, and delivered a clean live experience.",
    problem:
      "The project needed a clear public website that presents content professionally on mobile, tablet, and desktop screens.",
    solution:
      "I focused on simple structure, readable content blocks, responsive spacing, optimized images, and a visual style that feels consistent across devices.",
    result:
      "The website is live and can be reviewed as a real working project. The repository stays private because it belongs to a closed codebase.",
    highlights: [
      "Live production website",
      "Private codebase",
      "Responsive layout",
      "Production assets",
    ],
    image: "/projects/samaZlipula.webp",
    tech: ["Next.js", "React", "CSS Modules", "Responsive UI", "Vercel"],
    live: "https://www.samazlipula.com/",
  },
];
