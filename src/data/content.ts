export const ABOUT = {
  name: "Evangeline Tanoto",
  role: "Information Technology Graduate",
  tagline: "UX & Product Design · Project Management · Software Engineering — designing for people, end to end",
  bio: "Recently graduated with a degree in Information Technology, and currently working as an AI & Front-End Engineer Intern at Valearnis, an edtech startup. Across design, project management, and engineering, the common thread in my work is starting from real users: talking to them, testing ideas early, and turning what I learn into products that are simple to use. Because I write code myself, I’m especially at home designing technical, information-dense tools and working side by side with engineers.",
  portrait: "/assets/graduation.jpg",
  resume: "/assets/Evangeline-Tanoto-Resume.docx",
};

export const SOCIALS = [
  { label: "tanoto.evangeline@gmail.com", href: "mailto:tanoto.evangeline@gmail.com", kind: "email" as const },
  { label: "linkedin · evangeline-tanoto", href: "https://www.linkedin.com/in/evangeline-tanoto/", kind: "linkedin" as const },
  { label: "github · slpevaine", href: "https://github.com/slpevaine", kind: "github" as const },
];

export const SKILL_GROUPS = [
  {
    label: "UX & Product Design",
    items: ["Figma", "UI/UX Design", "User Research", "User Interviews", "Wireframing & Prototyping", "Information Design", "Accessibility"],
  },
  {
    label: "Engineering",
    items: ["Python", "TypeScript", "JavaScript", "HTML & CSS", "Git & GitHub", "Docker", "MongoDB", "REST APIs", "API Documentation"],
  },
  {
    label: "Product & Leadership",
    items: ["Project Management", "Agile/Scrum", "Jira", "Stakeholder Management", "Customer Discovery", "Cross-functional Coordination", "Team Leadership"],
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  current?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "valearnis",
    role: "AI & Front-End Engineer Intern",
    org: "Valearnis — EdTech Platform",
    period: "Jun 2026 – Present",
    current: true,
    description:
      "Building and shipping front-end features for a major upgrade to the platform’s learning journey for students, making UI and layout decisions and learning first-hand how design choices trade off against technical constraints. Connecting frontend and backend systems end-to-end, coordinating changes through Git and Docker, and using AI coding tools to support writing and debugging code.",
  },
  {
    id: "coderdojo-binarx",
    role: "Mentor",
    org: "AASQA CoderDojo × BinarX",
    period: "Feb – May 2026",
    description:
      "Taught coding, web development, and data visualization to neurodivergent teens every Saturday, stepping up to lead the program when the team lead was unavailable and nurturing problem-solving and teamwork skills in the learners.",
  },
  {
    id: "curtin-perth",
    role: "Information Technology Graduate",
    org: "Curtin University, Perth",
    period: "Jul 2025 – Sep 2026",
    description:
      "Transferred from Curtin Singapore to Curtin Perth to complete my Bachelor of Information Technology, graduating and receiving the Curtin Global Scholar honor.",
  },
  {
    id: "curtin-exchange",
    role: "Exchange Nominee",
    org: "Curtin Singapore",
    period: "Feb – Jun 2025",
    description:
      "Nominated as an exchange student to transfer from Curtin Singapore to Curtin Perth to continue my degree.",
  },
  {
    id: "curtin-singapore",
    role: "Information Technology Undergraduate",
    org: "Curtin Singapore",
    period: "Oct 2023 – Feb 2025",
    description: "Began my Bachelor of Information Technology at Curtin Singapore.",
  },
];

export type FeatureCategory = "project" | "hackathon" | "leadership" | "volunteering";

export interface FeatureItem {
  id: string;
  category: FeatureCategory;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  link?: { label: string; href: string };
  imageUrl?: string;
  imageAlt?: string;
  starred?: boolean;
}

