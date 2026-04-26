/* ═══════════════════════════════════════════════════════════════
   Evangeline Tanoto · Portfolio
   Scattered journal flashcards — click to flip, opaque backs
   ═══════════════════════════════════════════════════════════════ */

/* ── Card data ───────────────────────────────────────────────── */
const CARDS = [
  {
    id: 'about',
    category: 'intro',
    title: 'About Me',
    subtitle: 'Final-year IT Student · UX & Product Designer · Frontend & Systems',
    description:
      'Final-year IT student focused on UI/UX, product design, and human-centered technology. I design thoughtful digital experiences that balance usability, aesthetics, and impact.',
    accent: '#8fad88',
    accentBg: 'rgba(143,173,136,0.12)',
    tags: [],
    imageUrl: '/assets/aboutme.png',
    imageAlt: 'About Me',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    id: 'connect',
    category: 'intro',
    title: "Let's Connect",
    subtitle: 'Evangeline Tanoto',
    description:
      "I’d love to collaborate on thoughtful digital work. Let me know if that could be useful for your team!",
    accent: '#b0a0c8',
    accentBg: 'rgba(176,160,200,0.12)',
    tags: [],
    imageUrl: '/assets/connect.jpeg',
    imageAlt: "Let's Connect",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    socials: [
      {
        label: 'tanoto.evangeline@gmail.com',
        href: 'mailto:tanoto.evangeline@gmail.com',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      },
      {
        label: 'linkedin · evangeline-tanoto',
        href: 'https://www.linkedin.com/in/evangeline-tanoto/',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      },
      {
        label: 'github · slpevaine',
        href: 'https://github.com/slpevaine',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      },
    ],
  },
  {
    id: 'cookbookie',
    category: 'project',
    title: 'Cookbookie App',
    subtitle: 'Recipe App · 2024',
    description:
      'Designed Cookbookie with Figma, a recipe app tailored for young cooks, focused on simplicity and accessibility. Built features for searching, saving, and creating recipes, with an emphasis on intuitive UI/UX for less experienced users. Through this project, I developed skills in user-centered design, accessibility, and feature planning, while also exploring how technology can bridge generational gaps by enabling the sharing of recipes and food traditions across age groups.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/in/evangeline-tanoto/details/projects/' },
    accent: '#8ab4c8',
    accentBg: 'rgba(138,180,200,0.12)',
    tags: [{ label: 'Project', variant: 'project' }],
    imageUrl: '/assets/cookbookie.png',
    imageAlt: 'Cookbookie Recipe App',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  },
  {
    id: 'emotion',
    category: 'project',
    title: 'Sentiment Guide for Autistic Adolescents',
    subtitle: 'ML Project · Dec 2025 – Present',
    description:
      'A student research project explored how autistic adolescents (and people in general), can interact with machines in a natural and intuitive way. The initial focus is on children who struggle to pick up social cues, and how technology might help them navigate social interactions more confidently.',
    bullets: [
      'Real-time tone analysis using a locally-run AI model (Gemma3:4b via Ollama)',
      'Flags unkind or blunt phrasing with inline word-level highlights, Grammarly-style',
      'Generates contextual suggestions for kinder alternatives using prompt engineering',
      'Fully private — no data leaves the device, no API key, no rate limits',
      'Vanilla JavaScript, Shadow DOM, Chrome Extensions API, Range API',
    ],
    accent: '#c4848c',
    accentBg: 'rgba(196,132,140,0.12)',
    tags: [{ label: 'Project', variant: 'project' }],
    imageUrl: '/assets/sentimentanalysis.png',
    imageAlt: 'Emotion Recognition System',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9"/><line x1="12" y1="22" x2="12" y2="9"/><polyline points="2 9 12 9 22 9"/></svg>`,
  },
  {
    id: 'hackathon-wahealth',
    category: 'hackathon',
    title: 'WA Health Hackathon',
    subtitle: 'Hackathon · 2025',
    description:
      'Developed a rule-based triage web app during a 3-day hackathon to help identify and manage patients at risk of micro-fractures. Built a math-based algorithm using clinician-approved rules (avoiding LLMs for reliability) and designed a minimal, workflow-friendly interface that integrates patient data for clear triage outcomes. Through this project, I strengthened skills in user-centered design for healthcare, prioritizing simplicity over feature overload, and gained insight into clinical workflows, real-world constraints, and the value of iterative feedback from medical professionals.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_working-alongside-doctors-and-fellow-innovators-activity-7376914673117491201-ETOF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA' },
    accent: '#7ba8c0',
    accentBg: 'rgba(123,168,192,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/wahealth.png',
    imageAlt: 'WA Health Hackathon',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    id: 'hackathon-ecopulse',
    category: 'hackathon',
    title: 'EcoPulse Hackathon',
    subtitle: 'Hackathon · 2025',
    description:
      'Developed a microgrid monitoring solution that evolved from a standard dashboard into a smart alert system, incorporating anomaly detection to deliver real-time email and SMS notifications for operational issues. Built features to visualize energy data and system health while providing actionable insights for both operators and stakeholders. Through this project, I gained experience applying AI to real-world data, translating complex systems into usable insights, and strengthening my ability to communicate technical solutions effectively through pitching and storytelling.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_exciting-news-our-team-won-runner-up-for-activity-7380106012952948737-FKKW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA' },
    accent: '#7cad88',
    accentBg: 'rgba(124,173,136,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/ecopulse_hackathon.jpeg',
    imageAlt: 'EcoPulse Hackathon',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    id: 'hackathon-visagiox',
    category: 'hackathon',
    title: 'VisagioX Hackathon 2026',
    subtitle: 'Hackathon · 2026',
    description:
      'Built an eye-tracking attention monitoring system at a 3-day hackathon hosted by Visagio. The project addressed the challenge of human oversight in autonomous systems, where operator attention and expertise levels (novice, expert, fatigue states) impact performance but are not accounted for in current tools. Developed a prototype attention tracker to help detect when operator focus is diverted, supporting more adaptive and human-aware system supervision. Gained experience in human–AI interaction design, problem framing in complex systems, and rapid prototyping under time constraints.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_competing-in-visagiox-hackathon-2026-activity-7383297354844416000-XXYV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA' },
    accent: '#c09878',
    accentBg: 'rgba(192,152,120,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/visagiox.jpeg',
    imageAlt: 'VisagioX Hackathon 2026',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    id: 'hackathon-startupweekend',
    category: 'hackathon',
    title: 'Student StartUp Weekend 2026',
    subtitle: 'Hackathon · 2026',
    description:
      'Built HeyMom in a 52-hour hackathon—an action-oriented productivity tool inspired by the idea of an “AI mum” for student accountability. After interviewing Year 11 students and iterating based on feedback, we pivoted the concept into a validated solution focused on motivation and task completion. Gained experience in rapid prototyping, user interviewing, and iterating ideas based on real user insights.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_studentstartupweekend-curtinentrepreneurs-activity-7445335095500054528-NR6_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA' },
    accent: '#a888c4',
    accentBg: 'rgba(168,136,196,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/startupweekend.jpeg',
    imageAlt: 'Student StartUp Weekend 2026',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    id: 'hackathon-hackerhouse',
    category: 'hackathon',
    title: 'Perth Hackerhouse 2026',
    subtitle: 'Hackathon · 2026',
    description:
      'Selected to attend Perth HackerHouse—Perth’s first hackerhouse—hosted by Arrayah, where I lived and collaborated with 14 creators to build meaningful projects. Delivered a workshop on building in public, sharing how I created social media content reaching 3.1M views. Gained experience in rapid ideation, community-driven building, and learning from diverse perspectives in an intensive, collaborative environment.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_day-1-chapter-1-people-and-perspectives-activity-7421507198624915456-fCUd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA' },
    accent: '#88b4c0',
    accentBg: 'rgba(136,180,192,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/hackerhouse2.jpeg',
    imageAlt: 'Perth Hackerhouse 2026',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    id: 'hackathon-croc',
    category: 'hackathon',
    title: 'CROC & URC Hackathon 2025',
    subtitle: 'Hackathon · 2025',
    description:
      'Participated in the 2-day CROC & URC Hackathon 2025, building a robot car to navigate an obstacle course and collect points. Worked with Arduino and C-based code to develop control systems, pivoting from a failed radio joystick setup to a Bluetooth mobile controller. Gained hands-on experience in rapid prototyping, hardware troubleshooting, and adapting under time pressure, while strengthening teamwork, communication, and the ability to apply transferable coding skills across platforms.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_another-month-another-hackathon-this-time-activity-7371837465994854400-TVMZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA'},
    accent: '#c4a870',
    accentBg: 'rgba(196,168,112,0.12)',
    tags: [{ label: 'Hackathon', variant: 'hackathon' }],
    imageUrl: '/assets/crochackathon.jpeg',
    imageAlt: 'CROC & URC Hackathon 2025',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    id: 'internship-launchpad',
    category: 'internship',
    title: 'Bloom Launchpad Program',
    subtitle: 'Internship · 2025',
    description:
      'Selected for the 12-week Bloom Launchpad entrepreneurship program, where I learned how to take a business from idea to execution in a structured, fast-paced environment. During the program, I started a social media services business, made 50+ customer interviews to understand real needs, and generated $500+ in early revenue. The experience taught me how to validate ideas through direct conversations, adapt based on feedback, and build something real from scratch rather than just theorising about it.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_launchpad-bloomwa-studentfounders-share-7432269122673205248-s8hk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA'},
    accent: '#e8a0a8',
    accentBg: 'rgba(232,160,168,0.12)',
    tags: [{ label: 'Internship', variant: 'internship' }],
    imageUrl: '/assets/launchpad.jpeg',
    imageAlt: 'Bloom Launchpad Program',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
  {
    id: 'volunteering-globalscholars',
    category: 'volunteering',
    title: 'Student Speaker at Curtin Global Scholars Event',
    subtitle: 'Volunteering · 2025',
    description:
      'Spoke at the Curtin Global Scholars Event, sharing experiences and insights with an international student audience.',
    accent: '#8fad88',
    accentBg: 'rgba(143,173,136,0.12)',
    tags: [{ label: 'Volunteering', variant: 'volunteering' }],
    imageUrl: '/assets/globalscholars.jpeg',
    imageAlt: 'Curtin Global Scholars Event',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    id: 'volunteering-coderdojo',
    category: 'volunteering',
    title: 'Mentor',
    subtitle: 'CoderDojo · Volunteering',
    description:
      'Mentored young students at CoderDojo, guiding them through coding projects and fostering a passion for technology.',
    link: { label: 'Read More', href: 'https://www.facebook.com/CoderDojoWA/'},
    accent: '#b4c890',
    accentBg: 'rgba(180,200,144,0.12)',
    tags: [{ label: 'Volunteering', variant: 'volunteering' }],
    imageUrl: '/assets/coderdojo.png',
    imageAlt: 'CoderDojo Mentor',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    id: 'volunteering-aisummit',
    category: 'volunteering',
    title: 'Volunteer',
    subtitle: 'AI Summit · Volunteering',
    description:
      'Volunteered at the AI Summit, supporting event operations and connecting attendees with speakers and exhibitors.',
    link: { label: 'Read More', href: 'https://www.linkedin.com/posts/evangeline-tanoto_jimowensphotography-aidisrupt2025-activity-7406997453612232704-m4mT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf1e9wBE-jqb3rq04cYIVDMdd3ZnSbQ6lA'},
    accent: '#b0b8d8',
    accentBg: 'rgba(176,184,216,0.12)',
    tags: [{ label: 'Volunteering', variant: 'volunteering' }],
    imageUrl: '/assets/aisummit.jpeg',
    imageAlt: 'AI Summit Volunteer',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  },
];

