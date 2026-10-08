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
    tech: ["Next.js", "TypeScript", "Framer Motion", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/anastasiia-totska.github.io",
    live: "https://anastasiia-totska-github-io.vercel.app/",
  },
  {
    id: 2,
    image: "/projects/movie-finder.webp",
    video: "/videos/video-movieFinder.mp4",
    tech: ["React", "Axios", "React Hot Toast", "API", "TMDB"],
    github: "https://github.com/Anastasiia-git/MovieFinder",
    live: "https://movie-finder-ebon-zeta.vercel.app/",
  },
  {
    id: 3,
    image: "/projects/note-hub.webp",
    video: "/videos/video-noteHub.mp4",
    tech: ["Next.js", "TypeScript", "Zustand", "App Router", "CSS Modules"],
    github: "https://github.com/Anastasiia-git/NoteHub",
    live: "https://note-hub-drab.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    image: "/projects/samaZlipula.webp",
    video: "/videos/video-samaZlipula.mp4",
    tech: ["Next.js", "React", "CSS Modules", "Responsive UI", "Vercel"],
    live: "https://www.samazlipula.com/",
  },
];
