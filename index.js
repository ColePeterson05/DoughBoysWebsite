//Mouse image tracker
const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

console.log("JAVASCRIPT IS WORKING HORRAY 🥲");
'use strict';

const carouselItems = document.querySelectorAll('.carousel-item');
const navItems = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.carousel-nav');

nav.addEventListener('click', function (e) {
    if (!e.target.classList.contains('nav-item')) return;

    const clickedDot = e.target;
    const activeDot = document.querySelector('.nav-item.active');

    if (clickedDot === activeDot) return;

    const newIndex = Array.from(navItems).indexOf(clickedDot);
    const activeIndex = Array.from(navItems).indexOf(activeDot);

    carouselItems[activeIndex].classList.remove('active');
    activeDot.classList.remove('active');

    carouselItems[newIndex].classList.add('active');
    clickedDot.classList.add('active');
});

// Modal: open/close + accessibility
// -------------------------------
(function () {
    const modal = document.getElementById('deal-modal');
    const openBtn = document.getElementById('open-deal');
    const closeTriggers = modal ? modal.querySelectorAll('[data-modal-close]') : [];
    const orderNow = document.getElementById('order-now');

    if (!modal || !openBtn) return;

    function openModal() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        // trap focus to modal (simple)
        const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
        document.addEventListener('keydown', handleKeyDown);
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', handleKeyDown);
        openBtn.focus(); // return focus
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') closeModal();
    }

    // open modal
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    // close when clicking overlay or close buttons
    closeTriggers.forEach(el => {
        el.addEventListener('click', (ev) => {
            ev.preventDefault();
            closeModal();
        });
    });

    // Example action for Order Now (you can hook this to real order flow)
    if (orderNow) {
        orderNow.addEventListener('click', () => {
            // temporarily show confirmation then close modal
            orderNow.textContent = 'Opening Order...';
            setTimeout(() => {
                orderNow.textContent = 'Order Now';
                closeModal();
                // In a real site, redirect to order page or open checkout
                window.location.href = 'Menu.html'; // optional
            }, 700);
        });
    }
})();

// -------------------------------
// Accordion: toggle panels smoothly + accessibility
// -------------------------------
(function () {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const btn = item.querySelector('.accordion-toggle');
        const panel = item.querySelector('.accordion-panel');

        // Set up initial state
        if (!btn || !panel) return;
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
        panel.style.maxHeight = '0px';

        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                // collapse
                btn.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = panel.scrollHeight + 'px'; // set explicit before collapsing (for transition)
                // Allow next tick for transition:
                requestAnimationFrame(() => {
                    panel.style.maxHeight = '0px';
                });
                // after transition, hide to keep semantics clean
                panel.addEventListener('transitionend', function handler() {
                    panel.hidden = true;
                    panel.removeEventListener('transitionend', handler);
                });
            } else {
                // expand
                panel.hidden = false;
                // compute and set maxHeight to allow transition
                const desiredHeight = panel.scrollHeight + 'px';
                // small timeout so browser registers the change
                requestAnimationFrame(() => {
                    btn.setAttribute('aria-expanded', 'true');
                    panel.style.maxHeight = desiredHeight;
                });
            }
        });

        // Keyboard accessibility (Enter/Space)
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
})();