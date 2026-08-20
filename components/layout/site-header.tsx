"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  ChevronRight,
  FileText,
  GitBranch,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { contactItems, navigationItems } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

  const desktopNavigation = navigationItems.filter((item) =>
    ["#sobre", "#projects", "#experiencia", "#habilidades", "#contato"].includes(item.href),
  );

const mobileNavigation = navigationItems.filter((item) => item.href !== "#curriculo");
const githubUrl = contactItems.find((item) => item.title === "GitHub")?.href ?? "#contato";

function resolveNavigationHref(href: string, isProjectPage: boolean) {
  return isProjectPage && href.startsWith("#") ? `/${href}` : href;
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.split("/").includes("projects");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = () => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement && document.activeElement !== document.body
      ? document.activeElement
      : menuButtonRef.current;
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      const firstLink = mobilePanelRef.current?.querySelector<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      firstLink?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !mobilePanelRef.current) return;

      const focusableElements = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      );

      if (focusableElements.length === 0) return;

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
  }, [closeMenu, isMenuOpen]);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Navegação principal">
        <Container className="nav-container">
          <Link
            className="logo"
            href={resolveNavigationHref("#inicio", isProjectPage)}
            aria-label="Voltar ao início"
          >
            Arthur Andrade.
          </Link>

          <div className="desktop-navigation">
            <ul className="nav-menu">
              {desktopNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={resolveNavigationHref(item.href, isProjectPage)}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions" aria-label="Ações rápidas">
              <a
                className="nav-action nav-action-muted"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch size={15} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <Link className="nav-action nav-action-primary" href="/curriculo">
                <FileText size={15} aria-hidden="true" />
                Currículo
                <ArrowDownToLine size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </Container>
      </nav>

      <div
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="mobile-nav-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Fechar menu"
          onClick={closeMenu}
        />

        <div
          ref={mobilePanelRef}
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu do portfólio"
        >
          <nav aria-label="Links do portfólio">
            <ul className="mobile-nav-menu">
              {mobileNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={resolveNavigationHref(item.href, isProjectPage)} onClick={closeMenu}>
                    <span>{item.label}</span>
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-actions">
            <span className="mobile-nav-label">Ações</span>
            <a
              className="mobile-nav-action"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <GitBranch size={16} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <Link className="mobile-nav-action" href="/curriculo" onClick={closeMenu}>
              <FileText size={16} aria-hidden="true" />
              Currículo
              <ArrowDownToLine size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