export const FEATURE_ITEMS: FeatureItem[] = [
  // ── Projects (most recent first) ──────────────────────────────
  {
    id: "project-osteoporosis",
    category: "project",
    title: "Osteoporosis Triage Web Application",
    subtitle: "Healthcare Project · Oct 2025 – Aug 2026",
    starred: true,
    description:
      "What began as a 3-day prototype at the WA Health Hackathon grew into an ongoing project: a local, rule-based triage web app that auto-processes ER radiology reports to classify minimal-trauma fracture patients into GP vs Specialist pathways. After consulting a clinician who needed something usable without retraining, I designed around their existing workflow and chose a minimal interface over trendy features. The prototype was selected for proposal at East Metropolitan Health Service Perth — I led the team’s stakeholder meetings and co-authored the technical proposal over the following year.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_working-alongside-doctors-and-fellow-innovators-activity-7376914673117491201-ETOF" },
    imageUrl: "/assets/wahealth.png",
    imageAlt: "WA Health Hackathon",
  },
  {
    id: "emotion",
    category: "project",
    title: "Sentiment Guide for Autistic Adolescents",
    subtitle: "ML Project · Dec 2025 – Jul 2026",
    description:
      "A student research project explored how autistic adolescents, and people in general, can interact with machines in a natural and intuitive way. The initial focus is on children who struggle to pick up social cues, and how technology might help them navigate social interactions more confidently.",
    bullets: [
      "Real-time tone analysis using a locally-run AI model (Gemma3:4b via Ollama)",
      "Flags unkind or blunt phrasing with inline word-level highlights, Grammarly-style",
      "Generates contextual suggestions for kinder alternatives using prompt engineering",
      "Fully private — no data leaves the device, no API key, no rate limits",
      "Vanilla JavaScript, Shadow DOM, Chrome Extensions API, Range API",
    ],
    link: { label: "View on GitHub", href: "https://github.com/slpevaine/Sentiment-Guide-Chrome-Ext" },
    imageUrl: "/assets/sentimentanalysis.png",
    imageAlt: "Emotion Recognition System",
  },
  {
    id: "project-kiosk",
    category: "project",
    title: "Tech Hire Kiosk User Interface",
    subtitle: "UI/UX Design · Feb – Jun 2025",
    description:
      "Designed a self-service kiosk that lets students borrow, return, request, and enquire about tech equipment at any time. The interface mirrors familiar devices like smartphones and tablets, so it feels familiar from the first tap.",
    bullets: [
      "One-tap login with student ID cards, and every task completed in 3–5 steps",
      "Real-time stock levels and visual previews of equipment",
      "Multilingual support and customisable accessibility options",
      "Integrated with 24/7 lockers, with confirmation and reminder emails to close the loop",
    ],
    link: { label: "View in Figma", href: "https://www.figma.com/file/czGJXa26DXjwDeyPCDUsw2/Tech-Hire-Kiosk" },
    imageUrl: "/assets/kiosk.png",
    imageAlt: "Tech Hire Kiosk user interface",
  },
  {
    id: "project-trafficsim",
    category: "project",
    title: "Traffic Simulation System",
    subtitle: "University Capstone · Jan – May 2025",
    description:
      "Built a traffic simulation system in Python, scheduling and leading meetings with our supervisor and client to keep requirements and deliverables on track. Wrote and structured the system design docs, API specifications, ER diagrams, and architecture documentation so the next team could pick up the system without us. Achieved an overall grade of 70% (Distinction).",
    imageUrl: "/assets/trafficsim.png",
    imageAlt: "Traffic Simulation System desktop application",
  },
  {
    id: "cookbookie",
    category: "project",
    title: "Cookbookie App",
    subtitle: "Recipe App · 2024",
    description:
      "Designed Cookbookie in Figma, a recipe app tailored for young cooks, focused on simplicity and accessibility. Designed user flows for searching, saving, and creating recipes, with an emphasis on intuitive UI/UX for less experienced users. Through this project, I developed skills in user-centered design, accessibility, and feature planning, while also exploring how technology can bridge generational gaps by enabling the sharing of recipes and food traditions across age groups.",
    link: { label: "Read More", href: "https://www.linkedin.com/in/evangeline-tanoto/details/projects/" },
    imageUrl: "/assets/cookbookie.png",
    imageAlt: "Cookbookie Recipe App",
  },

  // ── Hackathons (most recent first) ────────────────────────────
  {
    id: "hackathon-startupweekend",
    category: "hackathon",
    title: "Student StartUp Weekend 2026",
    subtitle: "Hackathon · 2026",
    description:
      "Built HeyMom in a 52-hour hackathon — an action-oriented productivity tool inspired by the idea of an “AI mum” for student accountability. After interviewing Year 11 students and iterating based on feedback, we pivoted the concept into a validated solution focused on motivation and task completion. Gained experience in rapid prototyping, user interviews, and turning real user insights into design decisions.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_studentstartupweekend-curtinentrepreneurs-activity-7445335095500054528-NR6_" },
    imageUrl: "/assets/heymom.png",
    imageAlt: "HeyMom app",
  },
  {
    id: "hackathon-visagiox",
    category: "hackathon",
    title: "VisagioX Hackathon 2026",
    subtitle: "Hackathon · 2026",
    description:
      "Built an eye-tracking attention monitoring system at a 3-day hackathon hosted by Visagio. The project addressed the challenge of human oversight in autonomous systems, where operator attention and expertise levels — novice, expert, fatigue states — impact performance but are not accounted for in current tools. Developed a prototype attention tracker to help detect when operator focus is diverted, supporting more adaptive and human-aware system supervision. Gained experience in human–AI interaction design, problem framing in complex systems, and rapid prototyping under time constraints.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_competing-in-visagiox-hackathon-2026-activity-7383297354844416000-XXYV" },
    imageUrl: "/assets/visagiox.jpeg",
    imageAlt: "VisagioX Hackathon 2026",
  },
  {
    id: "hackathon-ecopulse",
    category: "hackathon",
    title: "MicroVision",
    subtitle: "Hackathon · Oct 2025",
    description:
      "Runner-up ($2,000 prize) at the EcoPulse Civic Hackers Hackathon, answering: how can we give complete visibility into how a microgrid is operating? As project lead, I assigned roles around each teammate’s strengths and led pitch preparation.",
    bullets: [
      "Began as a dashboard, then reframed around one question: what happens when operators aren’t at their screens?",
      "Anomaly detection across renewable generation, storage, and demand, with email alerts for minor issues and SMS for critical ones",
      "Dashboard showing energy breakdowns, microgrid health, and sustainability insights",
      "Designed for two audiences: monitoring for operators, transparency for communities and investors",
    ],
    link: { label: "View Prototype", href: "https://ecoplusdemo.replit.app/" },
    imageUrl: "/assets/micro%20dashboard.png",
    imageAlt: "MicroVision microgrid monitoring dashboard",
  },
  {
    id: "hackathon-wahealth",
    category: "hackathon",
    title: "WA Health Hackathon",
    subtitle: "Hackathon · 2025",
    description:
      "Built a rule-based triage web app in 3 days to help hospitals identify and manage patients at risk of micro-fractures, working alongside doctors throughout.",
    bullets: [
      "Math-based algorithm built on doctor-agreed rules, with adjustable parameters; no LLMs, so diagnoses stay accurate and trustworthy",
      "Combines patient history, symptoms, pain scores, and injury cause into one clear triage outcome",
      "Deliberately minimal UI (no extra colours, icons, or flashy elements) so it fits into hospital workflows",
      "Cut nice-to-have ideas like speech-to-text to focus on usability for healthcare workers",
      "Clinicians invited us to develop it further, which became the Osteoporosis Triage project",
    ],
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_working-alongside-doctors-and-fellow-innovators-activity-7376914673117491201-ETOF" },
    imageUrl: "/assets/wahealth.png",
    imageAlt: "WA Health Hackathon",
  },
  {
    id: "hackathon-croc",
    category: "hackathon",
    title: "CROC & URC Hackathon 2025",
    subtitle: "Hackathon · 2025",
    description:
      "Participated in the 2-day CROC & URC Hackathon 2025, building a robot car to navigate an obstacle course and collect points. Worked with Arduino and C-based code to develop control systems, pivoting from a failed radio joystick setup to a Bluetooth mobile controller. Gained hands-on experience in rapid prototyping, hardware troubleshooting, and adapting under time pressure, while strengthening teamwork, communication, and the ability to apply transferable coding skills across platforms.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_another-month-another-hackathon-this-time-activity-7371837465994854400-TVMZ" },
    imageUrl: "/assets/crochackathon.jpeg",
    imageAlt: "CROC & URC Hackathon 2025",
  },

  // ── Leadership (most recent first) ────────────────────────────
  {
    id: "leadership-launchpad",
    category: "leadership",
    title: "Bloom Launchpad — Founder & Product Lead",
    subtitle: "Entrepreneurship Program · Feb – May 2026",
    description:
      "Founded and ran a social media management business from scratch for small business owners in Perth as part of the 12-week Bloom Launchpad entrepreneurship program. Conducted 50+ B2C and B2B customer interviews to validate the problem and solution, generating $500+ in early revenue and growing to 4M+ views and 29K+ engagement across Instagram and TikTok.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_launchpad-bloomwa-studentfounders-share-7432269122673205248-s8hk" },
    imageUrl: "/assets/launchpad.jpeg",
    imageAlt: "Bloom Launchpad Program",
  },
  {
    id: "leadership-hackerhouse",
    category: "leadership",
    title: "Perth Hackerhouse 2026",
    subtitle: "Hackerhouse · 2026",
    description:
      "Selected to attend Perth HackerHouse — Perth’s first hackerhouse — hosted by Arrayah, where I lived and collaborated with 14 creators to build meaningful projects. Delivered a workshop on building in public, sharing how I created social media content reaching 3.1M views. Gained experience in rapid ideation, community-driven building, and learning from diverse perspectives in an intensive, collaborative environment.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_day-1-chapter-1-people-and-perspectives-activity-7421507198624915456-fCUd" },
    imageUrl: "/assets/hackerhouse2.jpeg",
    imageAlt: "Perth Hackerhouse 2026",
  },
  {
    id: "leadership-communityservice",
    category: "leadership",
    title: "Curtin SG Community Service Club (CCSC) President",
    subtitle: "Curtin Singapore · Oct 2024 – Feb 2025",
    description:
      "Led Curtin Singapore’s Community Service Club (CCSC) as President, running the committee and organizing student-driven community service initiatives.",
    imageUrl: "/assets/curtin-ccsc.jpg",
    imageAlt: "Curtin Singapore Community Service Club welcoming party",
  },

  // ── Volunteering (unchanged) ──────────────────────────────────
  {
    id: "volunteering-globalscholars",
    category: "volunteering",
    title: "Student Speaker at Curtin Global Scholars Event",
    subtitle: "Volunteering · 2025",
    description:
      "Spoke at the Curtin Global Scholars Event, sharing experiences and insights with an international student audience.",
    imageUrl: "/assets/globalscholars.jpeg",
    imageAlt: "Curtin Global Scholars Event",
  },
  {
    id: "volunteering-aisummit",
    category: "volunteering",
    title: "Volunteer · AI Summit",
    subtitle: "Volunteering",
    description:
      "Volunteered at the AI Summit, supporting event operations and connecting attendees with speakers and exhibitors.",
    link: { label: "Read More", href: "https://www.linkedin.com/posts/evangeline-tanoto_jimowensphotography-aidisrupt2025-activity-7406997453612232704-m4mT" },
    imageUrl: "/assets/aisummit.jpeg",
    imageAlt: "AI Summit Volunteer",
  },
];

export const CATEGORY_LABELS: Record<FeatureCategory, string> = {
  project: "Projects",
  leadership: "Leadership",
  hackathon: "Hackathons",
  volunteering: "Volunteering",
};
