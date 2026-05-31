export interface Metric {
  l: string;
  v: string;
}

export interface ProjectDetail {
  icon: React.ElementType;
  label: string;
  body: string;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  tagline: string;
  tech: string[];
  metrics: Metric[];
  details: ProjectDetail[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  read: string;
  tags: string[];
}
