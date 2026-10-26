import type { ProjectType } from "@/types/projectType";

type ProjectData = Pick<
  ProjectType,
  "id" | "image" | "video" | "tech" | "live" | "github" | "featured"
>;

// Language-independent project details live here. Text content is stored in
// data/translations.ts and combined with these details in the Projects section.
export const projectsData: ProjectData[] = [
  {
    id: 1,
    image: "/projects/web.webp",
    video: "/videos/video-web.mp4",
    tech: ["Next.js", "React", "TypeScript", "Framer Motion", "CSS Modules", "Vercel"],
    github: "https://github.com/Anastasiia-git/anastasiia-totska.github.io",
    live: "https://anastasiia-totska-github-io.vercel.app/",
  },
  {
    id: 2,
    image: "/projects/movie-finder.webp",
    video: "/videos/video-movieFinder.mp4",
    tech: ["React", "JavaScript", "Vite", "React Router", "Axios", "TMDB API", "CSS Modules", "Vitest", "React Testing Library", "GitHub Actions", "Vercel"],
    github: "https://github.com/Anastasiia-git/MovieFinder",
    live: "https://movie-finder-ebon-zeta.vercel.app/",
  },
  {
    id: 3,
    image: "/projects/note-hub.webp",
    video: "/videos/video-noteHub.mp4",
    tech: ["Next.js App Router", "React", "TypeScript", "TanStack Query", "Zustand", "Axios", "CSS Modules", "Vercel"],
    github: "https://github.com/Anastasiia-git/NoteHub",
    live: "https://note-hub-drab.vercel.app/",
  },
  {
    id: 4,
    image: "/projects/samaZlipula.webp",
    video: "/videos/video-samaZlipula.mp4",
    tech: ["React", "TypeScript", "Vite", "Context API", "CSS Modules", "Supabase REST API", "Telegram Bot API", "Vercel Serverless Functions"],
    live: "https://www.samazlipula.com/",
    featured: true,
  },
];
