// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.timeline-item, .curso-card, .skill-category, .contato-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Função para abrir o certificado
function abrirCertificado() {
    // Cria um modal para exibir o certificado
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; max-width: 90%; max-height: 90%; overflow: auto; position: relative;">
            <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 10px; background: #e74c3c; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-weight: bold;">×</button>
            <h3 style="color: #2c3e50; margin-bottom: 15px; text-align: center;">Certificado Programador Full Stack - SENAC</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db;">
                <p><strong>Aluno:</strong> ARTHUR DE ANDRADE DE CERQUEIRA LEITE</p>
                <p><strong>Curso:</strong> PROGRAMADOR FULL STACK</p>
                <p><strong>Instituição:</strong> SENAC RIO</p>
                <p><strong>Período:</strong> 26/03/2025 a 11/09/2025</p>
                <p><strong>Carga Horária:</strong> 360 horas</p>
                <p><strong>Ano de Conclusão:</strong> 2025</p>
                <p><strong>Certificado Assinado Digitalmente</strong></p>
            </div>
            <div style="margin-top: 20px; text-align: center;">
                <p style="color: #7f8c8d; font-size: 0.9rem;">
                    <strong>Código de Validação:</strong> RN4CJ-MA8ML-P5DNC-MNBGF
                </p>
                <a href="https://assinador.somosb4.com.br/validate/RN4CJ-MA8ML-P5DNC-MNBGF" 
                   target="_blank" 
                   style="color: #3498db; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 10px;">
                    <i class="fas fa-external-link-alt"></i> Validar Certificado Online
                </a>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #ecf0f1; border-radius: 5px;">
                <p style="margin: 0; color: #2c3e50; font-style: italic;">
                    "Certificado emitido digitalmente pela Faculdade de Tecnologia Senac Rio"
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Fecha o modal clicando fora
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Console welcome message
console.log('🚀 Bem-vindo ao currículo online do Arthur Andrade!');
console.log('💼 Desenvolvedor Full Stack em busca de oportunidades de estágio');
console.log('📧 Contato: arthuracleite@gmail.com');