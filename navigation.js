export function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

export function initNavigation() {
    document.querySelector('.burger-icon')?.addEventListener('click', toggleMenu);
    document.querySelector('.nav-close')?.addEventListener('click', toggleMenu);
}
