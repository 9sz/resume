document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const languageSwitcher = document.getElementById('language-switcher');
    const terminalOutput = document.querySelector('.terminal-output');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    let currentLanguage = 'en';

    const translations = {
        "en": {
            "title": "Cybersecurity IT Analyst",
            "nav-about": "About Me",
            "nav-projects": "Projects",
            "nav-skills": "Skills",
            "nav-contact": "Contact",
            "about-title": "About Me",
            "projects-title": "Projects",
            "project-one": "Project One",
            "project-one-desc": "Detailed description of Project One with more technical insights.",
            "project-two": "Project Two",
            "project-two-desc": "Detailed description of Project Two with more technical insights.",
            "skills-title": "Skills",
            "contact-title": "Contact",
            "contact-email": "Email: <a href='mailto:email@example.com'>email@example.com</a>",
            "contact-linkedin": "LinkedIn: <a href='https://www.linkedin.com/in/yourprofile'>Your LinkedIn</a>",
            "footer": "© 2023 Matheus Felipe da Silva Marciano. All rights reserved."
        },
        "pt": {
            "title": "Analista de TI em Cibersegurança",
            "nav-about": "Sobre Mim",
            "nav-projects": "Projetos",
            "nav-skills": "Habilidades",
            "nav-contact": "Contato",
            "about-title": "Sobre Mim",
            "projects-title": "Projetos",
            "project-one": "Projeto Um",
            "project-one-desc": "Descrição detalhada do Projeto Um com mais informações técnicas.",
            "project-two": "Projeto Dois",
            "project-two-desc": "Descrição detalhada do Projeto Dois com mais informações técnicas.",
            "skills-title": "Habilidades",
            "contact-title": "Contato",
            "contact-email": "Email: <a href='mailto:email@example.com'>email@example.com</a>",
            "contact-linkedin": "LinkedIn: <a href='https://www.linkedin.com/in/yourprofile'>Seu LinkedIn</a>",
            "footer": "© 2023 Matheus Felipe da Silva Marciano. Todos os direitos reservados."
        }
    };

    function translatePage(language) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations[language][key];
        });
        terminalOutput.textContent = translations[language]['terminalText'];
    }

    languageSwitcher.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        translatePage(currentLanguage);
    });

    // A tradução inicial
    translatePage(currentLanguage);

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

    // Terminal Simulation
    const terminalText = "Welcome to my portfolio. I am Matheus Felipe da Silva Marciano, a Cybersecurity IT Analyst. Explore my projects and skills.";
    let index = 0;

    function typeText() {
        if (index < terminalText.length) {
            terminalOutput.textContent += terminalText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(() => {
        terminalOutput.textContent = '';
        typeText();
    }, 1000);

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

    // Modal for Projects
    document.querySelectorAll('.project h4').forEach(project => {
        project.addEventListener('click', () => {
            const title = project.innerText;
            const description = project.nextElementSibling.innerText;
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-description').innerText = description;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Animate Skills
    function animateSkills() {
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute('data-skill') + '%';
            skill.classList.add('code-flow');
        });
    }

    // Initialize Skills Animation
    animateSkills();
});
