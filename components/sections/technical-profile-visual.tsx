export function TechnicalProfileVisual() {
  return (
    <div className="technical-profile-visual" aria-labelledby="technical-profile-title">
      <div className="technical-visual-header">
        <div>
          <span className="technical-visual-kicker">PERFIL TÉCNICO</span>
          <h2 id="technical-profile-title">Mapa de engenharia</h2>
        </div>
        <span className="technical-visual-mode">MAPA DO SISTEMA</span>
      </div>

      <div
        className="architecture-diagram"
        role="img"
        aria-label="Diagrama abstrato de fluxo entre Web, API REST, Java e Spring Boot, SQL e Inteligência Artificial."
      >
        <svg viewBox="0 0 520 300" aria-hidden="true" focusable="false">
          <path d="M260 48 C260 70 260 82 260 101" />
          <path d="M238 145 C190 169 139 191 94 220" />
          <path d="M260 151 L260 220" />
          <path d="M282 145 C330 169 381 191 426 220" />
        </svg>

        <span className="architecture-node architecture-node-web">WEB</span>
        <span className="architecture-node architecture-node-rest">API REST</span>
        <span className="architecture-node architecture-node-java">JAVA / SPRING</span>
        <span className="architecture-node architecture-node-sql">SQL</span>
        <span className="architecture-node architecture-node-ai">IA</span>
      </div>

      <div className="technical-visual-footer" aria-label="Tecnologias representadas">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>SQL</span>
        <span>Inteligência Artificial</span>
      </div>
    </div>
  );
}
