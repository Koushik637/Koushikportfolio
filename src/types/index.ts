export interface ProjectQuest {
  id: string;
  questNumber: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  modelsOrFeatures: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image: string;
  status: 'COMPLETED' | 'IN PROGRESS' | 'ACTIVE';
  rank: 'S-RANK' | 'A-RANK';
  diagram?: {
    step: string;
    label: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'PROGRAMMING' | 'DEVELOPMENT' | 'AI';
  description: string;
  level: string; // e.g. "████████"
  rank: string;
  tags: string[];
}

export interface JourneyMilestone {
  chapter: string;
  year: string;
  title: string;
  institution?: string;
  score?: string;
  description: string;
  badge: string;
}
