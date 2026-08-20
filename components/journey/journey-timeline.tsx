"use client";

import { Badge } from "@/components/ui/badge";
import type { JourneyItem, JourneyItemType } from "@/types/portfolio";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

interface JourneyTimelineProps {
  items: JourneyItem[];
}

const typeLabels: Record<JourneyItemType, string> = {
  experience: "Profissional",
  education: "Formação",
  course: "Curso",
};

function getStatusLabel(item: JourneyItem) {
  if (item.status === "current") return "Atual";
  if (item.status === "ongoing") return "Em andamento";
  return "Concluído";
}

export function JourneyTimeline({ items }: JourneyTimelineProps) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 32%"],
  });
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0.08, 1]), {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  return (
    <motion.ol
      ref={timelineRef}
      className="journey-timeline"
      aria-label="Linha do tempo de experiência e formação"
    >
      <span className="journey-axis" aria-hidden="true" />
      <motion.span
        className="journey-axis-progress"
        aria-hidden="true"
        style={{ scaleY: shouldReduceMotion ? 1 : progress }}
      />

      {items.map((item) => (
        <li
          className="journey-item"
          data-current={item.status === "current" ? "true" : undefined}
          data-kind={item.type}
          id={item.anchorId ?? item.id}
          key={item.id}
        >
          <div className="journey-item-meta">
            <span className="journey-period">{item.periodLabel}</span>
            <Badge tone={item.status === "current" ? "success" : "neutral"}>
              <i className={item.icon} aria-hidden="true" />
              {typeLabels[item.type]} · {getStatusLabel(item)}
            </Badge>
          </div>

          <div className="journey-item-axis" aria-hidden="true">
            <span className="journey-item-marker" />
          </div>

          <article className="journey-item-content">
            <h3>{item.title}</h3>
            <p className="journey-organization">
              {item.organization}
              {item.location ? <span> · {item.location}</span> : null}
            </p>

            <div className="journey-description">
              {item.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {item.highlights ? (
              <div className="journey-highlights">
                <h4>Principais responsabilidades</h4>
                <ul>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            ) : null}

            {item.technologies?.length ? (
              <div className="journey-technologies" aria-label="Tecnologias associadas">
                <span className="journey-technologies-label">Stack</span>
                <div>
                  {item.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}
                </div>
              </div>
            ) : null}

            {item.credential ? (
              <a
                className="journey-credential"
                href={item.credential.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.credential.label} ↗
              </a>
            ) : null}
          </article>
        </li>
      ))}
    </motion.ol>
  );
}
