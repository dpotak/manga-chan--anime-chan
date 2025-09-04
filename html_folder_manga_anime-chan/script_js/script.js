// При клике на любую ссылку с переходом внутри сайта
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Проверяем, что ссылка ведет на другую страницу (не пустая и не #)
    if (href && href !== '#') {
      e.preventDefault(); // отменяем мгновенный переход

      // Добавляем плавное исчезновение
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = 0;

      // Через 500 мс выполняем переход
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});

// Плавное появление страницы при загрузке
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});
