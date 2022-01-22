// const trigger = document.getElementById('toggle');
// const box = document.getElementById('menu');

// toggle.addEventListener('click', function() {
//   box.classList.toggle('active');
// });

const btnMenuOpen = document.querySelector(".burger-icon");
const btnMenuClose = document.querySelector(".close-nav-icon");
const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-link");

btnMenuOpen.addEventListener("click", () => {
  menu.classList.toggle("open");
  btnMenuOpen.style.display = "none";
  btnMenuClose.style.display = "block";
  btnMenuClose.style.color = "#ffffff";
  btnMenuClose.classList.add("icon-animation");
  // btnMenuClose.style.transform = "rotate(0deg)";
  // btnMenuClose.style.transition = "all 5s easy";
  // btnMenuClose.style.animationDelay = "2s";
});

btnMenuClose.addEventListener("click", () => {
  menu.classList.toggle("open");
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

navLink.forEach((item) => {
  item.onmouseenter = () => {
    if (item.classList.contains("from-right")) {
      item.classList.replace("from-right", "from-left");
    }
  };
  item.onmouseleave = () => {
    if (item.classList.contains("from-left")) {
      item.classList.replace("from-left", "from-right");
    }
  };
});