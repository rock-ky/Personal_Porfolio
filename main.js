document.addEventListener("DOMContentLoaded", () => {
const fadeEls = document.querySelectorAll(".animate-fade");

// Respect reduced motion (accessibility)
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
fadeEls.forEach(el => el.classList.add('visible'));
return;
}

const fadeInOnScroll = () => {
fadeEls.forEach(el => {
const top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 100) { el.classList.add("visible"); } }); }; let ticking=false; window.addEventListener("scroll", ()=> {
  if (!ticking) {
  window.requestAnimationFrame(() => {
  fadeInOnScroll();
  ticking = false;
  });
  ticking = true;
  }
  });

  fadeInOnScroll(); // Initial check
  });