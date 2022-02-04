const moveRight = document.querySelector(".move-right");
const moveLeft = document.querySelector(".move-left");
const swipe = document.querySelector(".swipe");
const gradientBlock = document.querySelector(".gradient-block");
const welcomeBlock = document.querySelector(".welcome-block");
const helloBlock = document.querySelector(".hello-block");
const signInBlock = document.querySelector(".sign-in-block");
const createAccountBlock = document.querySelector(".create-account-block");

moveRight.addEventListener("click", () => {
  swipe.style.right = "0";
  swipe.style.left = "400px";
  gradientBlock.style.left = "-400px";
  welcomeBlock.style.transform = "translateY(-200px)";
  helloBlock.style.transform = "translateY(0px)";
  signInBlock.style.transform = "translateY(0px)";
  createAccountBlock.style.transform = "translateX(-400px)";
});

moveLeft.addEventListener("click", () => {
  swipe.style.left = "0";
  swipe.style.right = "400px";
  gradientBlock.style.left = "0";
  welcomeBlock.style.transform = "translateY(0px)";
  helloBlock.style.transform = "translateY(200px)";
  signInBlock.style.transform = "translateY(400px)";
  createAccountBlock.style.transform = "translateX(0px)";
});

document.onclick = () => applyCursorRippleEffect(event);

const applyCursorRippleEffect = (e) => {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;

  ripple.style.animation = "ripple-effect .2s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
};
