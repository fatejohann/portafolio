/* ════════════════════════════════
   main.js
   Menú hamburguesa + Scroll reveal
   ════════════════════════════════ */

/* ── Menú hamburguesa ── */
function toggleMenu(btn) {
  var menu = document.getElementById('mobile-menu');
  var open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

function closeMenu() {
  var menu = document.getElementById('mobile-menu');
  var btn  = document.querySelector('.nav-hamburger');
  menu.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

/* Cierra el menú al hacer clic fuera de él */
document.addEventListener('click', function (e) {
  var menu = document.getElementById('mobile-menu');
  var btn  = document.querySelector('.nav-hamburger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    closeMenu();
  }
});

/* ── Scroll reveal ── */
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});
