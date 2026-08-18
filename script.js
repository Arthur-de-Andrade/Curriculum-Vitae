const navMenu = document.getElementById('nav-menu');
const menuToggle = document.querySelector('.menu-toggle');

function setMenuState(isOpen) {
    if (!navMenu || !menuToggle) return;

    navMenu.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuToggle.innerHTML = `<i class="fas fa-${isOpen ? 'xmark' : 'bars'}" aria-hidden="true"></i>`;
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        setMenuState(!navMenu.classList.contains('is-open'));
    });
}

document.querySelectorAll('.nav-menu a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => setMenuState(false));
});

// Mantém a navegação suave para links internos.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const target = document.querySelector(anchor.getAttribute('href'));

        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Descrições rápidas das competências.
const skillModal = document.getElementById('skillModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');

function fecharSkillModal() {
    if (!skillModal) return;

    skillModal.classList.remove('is-open');
    skillModal.setAttribute('aria-hidden', 'true');
}

function abrirSkillModal(skillTag) {
    if (!skillModal || !modalTitle || !modalDescription) return;

    modalTitle.textContent = skillTag.textContent.trim();
    modalDescription.textContent = skillTag.dataset.description || 'Conhecimento aplicado ao desenvolvimento de software.';
    skillModal.classList.add('is-open');
    skillModal.setAttribute('aria-hidden', 'false');
    closeModal?.focus();
}

document.querySelectorAll('.skill-tag').forEach((skillTag) => {
    skillTag.addEventListener('click', () => abrirSkillModal(skillTag));
});

closeModal?.addEventListener('click', fecharSkillModal);

skillModal?.addEventListener('click', (event) => {
    if (event.target === skillModal) fecharSkillModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fecharSkillModal();
        setMenuState(false);
    }
});

function enviarEmail() {
    const email = 'arthuracleite@gmail.com';
    const subject = encodeURIComponent('Oportunidade ou contato profissional - Arthur Andrade');
    const body = encodeURIComponent('Olá Arthur, encontrei seu portfólio online e gostaria de conversar.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function abrirGoogleForms() {
    window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSdUtRSLYmkLKBQd6K1L6uoUTWhuSLrtrZR_woCEu0N5BdN92A/viewform?usp=header',
        '_blank',
        'noopener,noreferrer'
    );
}

const currentYear = document.getElementById('currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();
