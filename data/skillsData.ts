export const line1Items = [
  "Junior Frontend Developer",
  "Frontend Development",
  "Web Applications",
  "Responsive Design",
  "Clean Code",
  "UI Implementation",
  "Modern Interfaces",
  "Full-Stack Fundamentals",

  "Junior Frontend Developer",
  "Frontend Development",
  "Web Applications",
  "Responsive Design",
  "Clean Code",
  "UI Implementation",
  "Modern Interfaces",
  "Full-Stack Fundamentals",
];

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
