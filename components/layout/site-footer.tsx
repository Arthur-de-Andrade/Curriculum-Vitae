import { CurrentYear } from "@/components/layout/current-year";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; <CurrentYear /> Arthur Andrade. Todos os direitos reservados.
        </p>
        <p>Desenvolvedor de Software · Java, Spring Boot, SQL &amp; Inteligência Artificial</p>
      </div>
    </footer>
  );
}
