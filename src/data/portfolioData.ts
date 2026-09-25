import { ProjectQuest, SkillItem, JourneyMilestone } from '../types';
import mangaHeroImg from '../assets/images/manga_hero_protagonist_1790252290334.jpg';
import mangaCityWalkImg from '../assets/images/manga_futuristic_city_walk_1790252329666.jpg';
import mangaCricketStadiumImg from '../assets/images/manga_cricket_stadium_1790252305481.jpg';
import mangaInvoiceDashboardImg from '../assets/images/manga_invoice_dashboard_1790252317708.jpg';

export const HERO_DATA = {
  kanjiTitle: "物語の始まり",
  name: {
    first: "VENKATA",
    middle1: "KOUSHIK",
    middle2: "KUMAR",
    last: "ANANDAM"
  },
  fullName: "Venkata Koushik Kumar Anandam",
  roles: [
    "AI/ML DEVELOPER",
    "PYTHON DEVELOPER",
    "FRONT-END DEVELOPER"
  ],
  location: "Hyderabad, India",
  email: "koushikanandam220@gmail.com",
  heroImage: mangaHeroImg,
  cityWalkImage: mangaCityWalkImg
};

export const CHARACTER_PROFILE = {
  characterName: "Venkata Koushik Kumar Anandam",
  role: "AI/ML Developer",
  location: "Hyderabad, India",
  education: {
    degree: "B.Tech/B.E.",
    year: "2025",
    college: "Eluru College of Engineering and Technology"
  },
  languages: ["English", "Hindi", "Telugu"],
  hscScore: "92%",
  hscBoard: "National Open School",
  skillsStatus: [
    { name: "PYTHON", bar: "████████", rank: "CORE ARCHETYPE", mastery: "Advanced" },
    { name: "ARTIFICIAL INTELLIGENCE", bar: "████████", rank: "PRIMARY DOMAIN", mastery: "Specialization" },
    { name: "JAVA", bar: "██████░░", rank: "SYSTEMS", mastery: "Proficient" },
    { name: "C", bar: "██████░░", rank: "ALGORITHMIC FOUNDATIONS", mastery: "Proficient" },
    { name: "HTML", bar: "████████", rank: "FRONT-END ARCHITECTURE", mastery: "Proficient" }
  ]
};

export const PROFILE_SUMMARY_TEXT =
  "I have a strong academic background with 92% in HSC from the National Open School, reflecting my commitment to excellence. Proficient in C, Java, and Python, I specialize in Artificial Intelligence and front-end design using HTML. My skills in HTML web design complement my coding expertise, enabling me to create efficient and user-friendly solutions.";

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    chapter: "CHAPTER 01",
    year: "2018",
    title: "10th Standard",
    description: "Foundational education arc establishing analytical rigor, mathematics proficiency, and logical reasoning.",
    badge: "FOUNDATION ARC"
  },
  {
    chapter: "CHAPTER 02",
    year: "2020",
    title: "12th Standard (HSC)",
    institution: "National Open School",
    score: "92% Score",
    description: "Achieved an outstanding 92% score, demonstrating deep discipline, academic excellence, and core scientific grounding.",
    badge: "ACADEMIC ASCENSION"
  },
  {
    chapter: "CHAPTER 03",
    year: "2025",
    title: "B.Tech / B.E. Graduation",
    institution: "Eluru College of Engineering and Technology",
    description: "Graduating with comprehensive engineering mastery in Computer Science, Artificial Intelligence architectures, predictive machine learning models, and modern web application development.",
    badge: "GRADUATION ODYSSEY"
  }
];

