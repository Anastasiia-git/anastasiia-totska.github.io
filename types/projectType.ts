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
  demo?: string;
  tech?: string[];
  live?: string;
  github?: string;
  featured?: boolean;
}
