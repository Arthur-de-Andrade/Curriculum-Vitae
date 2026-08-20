import { CurrentYear } from "@/components/layout/current-year";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="footer">
      <Container>
        <p>
          &copy; <CurrentYear /> Arthur Andrade. Todos os direitos reservados.
        </p>
        <p>Desenvolvedor de Software · Java, Spring Boot, SQL &amp; Inteligência Artificial</p>
      </Container>
    </footer>
  );
}
