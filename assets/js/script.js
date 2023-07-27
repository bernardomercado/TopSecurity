// MENU HAMBURGUESA
(function() {
  const listElements = document.querySelectorAll('.servicios-item');
  const list = document.querySelector('.navegador__links');
  const menu = document.querySelector('.navegador__hamburguesa');
  let isSmallScreen = window.innerWidth <= 768;

  const toggleSubMenu = (element) => {
    const subMenu = element.children[1];
    const height = subMenu.clientHeight === 0 ? subMenu.scrollHeight : 0;
    subMenu.style.height = `${height}px`;
    element.classList.toggle('menu__item--active', height > 0);
  };

  const resetSubMenuStyles = () => {
    listElements.forEach(element => {
      const subMenu = element.children[1];
      subMenu.style.height = '';
      element.classList.remove('menu__item--active');
    });
  };

  const clickHandler = (event) => {
    toggleSubMenu(event.currentTarget);
  };

  const handleResize = () => {
    const currentIsSmallScreen = window.innerWidth <= 768;
    if (isSmallScreen !== currentIsSmallScreen) {
      isSmallScreen = currentIsSmallScreen;
      if (isSmallScreen) {
        listElements.forEach(element => element.addEventListener('click', clickHandler));
      } else {
        listElements.forEach(element => element.removeEventListener('click', clickHandler));
        resetSubMenuStyles();
        list.classList.remove('menu__links--show');
      }
    }
  };

  window.addEventListener('resize', handleResize);

  listElements.forEach(element => element.addEventListener('click', clickHandler));

  menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));
})();


// CLICK EN LOGO E INICIO - DESLIZAR HACIA ARRIBA - NO RECARGAR LA PAGINA
// Función reutilizable para el desplazamiento suave hacia arriba
function scrollToTop(event) {
  // Prevenir la acción predeterminada del enlace (no se recargará la página)
  event.preventDefault();

  // Desplazarse hacia arriba suavemente utilizando smooth scroll
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el enlace del logo por su clase
  const logoLink = document.querySelector(".navegador__logo__link");

  // Agregar un evento de clic al enlace del logo
  logoLink.addEventListener("click", scrollToTop);

  // Obtener el enlace "INICIO" por su ID
  const inicioLink = document.getElementById("inicioLink");

  // Agregar un evento de clic al enlace "INICIO"
  inicioLink.addEventListener("click", scrollToTop);
});