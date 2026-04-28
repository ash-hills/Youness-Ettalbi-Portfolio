const items = document.querySelectorAll('.carousel-item');

items[1].classList.add('active');

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});