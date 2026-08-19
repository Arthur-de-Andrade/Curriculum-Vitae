"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import type { SkillItem } from "@/types/portfolio";

interface SkillModalContextValue {
  openSkill: (skill: SkillItem) => void;
}

const SkillModalContext = createContext<SkillModalContextValue | null>(null);

interface SkillModalProviderProps {
  children: ReactNode;
}

export function SkillModalProvider({ children }: SkillModalProviderProps) {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedSkill) return;

    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSkill(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedSkill]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setSelectedSkill(null);
    }
  };

  return (
    <SkillModalContext.Provider value={{ openSkill: setSelectedSkill }}>
      {children}
      <div
        id="skillModal"
        className={`modal${selectedSkill ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        aria-hidden={!selectedSkill}
        onClick={handleBackdropClick}
      >
        <div className="modal-content">
          <button
            className="close-modal"
            type="button"
            aria-label="Fechar descrição"
            ref={closeButtonRef}
            onClick={() => setSelectedSkill(null)}
          >
            &times;
          </button>
          <h3 id="modalTitle">{selectedSkill?.name ?? ""}</h3>
          <p id="modalDescription">
            {selectedSkill?.description ?? ""}
          </p>
        </div>
      </div>
    </SkillModalContext.Provider>
  );
}

export function SkillButton({ skill }: { skill: SkillItem }) {
  const context = useContext(SkillModalContext);

  if (!context) {
    throw new Error("SkillButton must be used inside SkillModalProvider");
  }

  return (
    <button
      className="skill-tag"
      type="button"
      data-description={skill.description}
      onClick={() => context.openSkill(skill)}
    >
      {skill.name}
    </button>
  );
}
