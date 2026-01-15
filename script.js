// =============================================
// MENU HAMBURGUESA
// =============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer click en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cerrar el menú al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Si el menú está abierto y se hace scroll, cerrarlo
    if (navMenu.classList.contains('active') && Math.abs(currentScroll - lastScroll) > 50) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    lastScroll = currentScroll;
});

// =============================================
// FAQ ACCORDION
// =============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Cerrar otros items abiertos
        const isActive = item.classList.contains('active');

        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle del item actual
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// =============================================
// SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Solo aplicar smooth scroll si no es solo "#"
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// =============================================
// HEADER SCROLL EFFECT
// =============================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 242, 234, 0.1)';
    }
});

// =============================================
// ANIMACIONES AL SCROLL (INTERSECTION OBSERVER)
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.beneficio-card, .step, .testimonio-card, .plan-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
