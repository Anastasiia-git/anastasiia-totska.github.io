import { ProjectType } from "../types/projectType";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, TypeScript, responsive sections, project previews, and downloadable CV links.",
    role: "Designed and built the full responsive website, project cards, modal flow, contact links, SEO metadata, and CV download experience.",
    problem:
      "Recruiters need to understand my role, skills, projects, and contact options quickly without searching through several pages.",
    solution:
      "I created a one-page portfolio with clear sections, reusable data-driven project cards, hover previews, and direct links to live apps and GitHub repositories.",
    result:
      "The site is deployed on Vercel, passes lint and production build, and gives a focused overview of my junior frontend profile.",
    highlights: [
      "Responsive layout",
      "Reusable components",
      "Typed project data",
      "Accessible buttons and links",
    ],
    image: "/projects/portfolio.webp",
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
      "Movie search app that uses the TMDB API to browse titles, view details, cast, and reviews in a responsive interface.",
    role: "Built the frontend flow, API requests, movie search, details pages, loading and error feedback, and responsive UI.",
    problem:
      "Users need a simple way to search for movies and quickly check useful details before choosing what to watch.",
    solution:
      "I connected the app to the TMDB API, split the UI into reusable React components, and handled search results, details, reviews, and feedback states.",
    result:
      "The app shows that I can work with external APIs, async data, routing, reusable UI, and real user states.",
    highlights: [
      "REST API integration",
      "Loading and error states",
      "Movie details and reviews",
      "Responsive React UI",
    ],
    image: "/projects/movieFinder.webp",
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
    title: "Task Manager",
    description:
      "Task management app for creating, organizing, and tracking notes with typed state management and a clean App Router structure.",
    role: "Built the Next.js app structure, task UI, note filtering, typed state, modal details, and responsive task layout.",
    problem:
      "Users need a clear workspace to create, organize, filter, and review tasks without losing context.",
    solution:
      "I used Next.js, TypeScript, and Zustand to keep the task state predictable and built a clean interface with filters, task cards, and detail views.",
    result:
      "This is my strongest project for showing product thinking, state management, typed data, and frontend architecture.",
    highlights: [
      "Next.js App Router",
      "Zustand state management",
      "Typed task data",
      "Filtering and detail views",
    ],
    image: "/projects/noteHub.webp",
    video: "/videos/noteHub.mp4",
    demo: "https://note-hub-drab.vercel.app/",
    tech: ["Next.js", "TypeScript", "Zustand", "App Router", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/NoteHub",
    live: "https://note-hub-drab.vercel.app/",
    featured: true,
  },
];
