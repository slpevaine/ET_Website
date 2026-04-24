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
    subtitle: 'Final-year IT Student · UX Engineer · Product Designer',
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
      "I'd love to collaborate on thoughtful digital experiences. Find me on any of the platforms below.",
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
    title: 'Cookbookie',
    subtitle: 'Recipe App · 2024',
    description:
      'Social recipe app for young cooks with cross-generational sharing, simple UX flows, and personalised recommendations.',
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
    title: 'Emotion Recognition',
    subtitle: 'ML System · 2026 – Present',
    description:
      'Machine learning system detecting emotional risk levels using audio/visual data, designed with real user research involving neurodivergent children.',
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
      'Built an offline triage web app classifying radiology reports into GP vs specialist pathways.',
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
      'Designed and built a sustainability-focused solution addressing environmental challenges through data-driven insights and community engagement.',
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
      'Competed in VisagioX Hackathon 2026, developing innovative solutions under time pressure.',
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
      'Participated in Student StartUp Weekend 2026, pitching and prototyping a startup idea from concept to demo in 54 hours.',
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
      'Joined Perth Hackerhouse 2026, collaborating with builders and designers to ship projects in an immersive hacker environment.',
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
      'Competed in the CROC & URC Hackathon 2025, building a tech solution for a real-world challenge posed by industry partners.',
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
      'Selected for the Bloom Launchpad Program, gaining hands-on industry experience and mentorship in product and design.',
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
    <p class="cb-desc">${card.description}</p>
    ${socialsHtml}
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
    /* Social links: let them open, don't flip */
    if (e.target.closest('.cb-social-link')) return;

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

/* ── Interactive gooey blobs (follow cursor) ─────────────────── */
function initGooeyBlobs() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const configs = [
    { sel: '.blob-1', speed: 0.035, ox:   0, oy:   0 },
    { sel: '.blob-2', speed: 0.060, ox:  70, oy:  40 },
    { sel: '.blob-3', speed: 0.020, ox: -55, oy:  65 },
  ];

  const blobs = configs.map(c => {
    const el = document.querySelector(c.sel);
    if (!el) return null;
    el.style.animation = 'none';
    const r  = el.getBoundingClientRect();
    const hx = r.left + r.width  / 2;
    const hy = r.top  + r.height / 2;
    return { el, speed: c.speed, ox: c.ox, oy: c.oy, x: hx, y: hy, hx, hy };
  }).filter(Boolean);

  if (!blobs.length) return;

  let mx = window.innerWidth  / 2;
  let my = window.innerHeight / 2;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  window.addEventListener('touchmove', e => {
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;
  }, { passive: true });

  const lerp = (a, b, t) => a + (b - a) * t;

  (function tick() {
    blobs.forEach(b => {
      b.x = lerp(b.x, mx + b.ox, b.speed);
      b.y = lerp(b.y, my + b.oy, b.speed);
      b.el.style.transform = `translate(${b.x - b.hx}px, ${b.y - b.hy}px)`;
    });
    requestAnimationFrame(tick);
  })();
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
  document.addEventListener('DOMContentLoaded', () => { initCards(); initGooeyBlobs(); });
} else {
  initCards();
  initGooeyBlobs();
}
