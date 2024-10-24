document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const languageSwitcher = document.getElementById('language-switcher');
    const terminalOutput = document.querySelector('.terminal-output');
    let currentLanguage = 'en';

    const translations = {
        // Traduções...
    };

    function translatePage(language) {
        // Função de tradução...
    }

    languageSwitcher.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        translatePage(currentLanguage);
    });

    // A tradução inicial...
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
