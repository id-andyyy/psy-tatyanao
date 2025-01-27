export function animation() {
  const animItems = document.querySelectorAll(".animation");

  if (animItems) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("_is-animated");
        }
      });
    });

    animItems.forEach((item) => observer.observe(item));
  }
}
