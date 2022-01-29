let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("li");

const init = (n, index) => {
  dots.forEach((item, index) => {
    item.classList.remove("active");
    item.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.style.transform = `translate(${-index * 350}px, 0)`;
      });
      if (index === 0) {
        document.body.style.background = "#EDACC2";
        document.body.style.transition = ".5s";
      }
      if (index === 1) {
        document.body.style.background = "#C3A1D1";
        document.body.style.transition = ".5s";
      }
      if (index === 2) {
        document.body.style.background = "#F3E841";
        document.body.style.transition = ".5s";
      }
    });
  });
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    init(i);
    currentSlide = i;
  });
});
