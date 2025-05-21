document.addEventListener('DOMContentLoaded', function() {
    // Efecto parallax para el fondo
    const fondoParallax = document.getElementById('fondo-parallax');
    const capas = document.querySelectorAll('.capa');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        capas.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const yPos = -(scrollPosition * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
    
    // Animación avanzada para la vaca
    const vaca = document.querySelector('.vaca-epica');
    let angle = 0;
    
    setInterval(() => {
        angle += 0.5;
        const floatY = Math.sin(angle * Math.PI / 180) * 10;
        vaca.style.transform = `translateX(-50%) translateY(${floatY}px)`;
        
        // Mover orejas y cuernos
        const cuernoIzq = document.querySelector('.cuerno.izquierdo');
        const cuernoDer = document.querySelector('.cuerno.derecho');
        const cabeza = document.querySelector('.cabeza');
        
        cuernoIzq.style.transform = `rotate(${-30 + Math.sin(angle * Math.PI / 90) * 5}deg)`;
        cuernoDer.style.transform = `rotate(${30 + Math.sin(angle * Math.PI / 90) * 5}deg)`;
        cabeza.style.transform = `rotate(${Math.sin(angle * Math.PI / 180) * 3}deg)`;
    }, 50);
    
    // Efecto de aparición para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.producto-epico, .contacto-epico').forEach(section => {
        observer.observe(section);
    });
    
    // Efecto hover épico para productos
    const productos = document.querySelectorAll('.item-epico');
    
    productos.forEach(producto => {
        producto.addEventListener('mouseenter', function() {
            const marco = this.querySelector('.marco-foto');
            const img = this.querySelector('.foto-producto');
            
            marco.style.transform = 'rotate(2deg)';
            img.style.transform = 'scale(1.03)';
            
            // Efecto de luz dorada
            const luz = document.createElement('div');
            luz.className = 'efecto-luz';
            this.appendChild(luz);
            
            setTimeout(() => {
                luz.style.opacity = '0.5';
                luz.style.transform = 'scale(1.5)';
            }, 10);
            
            setTimeout(() => {
                luz.remove();
            }, 500);
        });
        
        producto.addEventListener('mouseleave', function() {
            const marco = this.querySelector('.marco-foto');
            const img = this.querySelector('.foto-producto');
            
            marco.style.transform = 'rotate(0deg)';
            img.style.transform = 'scale(1)';
        });
    });
    
    // Formulario interactivo
    const formPedido = document.getElementById('formPedido');
    
    if (formPedido) {
        formPedido