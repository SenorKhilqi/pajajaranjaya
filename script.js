const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);

    if (!clickedInsideNav && navMenu.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
}
