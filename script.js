document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const languageSwitcher = document.getElementById('language-switcher');
    const terminalOutput = document.querySelector('.terminal-output');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    let currentLanguage = 'en';
    let terminalText = "Welcome to my portfolio. I am Matheus Felipe da Silva Marciano, a Cybersecurity IT Analyst with a focus on protecting and securing information systems. Explore my projects, skills, and contact information to learn more about my professional journey.";
    let index = 0;

    const translations = {
        "nav-about": { en: "About Me", pt: "Sobre Mim" },
        "nav-projects": { en: "Projects", pt: "Projetos" },
        "nav-skills": { en: "Skills", pt: "Habilidades" },
        "nav-experience": { en: "Experience", pt: "Experiência Profissional" },
        "nav-certificates": { en: "Certificates", pt: "Certificados" },
        "nav-contact": { en: "Contact", pt: "Contato" },
        "about-title": { en: "About Me", pt: "Sobre Mim" },
        "projects-title": { en: "Projects", pt: "Projetos" },
        "skills-title": { en: "Skills", pt: "Habilidades" },
        "contact-title": { en: "Contact", pt: "Contato" },
        "footer": { en: "© 2023 Matheus Felipe da Silva Marciano. All rights reserved.", pt: "© 2023 Matheus Felipe da Silva Marciano. Todos os direitos reservados." }
    };

    function translatePage(language) {
        Object.keys(translations).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(el => {
                el.textContent = translations[key][language];
            });
        });
    }

    function resetTerminal() {
        terminalOutput.textContent = ''; // Limpa a saída do terminal
        index = 0; // Reinicia o índice
        typeText(); // Começa a digitar o texto do terminal novamente
    }

    function typeText() {
        if (index < terminalText.length) {
            terminalOutput.textContent += terminalText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    languageSwitcher.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        translatePage(currentLanguage);
        terminalText = currentLanguage === 'en' 
            ? "Welcome to my portfolio. I am Matheus Felipe da Silva Marciano, a Cybersecurity IT Analyst with a focus on protecting and securing information systems. Explore my projects, skills, and contact information to learn more about my professional journey."
            : "Bem-vindo ao meu portfólio. Eu sou Matheus Felipe da Silva Marciano, um Analista de TI em Cibersegurança com foco em proteger e garantir a segurança dos sistemas de informação. Explore meus projetos, habilidades e informações de contato para saber mais sobre minha jornada profissional.";
        resetTerminal(); // Reinicia o terminal após a troca de idioma
    });

    // A tradução inicial
    translatePage(currentLanguage);
    resetTerminal(); // Inicia o terminal na primeira carga

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Glitch Effect
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            el.classList.remove('active');
        });
    });

    // Modal Functionality
    const projectButtons = document.querySelectorAll('.project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalTitle.textContent = button.getAttribute('data-title');
            modalDescription.textContent = button.getAttribute('data-desc');
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
