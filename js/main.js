(function () {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    const downloadButton = document.querySelector('.download-toggle');
    const quickNavButtons = Array.from(document.querySelectorAll('.quick-nav__item'));
    const copyButtons = Array.from(document.querySelectorAll('.copy-btn'));
    const toast = document.querySelector('.toast');
    const toastMessage = toast?.querySelector('.toast__message');
    const toastIcon = toast?.querySelector('.toast__icon i');
    const backToTop = document.querySelector('.back-to-top');

    let toastTimeoutId;

    function updateThemeButton(theme) {
        if (!themeToggle || !themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    }

    function applyTheme(theme) {
        body.dataset.theme = theme;
        localStorage.setItem('cv-theme', theme);
        updateThemeButton(theme);
    }

    (function initTheme() {
        const storedTheme = localStorage.getItem('cv-theme');
        if (storedTheme) {
            applyTheme(storedTheme);
            return;
        }
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    })();

    themeToggle?.addEventListener('click', () => {
        const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });

    downloadButton?.addEventListener('click', () => {
        window.print();
    });

    function setActiveQuickNav(targetButton) {
        quickNavButtons.forEach((btn) => btn.classList.toggle('is-active', btn === targetButton));
    }

    quickNavButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetSelector = button.dataset.target;
            const target = targetSelector ? document.querySelector(targetSelector) : null;
            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveQuickNav(button);
        });
    });

    if (quickNavButtons.length) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const button = quickNavButtons.find((btn) => btn.dataset.target === `#${entry.target.id}`);
                if (button) setActiveQuickNav(button);
            });
        }, {
            threshold: 0.4,
            rootMargin: '-80px 0px -55% 0px',
        });

        quickNavButtons.forEach((btn) => {
            const target = btn.dataset.target ? document.querySelector(btn.dataset.target) : null;
            if (target) sectionObserver.observe(target);
        });

        if (quickNavButtons[0]) {
            setActiveQuickNav(quickNavButtons[0]);
        }
    }

    function showToast(message, iconClass = 'fa-check') {
        if (!toast || !toastMessage || !toastIcon) return;
        toast.hidden = false;
        toastMessage.textContent = message;
        toastIcon.className = iconClass;
        toast.classList.add('is-visible');
        clearTimeout(toastTimeoutId);
        toastTimeoutId = window.setTimeout(() => {
            toast.classList.remove('is-visible');
            window.setTimeout(() => {
                toast.hidden = true;
            }, 220);
        }, 2800);
    }

    copyButtons.forEach((button) => {
        button.addEventListener('click', async () => {
            const value = button.dataset.copy;
            if (!value) return;
            const labelSource = button.closest('li')?.querySelector('[data-label]');
            const label = labelSource?.dataset?.label || (labelSource?.textContent?.trim() ?? 'Valor');
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(value);
                    showToast(`${label} copiado!`, 'fa-check');
                } else {
                    showToast('Não foi possível copiar. Tente manualmente.', 'fa-exclamation-triangle');
                }
            } catch (error) {
                console.error('Erro ao copiar para a área de transferência:', error);
                showToast('Não foi possível copiar. Tente manualmente.', 'fa-exclamation-triangle');
            }
        });
    });

    if (backToTop) {
        const toggleBackToTop = () => {
            const shouldShow = window.scrollY > 360;
            backToTop.classList.toggle('is-visible', shouldShow);
        };

        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();