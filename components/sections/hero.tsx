export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-text">
          <span className="eyebrow">
            <i className="fas fa-circle-check" aria-hidden="true" /> Em atuação
            profissional
          </span>
          <h1>Arthur de Andrade</h1>
          <h2>Desenvolvedor de Software</h2>
          <p className="hero-highlight">Java, Spring Boot, SQL &amp; Inteligência Artificial</p>
          <p className="hero-description">
            Construo e evoluo aplicações web corporativas, unindo engenharia de software,
            dados e automação para resolver problemas reais.
          </p>
          <div className="hero-buttons">
            <a href="#experiencia" className="btn btn-primary">
              Conheça minha experiência <i className="fas fa-arrow-down" aria-hidden="true" />
            </a>
            <a href="#curriculo" className="btn btn-secondary">
              Ver currículo completo <i className="fas fa-file-lines" aria-hidden="true" />
            </a>
            <a href="#contato" className="btn btn-secondary">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="hero-profile-card" aria-label="Resumo profissional">
          <div className="profile-icon">
            <i className="fas fa-code" aria-hidden="true" />
          </div>
          <p className="profile-label">Foco profissional</p>
          <h3>Full Stack &amp; Backend</h3>
          <p>Aplicações corporativas, APIs REST, bancos de dados, automação e soluções apoiadas por IA.</p>
          <div className="profile-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
