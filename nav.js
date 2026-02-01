// ===== Mobile Hamburger Menu =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');

  // accessibility attributes
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when link is clicked (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
