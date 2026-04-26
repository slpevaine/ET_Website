import Script from "next/script";
import GooeyFilterBackground from "@/components/gooey-filter-background";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <>
      {/* ─── Gooey Filter Pixel Trail Background ─────────────────── */}
      <GooeyFilterBackground />

      {/* ─── Navigation ─────────────────────────────────────────── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <span className="nav-logo">ET</span>
        <ul className="nav-links">
          <li><a href="#hero">About</a></li>
          <li><a href="#stack">Work</a></li>
          <li><a href="#stack">Connect</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero" aria-label="Introduction">
        <div className="hero-inner">
          <div className="hero-card">
            {/* Avatar */}
            <div className="avatar-wrap">
              <img
                src="/assets/profile.png"
                alt="Illustration of Evangeline Tanoto"
                className="avatar"
              />
            </div>

            {/* Name */}
            <BlurText
              text="Evangeline Tanoto"
              tag="h1"
              className="hero-name"
              wordDelay={120}
              duration={0.85}
              startDelay={0}
            />

            {/* Bio — starts after name finishes (2 words × 120 ms + 850 ms ≈ 1090 ms) */}
            <BlurText
              text="UI/UX and Product Designer · Final-year IT Student · Technical background in digital product development"
              tag="p"
              className="hero-bio"
              wordDelay={55}
              duration={0.6}
              startDelay={1100}
            />

            {/* CTA */}
            <a href="#stack" className="hero-cta">View my work ↓</a>

            {/* Social icons */}
            <div className="hero-social" role="list" aria-label="Social links">
              <a href="mailto:tanoto.evangeline@gmail.com"
                 className="social-btn" role="listitem" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/evangeline-tanoto/"
                 target="_blank" rel="noopener"
                 className="social-btn" role="listitem" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/slpevaine"
                 target="_blank" rel="noopener"
                 className="social-btn" role="listitem" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                           c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                           5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                           C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77
                           a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7
                           A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section" aria-label="Skills">
        <div className="skills-card">
          <p className="skills-title">Familiar With</p>
          <div className="skills-grid">
            <span className="skill-pill">Python</span>
            <span className="skill-pill">C</span>
            <span className="skill-pill">Unix</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">HTML&CSS</span>
            <span className="skill-pill">Data Structures & Algorithms</span>
            <span className="skill-pill">Operating & Database Systems</span>
            <span className="skill-pill">Linux & Windows Systems</span>
            <span className="skill-pill">Human Computer Interfaces</span>
            <span className="skill-pill">Jira</span>
            <span className="skill-pill">Agile/Scrum</span>
            <span className="skill-pill">Bitbucket/Git</span>
            <span className="skill-pill">Version Control</span>
            <span className="skill-pill">Technical & API Documentation</span>
            <span className="skill-pill">Matplotlib</span>
            <span className="skill-pill">Data Analysis</span>
            <span className="skill-pill">Pandas</span>
            <span className="skill-pill">NumPy</span>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="stack" className="journal-section" aria-label="Portfolio">
        <p className="section-label">— Portfolio —</p>
        <p className="section-hint" id="sectionHint" aria-hidden="true">Click any card to flip it</p>

        <div className="category-block">
          <p className="category-heading">Projects</p>
          <div className="journal-grid" id="projectsGrid"></div>
        </div>

        <div className="category-block">
          <p className="category-heading">Hackathons</p>
          <div className="journal-grid" id="hackathonsGrid"></div>
        </div>

        <div className="category-block">
          <p className="category-heading">Internships</p>
          <div className="journal-grid" id="internshipsGrid"></div>
        </div>

        <div className="category-block">
          <p className="category-heading">Volunteering</p>
          <div className="journal-grid" id="volunteeringGrid"></div>
        </div>

        <div className="journal-grid" id="introGrid"></div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Crafted with care · Evangeline Tanoto · 2026</p>
      </footer>

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