export const SKILL_CATEGORIES: { category: 'PROGRAMMING' | 'DEVELOPMENT' | 'AI'; title: string; kanji: string; skills: SkillItem[] }[] = [
  {
    category: "PROGRAMMING",
    title: "PROGRAMMING",
    kanji: "言語体系",
    skills: [
      {
        name: "Python",
        category: "PROGRAMMING",
        description: "Primary language for Artificial Intelligence, data manipulation, algorithm formulation, and predictive modeling.",
        level: "████████",
        rank: "SPECIALTY",
        tags: ["Data Analysis", "Predictive Modeling", "Core Logic"]
      },
      {
        name: "Java",
        category: "PROGRAMMING",
        description: "Object-oriented software architecture, robust data structures, and algorithmic implementation.",
        level: "██████░░",
        rank: "CORE",
        tags: ["OOP", "Data Structures", "System Design"]
      },
      {
        name: "C",
        category: "PROGRAMMING",
        description: "Low-level system programming, memory management fundamentals, and core algorithm efficiency.",
        level: "██████░░",
        rank: "FOUNDATION",
        tags: ["Systems", "Pointers", "Algorithms"]
      }
    ]
  },
  {
    category: "DEVELOPMENT",
    title: "DEVELOPMENT",
    kanji: "開発技術",
    skills: [
      {
        name: "Python Development",
        category: "DEVELOPMENT",
        description: "Backend scripting, automated data processing pipelines, and AI model serving infrastructure.",
        level: "████████",
        rank: "BACKEND",
        tags: ["Automation", "APIs", "Data Pipelines"]
      },
      {
        name: "HTML",
        category: "DEVELOPMENT",
        description: "Semantic web architecture, responsive page structuring, and modern document organization.",
        level: "████████",
        rank: "STRUCTURAL",
        tags: ["Semantic Web", "Accessibility", "DOM"]
      },
      {
        name: "HTML Front-End Developer",
        category: "DEVELOPMENT",
        description: "Building interactive, responsive user interfaces that seamlessly connect with backend data services.",
        level: "████████",
        rank: "FRONT-END",
        tags: ["User Interface", "Layout Design", "Component State"]
      },
      {
        name: "HTML Web Designer",
        category: "DEVELOPMENT",
        description: "Designing efficient, user-friendly solutions that complement engineering logic with clean aesthetic delivery.",
        level: "████████",
        rank: "DESIGN",
        tags: ["Visual Design", "UX Architecture", "Responsive Flow"]
      }
    ]
  },
  {
    category: "AI",
    title: "ARTIFICIAL INTELLIGENCE",
    kanji: "人工知能",
    skills: [
      {
        name: "Artificial Intelligence",
        category: "AI",
        description: "Specialized in machine learning predictive algorithms, neural architectures (LSTM), ensemble modeling (XGBoost, LightGBM, CatBoost), and natural language processing.",
        level: "████████",
        rank: "PRIMARY DOMAIN",
        tags: ["Machine Learning", "NLP", "Predictive Modeling", "Statistical Estimation"]
      }
    ]
  }
];

export const QUESTS: ProjectQuest[] = [
  {
    id: "cricket-prediction",
    questNumber: "QUEST 01",
    title: "CRICKET PLAYER PERFORMANCE PREDICTION",
    category: "Machine Learning / Artificial Intelligence",
    subtitle: "Multi-Model Algorithmic Prediction Engine",
    description: "A machine-learning project focused on predicting cricket player performance across diverse match formats and pitch conditions using multiple predictive algorithms and statistical modeling.",
    modelsOrFeatures: [
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Poisson Regression",
      "Negative Binomial",
      "Survival Analysis",
      "LSTM",
      "Random Forest",
      "SVM"
    ],
    diagram: [
      { step: "01", label: "CRICKET DATA" },
      { step: "02", label: "MACHINE LEARNING" },
      { step: "03", label: "PREDICTION ENGINE" },
      { step: "04", label: "PLAYER PERFORMANCE" }
    ],
    image: mangaCricketStadiumImg,
    status: "COMPLETED",
    rank: "S-RANK"
  },
  {
    id: "invoice-hub",
    questNumber: "QUEST 02",
    title: "INVOICE HUB",
    category: "Cloud SaaS / Web Application",
    subtitle: "Enterprise Commerce & Billing Management Suite",
    description: "Invoice Hub is a cloud-based SaaS platform that lets companies centrally store and manage their product catalog, customer data, and complete sales history with automated billing workflows.",
    modelsOrFeatures: [
      "Product catalog",
      "Customer data",
      "Sales history",
      "Professional invoices",
      "Taxes & Discounts",
      "Recurring billing",
      "Multi-currency support",
      "Invoice tracking",
      "Payment status",
      "Sales performance",
      "Top products",
      "Receivables aging",
      "Automated reminders",
      "Dashboards and reports"
    ],
    image: mangaInvoiceDashboardImg,
    status: "COMPLETED",
    rank: "S-RANK"
  },
  {
    id: "ai-website-chatbot",
    questNumber: "QUEST 03",
    title: "AI WEBSITE CHATBOT",
    category: "Artificial Intelligence / NLP / Web",
    subtitle: "High-Accuracy Interactive Conversational Agent",
    description: "Developed and deployed an AI-powered conversational chatbot for web platforms, driving real-time user assistance, personalized interactions, and streamlined inquiry handling.",
    modelsOrFeatures: [
      "Natural Language Processing",
      "Chatbot accuracy",
      "Personalized interactions",
      "Website integration",
      "User engagement"
    ],
    metrics: [
      { label: "Reduction in Customer Inquiry Response Time", value: "40%" },
      { label: "Improvement in Customer Satisfaction Scores", value: "25%" }
    ],
    image: mangaHeroImg,
    status: "COMPLETED",
    rank: "S-RANK"
  }
];

export const SYSTEM_STATUS_DATA = {
  hscScore: "92%",
  degree: "B.Tech/B.E.",
  graduation: "2025",
  projects: "3",
  primaryDomain: "Artificial Intelligence",
  location: "Hyderabad, India",
  college: "Eluru College of Engineering and Technology"
};
