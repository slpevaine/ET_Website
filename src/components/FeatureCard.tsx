"use client";

import { useState } from "react";
import { FeatureItem } from "@/data/content";

export default function FeatureCard({ item }: { item: FeatureItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="case-card-3d">
      <article
        className={`case-card${flipped ? " case-card--flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${item.title} — click to flip`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); }
        }}
      >
        <div className="case-card__inner">
          {/* Front */}
          <div className="case-card__face case-card__face--front">
            {item.starred && (
              <span className="case-card__star" title="Hackathon turned project">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5l2.9 6.3 6.8.7-5.1 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.1-4.7 6.8-.7L12 2.5z" />
                </svg>
              </span>
            )}
            {item.imageUrl ? (
              <div className="case-card__frame">
                <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" draggable={false} />
              </div>
            ) : (
              <div className="case-card__frame case-card__frame--empty" aria-hidden="true">
                <span>{item.title.charAt(0)}</span>
              </div>
            )}
            <div className="case-card__front-copy">
              <p className="case-card__meta">{item.subtitle}</p>
              <h4 className="case-card__title">{item.title}</h4>
            </div>
            <span className="case-card__hint">Click to flip →</span>
          </div>

          {/* Back */}
          <div className="case-card__face case-card__face--back">
            <p className="case-card__meta">{item.subtitle}</p>
            <h4 className="case-card__title">{item.title}</h4>
            <div className="case-card__scroll">
              <p className="case-card__desc">{item.description}</p>
              {item.bullets && (
                <ul className="case-card__bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener"
                  className="case-card__link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.link.label} ↗
                </a>
              )}
            </div>
            <span className="case-card__hint">← Flip back</span>
          </div>
        </div>
      </article>
    </div>
  );
}
