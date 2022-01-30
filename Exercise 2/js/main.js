const slideContainer = document.querySelector(".slide-container");

const elementStyle = [
  { class: "link-html", color: "#EDACC2", img: '<i class="fab fa-html5"></i>' },
  { class: "link-css", color: "#C3A1D1", img: '<i class="fab fa-css3-alt"></i>' },
  { class: "link-js", color: "#F3E841", img: '<i class="fab fa-js"></i>' },
];

const generateElement = (num) => {
  for (let i = 0; i < num; i++) {
    const slider = document.createElement("div");
    slider.classList.add("slide", "fade");
    slider.innerHTML = elementStyle[i].img;
    slideContainer.appendChild(slider);
    const createSpan = (number) => {
      for (let j = 0; j < number; j++) {
        const bottomBar = document.createElement("span");
        bottomBar.classList.add("bottom-bar");
        slider.appendChild(bottomBar);
      }
    };
    createSpan(3);
  }
};
generateElement(3);

const dotsContainer = document.querySelector("ul.dots-container");

const createLi = (num) => {
  for (let x = 0; x < num; x++) {
    const list = document.createElement("li");
    list.classList.add("dot", elementStyle[x].class);
    dotsContainer.appendChild(list);
  }
};
createLi(3);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("li");

const init = (el) => {
  dots.forEach((item, index) => {
    item.classList.remove("active");
    item.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.style.transform = `translate(${-index * 350}px, 0)`;
        document.body.style.background = elementStyle[index].color;
      });
    });
  });
  dots[el].classList.add("active");
};
init(currentSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    init(index);
    currentSlide = index;
  });
});