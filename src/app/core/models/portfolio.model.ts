export interface NavLink {
  label: string;
  fragment: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  tagline: string;
  taglineHighlight: string;
  taglineSub: string;
  typingRoles: string[];
  currentCompany: string;
  currentCompanyUrl?: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  socials: SocialLink[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  logoUrl?: string;
  period: string;
  location: string;
  mode: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: number;
  maxLevel: number;
}

export interface PortfolioData {
  profile: Profile;
  navLinks: NavLink[];
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
  education: Education;
  skillGroups: SkillGroup[];
  strengths: string[];
  languages: Language[];
}
