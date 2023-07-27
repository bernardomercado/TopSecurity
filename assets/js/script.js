// Menú hamburguesa
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