/* ── Build and insert all cards ──────────────────────────────── */
function buildCard(card) {
  /* Outer wrapper */
  const wrap = document.createElement('article');
  wrap.className = 'flip-card';
  wrap.setAttribute('tabindex', '0');
  wrap.setAttribute('aria-label', `${card.title} — click to flip`);

  /* Inner (the thing that rotates) */
  const inner = document.createElement('div');
  inner.className = 'card-inner';

  /* ── FRONT ─────────────────────────────────────────────── */
  const front = document.createElement('div');
  front.className = 'card-front';

  const tagsHtml = card.tags.map(t =>
    `<span class="cf-tag cf-tag--${t.variant}">${t.label}</span>`
  ).join('');

  front.innerHTML = `
    <div class="cf-image">
      <img src="${card.imageUrl}" alt="${card.imageAlt}" loading="lazy" draggable="false" />
      ${card.tags.length ? `<div class="cf-tags">${tagsHtml}</div>` : ''}
    </div>
    <div class="cf-content">
      <div class="cf-icon" style="background:${card.accentBg};border:1.5px solid ${card.accent}44">
        ${card.icon.replace('stroke="currentColor"', `stroke="${card.accent}"`)}
      </div>
      <h2 class="cf-title">${card.title}</h2>
      <p class="cf-subtitle">${card.subtitle}</p>
    </div>
  `;

  /* ── BACK ──────────────────────────────────────────────── */
  const back = document.createElement('div');
  back.className = 'card-back';

  /* Thin coloured stripe at top */
  const stripe = `<div class="cb-stripe" style="background:${card.accent}55"></div>`;

  const socialsHtml = card.socials
    ? `<div class="cb-socials">${card.socials.map(s =>
        `<a href="${s.href}"
            class="cb-social-link"
            target="${s.href.startsWith('mailto') ? '_self' : '_blank'}"
            rel="noopener">
          ${s.icon}
          ${s.label}
        </a>`
      ).join('')}</div>`
    : '';

  back.innerHTML = `
    ${stripe}
    <div class="cb-icon" style="background:${card.accentBg};border:1.5px solid ${card.accent}44">
      ${card.icon.replace('stroke="currentColor"', `stroke="${card.accent}"`)}
    </div>
    <h2 class="cb-title">${card.title}</h2>
    <p class="cb-subtitle">${card.subtitle}</p>
    <div class="cb-scroll-area">
      <p class="cb-desc">${card.description}</p>
      ${card.bullets ? `<ul class="cb-bullets">${card.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      ${card.link ? `<a href="${card.link.href}" class="cb-project-link" target="_blank" rel="noopener">${card.link.label}</a>` : ''}
      ${socialsHtml}
    </div>
    <button class="cb-back-btn js-flip-back" aria-label="Flip back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>
      </svg>
      Flip back
    </button>
  `;

  inner.appendChild(front);
  inner.appendChild(back);
  wrap.appendChild(inner);

  /* ── Interactions ──────────────────────────────────────── */
  wrap.addEventListener('click', (e) => {
    /* Flip-back button */
    if (e.target.closest('.js-flip-back')) {
      wrap.classList.remove('flipped');
      return;
    }
    /* Social/project links and scrollable description: don't flip */
    if (e.target.closest('.cb-social-link')) return;
    if (e.target.closest('.cb-project-link')) return;
    if (e.target.closest('.cb-scroll-area')) return;

    wrap.classList.toggle('flipped');
  });

  /* Keyboard */
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      wrap.classList.toggle('flipped');
    }
    if (e.key === 'Escape') {
      wrap.classList.remove('flipped');
    }
  });

  return wrap;
}

/* ── Nav scroll tint ─────────────────────────────────────────── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background  = window.scrollY > 40 ? 'rgba(247,242,233,0.9)'  : '';
    nav.style.boxShadow   = window.scrollY > 40 ? '0 2px 20px rgba(90,70,60,0.07)' : '';
  }, { passive: true });
})();

/* ── Boot ────────────────────────────────────────────────────── */
function initCards() {
  const introGrid        = document.getElementById('introGrid');
  const projectsGrid     = document.getElementById('projectsGrid');
  const hackathonsGrid   = document.getElementById('hackathonsGrid');
  const internshipsGrid  = document.getElementById('internshipsGrid');
  const volunteeringGrid = document.getElementById('volunteeringGrid');
  const hint = document.getElementById('sectionHint');

  CARDS.forEach(card => {
    const el = buildCard(card);
    if (card.category === 'intro'        && introGrid)        introGrid.appendChild(el);
    if (card.category === 'project'      && projectsGrid)     projectsGrid.appendChild(el);
    if (card.category === 'hackathon'    && hackathonsGrid)   hackathonsGrid.appendChild(el);
    if (card.category === 'internship'   && internshipsGrid)  internshipsGrid.appendChild(el);
    if (card.category === 'volunteering' && volunteeringGrid) volunteeringGrid.appendChild(el);
  });

  /* Fade hint after 3 s */
  if (hint) setTimeout(() => hint.classList.add('hidden'), 3000);
}

/* Works whether DOMContentLoaded has already fired (Next.js afterInteractive)
   or hasn't yet (plain HTML <script> at end of body). */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { initCards(); });
} else {
  initCards();
}
