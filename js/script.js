document.addEventListener('DOMContentLoaded', () => {
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    const initAccordion = () => {
        const faqItems = document.querySelectorAll('.faqItem');
        
        faqItems.forEach(item => {
            const btn = item.querySelector('.faqBtn');
            
            btn.addEventListener('click', () => {
                const isOpen = item.getAttribute('data-open') === 'true';
                item.setAttribute('data-open', !isOpen);
                btn.setAttribute('aria-expanded', !isOpen);
            });
        });
    };

    const initMobileMenu = () => {
        const header = document.querySelector('.header');
        const burger = document.querySelector('.header__burger');
        const drawer = document.querySelector('.header__drawer');

        if (!burger || !header) return;

        const toggleMenu = (forceClose = false) => {
            const isNowOpen = forceClose ? false : header.classList.toggle('is-open');
            if (forceClose) header.classList.remove('is-open');
            
            burger.setAttribute('aria-expanded', isNowOpen);
            if (drawer) drawer.setAttribute('aria-hidden', !isNowOpen);
        };

        burger.addEventListener('click', () => toggleMenu());

        header.querySelectorAll('.header__drawer a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(true));
        });
    };

    initSmoothScroll();
    initAccordion();
    initMobileMenu();
});
