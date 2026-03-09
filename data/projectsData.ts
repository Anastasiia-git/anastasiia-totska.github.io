import { ProjectType } from "../types/projectType";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js to showcase my projects and skills.",
    image: "/projects/portfolio.png",
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
      "Movie search app with Next.js to browse titles, view details, cast, and reviews in a modern, responsive UI.",
    image: "/projects/movieFinder.png",
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
      "Productivity app for tracking tasks, deadlines, and priorities.",
    image: "/projects/noteHub.png",
    video: "/videos/noteHub.mp4",
    demo: "https://note-hub-drab.vercel.app/",
    tech: ["Next.js", "TypeScript", "Zustand", "App Router", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/NoteHub",
    live: "https://note-hub-drab.vercel.app/",
  },
];
