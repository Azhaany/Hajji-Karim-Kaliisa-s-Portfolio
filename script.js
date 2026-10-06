/**
 * Hajji Karim Kaliisa — Executive Portfolio
 * Interactive Functionality & Theme Controller
 */

(function () {
    'use strict';

    // ==========================================
    // THEME MANAGEMENT (NEUMORPHIC LIGHT / DARK)
    // ==========================================
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Check stored preference or system default
    const storedTheme = localStorage.getItem('kk_portfolio_theme');
    if (storedTheme) {
        htmlEl.setAttribute('data-theme', storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlEl.setAttribute('data-theme', 'dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('kk_portfolio_theme', newTheme);
        });
    }

    // ==========================================
    // DYNAMIC CURRENT YEAR
    // ==========================================
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // SCROLL HANDLERS & BACK TO TOP
    // ==========================================
    const backToTop = document.getElementById('backToTop');
    const navLinksContainer = document.getElementById('navLinks');
    const navLinks = navLinksContainer ? navLinksContainer.querySelectorAll('a') : [];
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Back to top visibility
        if (backToTop) {
            if (scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        // Scrollspy active state for navigation links
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                if (targetId === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // MOBILE NAVIGATION DRAWER (SMOOTH & FAST)
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    function openMobileMenu() {
        if (!navLinksContainer) return;
        navLinksContainer.classList.add('open');
        if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        if (!navLinksContainer) return;
        navLinksContainer.classList.remove('open');
        if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (navLinksContainer && navLinksContainer.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeMobileMenu);
    }

    if (mobileDrawerOverlay) {
        mobileDrawerOverlay.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer && navLinksContainer.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinksContainer && navLinksContainer.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    // Smooth scrolling offset for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = 85;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initial scroll calculation
    handleScroll();
})();
