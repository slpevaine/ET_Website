"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT, SOCIALS } from "@/data/content";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function SiteNav() {
  const [active, setActive] = useState("about");
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-nav">
      <a href="#about" onClick={scrollTo("about")} className="site-nav__brand">
        <span className="site-nav__name">{ABOUT.name}</span>
        <span className="site-nav__role">{ABOUT.role}</span>
      </a>

      <nav className="site-nav__pill" aria-label="Main navigation">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            ref={(el) => { tabRefs.current[s.id] = el; }}
            href={`#${s.id}`}
            onClick={scrollTo(s.id)}
            className={`site-nav__tab${active === s.id ? " site-nav__tab--active" : ""}`}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="site-nav__links">
        <a href={SOCIALS[1].href} target="_blank" rel="noopener" className="site-nav__link">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href={ABOUT.resume} download className="site-nav__link">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
