import type { ReactNode } from "react";
import BlurText from "@/components/BlurText";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import { ABOUT, SOCIALS, SKILL_GROUPS, EXPERIENCE, CATEGORY_LABELS, FEATURE_ITEMS, FeatureCategory } from "@/data/content";

const ORDER: FeatureCategory[] = ["project", "hackathon", "leadership", "volunteering"];

const SOCIAL_ICON: Record<string, ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 7l10 7 10-7" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="section section--hero" aria-label="About">
        <p className="section__eyebrow"><span className="dot" /> About Me</p>

        <h1 className="hero__statement">
          I design, manage, and build digital solutions that{" "}
          <em>balance usability, aesthetics, and impact.</em>
        </h1>

        <div className="hero">
          <Reveal className="hero__photo">
            <img src={ABOUT.portrait} alt={`Portrait of ${ABOUT.name}`} draggable={false} />
          </Reveal>

          <div className="hero__copy">
            <BlurText text={ABOUT.name} tag="p" className="hero__name" wordDelay={110} duration={0.8} />
            <p className="hero__tagline">{ABOUT.tagline}</p>
            <p className="hero__bio">{ABOUT.bio}</p>

            <div className="hero__actions">
              <a href="#work" className="btn btn--primary">View my work</a>
              <div className="hero__socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.kind === "email" ? undefined : "_blank"}
                    rel="noopener"
                    aria-label={s.label}
                    className="icon-btn"
                  >
                    {SOCIAL_ICON[s.kind]}
                  </a>
                ))}
              </div>
            </div>

            <Reveal delay={0.1} className="hero__skills">
              <p className="hero__skills-label">Transferable Skills</p>
              {SKILL_GROUPS.map((group) => (
                <div className="skill-group" key={group.label}>
                  <p className="skill-group__label">{group.label}</p>
                  <div className="pill-row">
                    {group.items.map((s) => (
                      <span key={s} className="pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Work ──────────────────────────────────────────────── */}
      <section id="work" className="section" aria-label="Work">
        <Reveal><p className="section__eyebrow"><span className="dot" /> Selected Work</p></Reveal>
        <Reveal><h2 className="section__title">Projects &amp; Experience</h2></Reveal>

        <div className="case-group">
          <Reveal><h3 className="case-group__title">Experience</h3></Reveal>
          <Reveal>
            <div className="experience-list">
              {EXPERIENCE.map((exp) => (
                <div className={`experience-item${exp.current ? " experience-item--current" : ""}`} key={exp.id}>
                  <div className="experience-item__head">
                    <span className="experience-item__role">{exp.role}</span>
                    <span className="experience-item__org">· {exp.org}</span>
                    {exp.current && <span className="experience-item__badge">Current</span>}
                  </div>
                  <p className="experience-item__period">{exp.period}</p>
                  <p className="experience-item__desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {ORDER.map((cat) => {
          const items = FEATURE_ITEMS.filter((i) => i.category === cat);
          if (!items.length) return null;
          return (
            <div className="case-group" key={cat}>
              <Reveal><h3 className="case-group__title">{CATEGORY_LABELS[cat]}</h3></Reveal>
              <div className="case-grid">
                {items.map((item, i) => (
                  <Reveal key={item.id} delay={Math.min(i * 0.05, 0.2)}>
                    <FeatureCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="section" aria-label="Contact">
        <Reveal className="contact">
          <p className="section__eyebrow"><span className="dot" /> Get In Touch</p>
          <h2 className="section__title">Let&rsquo;s build something thoughtful.</h2>
          <p className="contact__lede">
            I&rsquo;m always open to new roles, projects, and collaborations. Reach out and let&rsquo;s talk.
          </p>
          <a href={SOCIALS[0].href} className="btn btn--primary btn--lg">
            {SOCIALS[0].label}
          </a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <p className="site-footer__heading">Main</p>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="site-footer__col">
            <p className="site-footer__heading">Connect</p>
            {SOCIALS.map((s) => (
              <a key={s.href} href={s.href} target={s.kind === "email" ? undefined : "_blank"} rel="noopener">
                {s.kind === "email" ? "Email" : s.kind === "linkedin" ? "LinkedIn" : "GitHub"} ↗
              </a>
            ))}
          </div>
        </div>
        <p className="site-footer__copy">&copy; 2026 {ABOUT.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
