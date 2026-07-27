document.documentElement.classList.add('js');
const motionTargets = document.querySelectorAll('.hero-copy,.hero-visual,.signal,.section,footer');
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
motionTargets.forEach((target) => { target.classList.add('motion'); observer.observe(target); });

const links = [...document.querySelectorAll('.navlinks a')];
const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => navObserver.observe(section));
