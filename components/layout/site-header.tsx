"use client";

import { useEffect, useState } from "react";

import { navigationItems } from "@/data/portfolio";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegação principal">
        <div className="nav-container">
          <a className="logo" href="#inicio" aria-label="Voltar ao início">
            Arthur Andrade
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <i
              className={`fas fa-${isMenuOpen ? "xmark" : "bars"}`}
              aria-hidden="true"
            />
          </button>

          <ul className={`nav-menu${isMenuOpen ? " is-open" : ""}`} id="nav-menu">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
