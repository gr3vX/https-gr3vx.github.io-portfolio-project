document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.header__nav', {
        y: -1000,
        duration: 1,
    });

    gsap.from('.header__logo', {
        x: -1000,
        duration: 1,
    });

    gsap.from('.header__contacts', {
        x: 1000,
        duration: 1,
    });

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    // Crea lo scroll smoother fluido
    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.1,
        effects: true,
    });

    document
        .querySelectorAll([
            '.about__content',
            '.studies__container',
            '.projects__container',
            '.contacts__container',
        ])
        .forEach((section) => {
            gsap.fromTo(
                section,
                { x: 1000, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    ease: 'power3in',
                    scrollTrigger: {
                        trigger: section,
                        start: '50% bottom',
                        end: '50% center',
                        scrub: true,
                        markers: false,
                    },
                }
            );
        });

    document.querySelectorAll('.check-list__item').forEach((item) => {
        const icon = item.querySelector('.icon-check');

        if (icon) {
            gsap.to(icon, {
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 40%',
                    toggleActions: 'play none none none',
                    scrub: true,
                },
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Previene il salto immediato
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);

            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetElement, offsetY: 0 }, // offsetY per eventuale header fisso
                    ease: 'power2.out',
                });
            }
        });
    });

    window.addEventListener('load', () => {
        // Anima la rotazione infinita del loader
        gsap.to('.loader', {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: 'linear',
        });

        // Dopo 2 secondi (simulazione caricamento), fai sparire il preloader
        gsap.to('#preloader', {
            delay: 2,
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.getElementById('preloader').style.display = 'none';
            },
        });
    });
});
