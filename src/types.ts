export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string; // e.g. "E-Commerce", "Branding & UI", "Web 3.0"
  imageUrl: string;
  client: string;
  duration: string;
  year: string;
  description: string;
  fullOverview: string;
  techStack: string[];
  deliverables: string[];
  results: string[];
}

export interface Service {
  id: string;
  title: string;
  koreanTitle: string;
  description: string;
  details: string[];
  techStack: string[];
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  founded: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyId: string; // maps to a partner
  avatar: string;
}

export interface Inquiry {
  id: string;
  services: string[];
  budget: string;
  description: string;
  name: string;
  email: string;
  date: string;
  status: 'Received' | 'Reviewing' | 'Scheduled';
}
