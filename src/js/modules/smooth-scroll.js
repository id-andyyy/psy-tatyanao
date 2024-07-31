function smoothScroll() {
  const headerHeight = document.querySelector(".header").offsetHeight + 19 * 2;

  document.addEventListener('click', e => {
    if (e.target.hash) {
      e.preventDefault();

      const targetElement = document.querySelector(e.target.hash);

      if (targetElement) {
        const targetOffset = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    }
  });
}

export default smoothScroll;