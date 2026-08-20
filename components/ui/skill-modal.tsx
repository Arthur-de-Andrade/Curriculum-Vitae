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
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const closeModal = () => setSelectedSkill(null);

  const openSkill = (skill: SkillItem) => {
    if (document.activeElement instanceof HTMLElement) {
      lastTriggerRef.current = document.activeElement;
    }

    setSelectedSkill(skill);
  };

  useEffect(() => {
    if (!selectedSkill) return;

    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      lastTriggerRef.current?.focus();
    };
  }, [selectedSkill]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <SkillModalContext.Provider value={{ openSkill }}>
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
            onClick={closeModal}
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
      aria-haspopup="dialog"
      aria-controls="skillModal"
      onClick={() => context.openSkill(skill)}
    >
      {skill.name}
    </button>
  );
}
