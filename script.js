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

const waContactForm = document.getElementById('wa-contact-form');

if (waContactForm) {
  waContactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.getElementById('nama')?.value.trim() || '';
    const merekMobil = document.getElementById('merek-mobil')?.value.trim() || '';
    const pesan = document.getElementById('pesan')?.value.trim() || '';

    const adminPhoneRaw = '081252902876';
    const adminPhone = adminPhoneRaw.startsWith('0') ? `62${adminPhoneRaw.slice(1)}` : adminPhoneRaw;

    const text = [
      'Halo Bengkel Pajajaran Jaya, saya ingin konsultasi.',
      '',
      `Nama: ${nama}`,
      `Merek Mobil: ${merekMobil}`,
      `Keluhan Saya: ${pesan}`,
    ].join('\n');

    const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}
