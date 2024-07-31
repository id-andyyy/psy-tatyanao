function burgerMenu() {
  const bodyNode = document.body;
  const menuBodyNode = document.querySelector('.menu__body');
  const menuIconNode = document.querySelector('.menu__icon');

  if (menuBodyNode && menuIconNode) {
    menuIconNode.addEventListener('click', () => {
      menuBodyNode.classList.toggle('burger-active');
      menuIconNode.classList.toggle('burger-active');
      bodyNode.classList.toggle('lock');
    });

    menuBodyNode.querySelectorAll('.menu-list__link').forEach(link => {
      link.addEventListener('click', () => {
        menuBodyNode.classList.remove('burger-active');
        menuIconNode.classList.remove('burger-active');
        bodyNode.classList.remove('lock');
      });
    });
  }
}

export default burgerMenu;