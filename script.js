document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER & REVEAL ---
    const preloader = document.querySelector('.preloader');
    const hiddenElements = document.querySelectorAll('.hidden-on-load');

    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            hiddenElements.forEach(el => {
                el.classList.remove('hidden-on-load');
                el.classList.add('reveal');
            });
        }, 300);
    }, 1500);

    // --- 2. PARALLAX TILT EFFECT (Desktop Only) ---
    const heroSection = document.querySelector('.hero');
    const shape = document.querySelector('.poster-shape');
    const image = document.querySelector('.image-wrapper');
    const sticker = document.querySelector('.floating-sticker');

    if (window.innerWidth > 900) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            shape.style.transform = `rotate(-3deg) translate(${x * 0.5}px, ${y * 0.5}px)`;
            image.style.transform = `translate(${-x}px, ${-y}px)`;
            sticker.style.transform = `rotate(-10deg) translate(${x * 2}px, ${y * 2}px)`;
        });
    }
});
