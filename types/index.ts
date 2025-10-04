export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
  icon: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  current: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
  socials: Social[];
}

