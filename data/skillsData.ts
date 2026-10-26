export type SkillItem = {
  name: string;
  icon?: string;
  fallbackIcon?: string;
};

const skills = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", fallbackIcon: "N" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "CSS Modules", fallbackIcon: "CSS" },
  { name: "Framer Motion", fallbackIcon: "FM" },
  { name: "Vite", icon: "devicon-vitejs-plain colored" },
  { name: "React Router", fallbackIcon: "RR" },
  { name: "TanStack Query", fallbackIcon: "TQ" },
  { name: "Zustand", fallbackIcon: "Z" },
  { name: "Axios / Fetch API", fallbackIcon: "API" },
  { name: "Vitest", fallbackIcon: "VT" },
  { name: "React Testing Library", fallbackIcon: "RTL" },
  { name: "ESLint", icon: "devicon-eslint-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "GitHub Actions", fallbackIcon: "CI" },
  { name: "Vercel", fallbackIcon: "V" },
  { name: "Figma (Design-to-Code)", icon: "devicon-figma-plain colored" },
  { name: "OpenAI Codex", fallbackIcon: "AI" },
  { name: "Node.js Fundamentals", icon: "devicon-nodejs-plain colored" },
] satisfies SkillItem[];

export const line2Items = [...skills, ...skills];
