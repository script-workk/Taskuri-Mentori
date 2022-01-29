const list = document.querySelectorAll("li");
const slider = document.querySelectorAll(".slider-innerContainer div");

// const changeSlider = (ev) => {
//   list.forEach((item, index) => {
//     item.addEventListener('click', (e) => {
//       if (index === 0) {
//         document.body.style.background = "#EDACC2";
//         document.body.style.transition = ".5s";
//       }
//       if (index === 1) {
//         document.body.style.background = "#C3A1D1";
//         document.body.style.transition = ".5s";
//         slider[1];
//       }
//       if (index === 2) {
//         document.body.style.background = "#F3E841";
//         document.body.style.transition = ".5s";
//       }
//     })
//   });
// }
// changeSlider();

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("li");

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
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

const init = (n, index) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  // slides[n].style.left = -index * 100 + "%";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    init(i);
    currentSlide = i;
  });
});

// document.body.addEventListener('DOMContentLoaded', bootstrap);

// function bootstrap() {
//     function slider(slider) {
//       var sliderInnerContainer = slider.getElementsByClassName("slider-innerContainer")[0];
//       var sliderDots = slider.getElementsByClassName("slider-dots")[0];

//       function drawSlider(index) {
//         var count = sliderInnerContainer.childElementCount;
//         var dots = "";
//         for (var i = 0; i < count; i++) {
//           i === 0 ? dots +=
//           '<li class="link-html" data-index="' + i + '">' + (i === index ? '<i class="fab fa-html5 checked-list"></i>' : '<i class="fab fa-html5"></i>') + "<li>" :
//           i === 1 ? dots +=
//           '<li class="link-html" data-index="' + i + '">' + (i === index ? '<i class="fab fa-css3-alt checked-list"></i>' : '<i class="fab fa-css3-alt"></i>') + "</li>" :
//           i === 2 ? dots +=
//           '<li class="link-html" data-index="' + i + '">' + (i === index ? '<i class="fab fa-js checked-list"></i>' : '<i class="fab fa-js"></i>') + "</li>" : null;
//             // '<li class="link-html" data-index="' + i + '">' + <i class="fab fa-html5"></i></li>

//             // i === 0 ? dots +=
//             // '<li class="link-html checked-list" data-index="' + i + '"></li>' :
//             // i === 1 ? dots +=
//             // '<li class="link-css checked-list" data-index="' + i + '"></li>' :
//             // i === 2 ? dots +=
//             // '<li class="link-js checked-list" data-index="' + i + '"></li>' : null;

//         }
//         sliderInnerContainer.style.left = -index * 100 + "%";
//         sliderDots.innerHTML = dots;
//       }

//       sliderDots.addEventListener("click", function(e) {
//         if (e.target.parentElement === sliderDots) {
//           drawSlider(parseInt(e.target.dataset.index, 10));
//         }
//       });
//       drawSlider(0);
//     }

//     var containers = document.getElementsByClassName("aplication-content");
//     for (var i = 0; i < containers.length; i++) {
//       slider(containers[i]);
//     }
//   }


// https://colorlib.com/preview/theme/seogo/

// const buttonsWrapper = document.querySelector(".map");
// const slides = document.querySelector(".inner");

// buttonsWrapper.addEventListener("click", e => {
//   if (e.target.nodeName === "BUTTON") {
//     Array.from(buttonsWrapper.children).forEach(item =>
//       item.classList.remove("active")
//     );
//     if (e.target.classList.contains("first")) {
//       slides.style.transform = "translateX(-0%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains("second")) {
//       slides.style.transform = "translateX(-33.33333333333333%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains('third')){
//       slides.style.transform = 'translatex(-66.6666666667%)';
//       e.target.classList.add('active');
//     }
//   }
// });
