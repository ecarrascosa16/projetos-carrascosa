
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-celular');

  toggleBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
    toggleBtn.classList.toggle('ativo');
  });
});