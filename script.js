const items = document.querySelectorAll('.carousel-item');

items[1].classList.add('active');

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
