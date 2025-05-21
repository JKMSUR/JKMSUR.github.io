document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#08f7fe" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#08f7fe", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Efecto typewriter
    const phrases = [
        "Expertos en soluciones premium",
        "Tecnología de vanguardia",
        "Estilo y elegancia",
        "Calidad excepcional"
    ];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typewriterElement = document.querySelector('.slogan-typewriter');
    
    function typeWriter() {
        const text = phrases[currentPhrase];
        
        if (isDeleting) {
            typewriterElement.textContent = text.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typewriterElement.textContent = text.substring(0, currentChar + 1);
            currentChar++;
        }
        
        if (!isDeleting && currentChar === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            const speed = isDeleting ? 100 : 150;
            setTimeout(typeWriter, speed);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    // Efecto de cursor intermitente
    setInterval(() => {
        const cursor = document.querySelector('.cursor');
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
});