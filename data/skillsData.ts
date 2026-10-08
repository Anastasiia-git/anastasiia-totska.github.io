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
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Node.js Basics", icon: "devicon-nodejs-plain colored" },
] satisfies SkillItem[];

export const line2Items = [...skills, ...skills];
