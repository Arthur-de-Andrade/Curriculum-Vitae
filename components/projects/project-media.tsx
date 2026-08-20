"use client";

import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";

import type { ProjectMedia as ProjectMediaData } from "@/types/portfolio";

interface ProjectMediaProps {
  media: ProjectMediaData;
}

export function ProjectMedia({ media }: ProjectMediaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const open = () => {
    restoreFocusRef.current =
      triggerRef.current ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      restoreFocusRef.current?.focus();
      restoreFocusRef.current = null;
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <figure className="project-media">
      <div className="project-media-frame">
        <button
          ref={triggerRef}
          className="project-media-trigger"
          type="button"
          aria-label={`Ampliar diagrama: ${media.alt}`}
          onClick={open}
        >
          <Image
            src={media.src}
            alt={media.alt}
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 920px"
          />
          <span className="project-media-zoom-hint" aria-hidden="true">
            <Maximize2 size={14} />
            Ampliar diagrama
          </span>
        </button>
      </div>
      <figcaption>{media.caption}</figcaption>

      {isOpen ? (
        <div className="project-media-dialog-backdrop" onMouseDown={handleBackdropMouseDown}>
          <div
            ref={dialogRef}
            className="project-media-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="project-media-dialog-header">
              <p id={titleId}>Ampliar diagrama</p>
              <button
                ref={closeButtonRef}
                className="project-media-dialog-close"
                type="button"
                aria-label="Fechar diagrama"
                onClick={close}
              >
                <X size={18} aria-hidden="true" />
                <span>Fechar</span>
              </button>
            </div>
            <div className="project-media-dialog-image-frame">
              <Image
                src={media.src}
                alt={media.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 768px) calc(100vw - 40px), 1040px"
              />
            </div>
            <p id={descriptionId} className="project-media-dialog-caption">
              {media.caption}
            </p>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
