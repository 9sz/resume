document.addEventListener('DOMContentLoaded', () =&gt; {
    const navLinks = document.querySelectorAll('nav ul li a');
    const languageSwitcher = document.getElementById('language-switcher');
    const terminalOutput = document.querySelector('.terminal-output');
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
            "project-one-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "project-two": "Project Two",
            "project-two-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "skills-title": "Skills",
            "skill-network-security": "Network Security",
            "skill-penetration-testing": "Penetration Testing",
            "skill-incident-response": "Incident Response",
            "skill-encryption-techniques": "Encryption Techniques",
            "contact-title": "Contact",
            "contact-email": "Email: <a href="mailto:email@example.com">email@example.com</a>",
            "contact-linkedin": "LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">Your LinkedIn</a>",
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
            "project-one-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "project-two": "Projeto Dois",
            "project-two-desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "skills-title": "Habilidades",
            "skill-network-security": "Segurança de Rede",
            "skill-penetration-testing": "Teste de Penetração",
            "skill-incident-response": "Resposta a Incidentes",
            "skill-encryption-techniques": "Técnicas de Criptografia",
            "contact-title": "Contato",
            "contact-email": "Email: <a href="mailto:email@example.com">email@example.com</a>",
            "contact-linkedin": "LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">Seu LinkedIn</a>",
            "footer": "© 2023 Matheus Felipe da Silva Marciano. Todos os direitos reservados."
        }
    };

    function translatePage(language) {
        document.querySelectorAll('[data-translate]').forEach(element =&gt; {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations[language][key];
        });

        // Update terminal text
        const terminalText = language === 'en' 
            ? "Welcome to my portfolio. I am Matheus Felipe da Silva Marciano, a Cybersecurity IT Analyst with a focus on protecting and securing information systems. Explore my projects, skills, and contact information to learn more about my professional journey."
            : "Bem-vindo ao meu portfólio. Eu sou Matheus Felipe da Silva Marciano, um Analista de TI em Cibersegurança com foco em proteger e garantir a segurança dos sistemas de informação. Explore meus projetos, habilidades e informações de contato para saber mais sobre minha jornada profissional.";
        terminalOutput.textContent = '';
        let index = 0;
        function typeText() {
            if (index &lt; terminalText.length) {
                terminalOutput.textContent += terminalText.charAt(index);
                index++;
                setTimeout(typeText, 50);
            }
        }
        typeText();
    }

    languageSwitcher.addEventListener('click', () =&gt; {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        translatePage(currentLanguage);
    });

    // Initial translation
    translatePage(currentLanguage);

    navLinks.forEach(link =&gt; {
        link.addEventListener('click', (e) =&gt; {
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
    const terminalText = "Welcome to my portfolio. I am Matheus Felipe da Silva Marciano, a Cybersecurity IT Analyst with a focus on protecting and securing information systems. Explore my projects, skills, and contact information to learn more about my professional journey.";
    let index = 0;

    function typeText() {
        if (index &lt; terminalText.length) {
            terminalOutput.textContent += terminalText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(() =&gt; {
        terminalOutput.textContent = '';
        typeText();
    }, 1000);

    // Glitch Effect
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(el =&gt; {
        el.addEventListener('mouseenter', () =&gt; {
            el.classList.add('active');
        });

        el.addEventListener('mouseleave', () =&gt; {
            el.classList.remove('active');
        });
    });
});