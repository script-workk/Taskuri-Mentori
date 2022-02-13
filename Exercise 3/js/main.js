const moveRight = document.querySelector(".move-right");
const moveLeft = document.querySelector(".move-left");
const swipe = document.querySelector(".swipe");
const gradientBlock = document.querySelector(".gradient-block");
const welcomeBlock = document.querySelector(".welcome-block");
const helloBlock = document.querySelector(".hello-block");
const signInBlock = document.querySelector(".sign-in-block");
const createAccountBlock = document.querySelector(".create-account-block");
const inputCreate = document.querySelectorAll("#create_user input");
const btnSign = document.querySelector("#sign");
const btnLogIn = document.querySelector("#login");
const createName = document.querySelector("#createName");
const createMail = document.querySelector("#createMail");
const createPass = document.querySelector("#createPass");
const alert = document.querySelector(".alert");
const alertMesage = document.querySelector(".alert-mesage");
const okBtn = document.querySelector(".ok");
const signMail = document.querySelector("#signMail");
const signPass = document.querySelector("#signPass");
const errorMessage = document.querySelectorAll(".error-message");

const users = [];
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const animationLoginParams = {
  swipeRight: "400px",
  swipeLeft: "0",
  gradientBlockLeft: "0",
  welcomeBlockTransform: "translateY(0px)",
  helloBlockTransform: "translateY(200px)",
  signInBlockTransform: "translateY(400px)",
  createAccountBlockTransform: "translateX(0px)",
};

const animationRegisterParams = {
  swipeRight: "0",
  swipeLeft: "400px",
  gradientBlockLeft: "-400px",
  welcomeBlockTransform: "translateY(-200px)",
  helloBlockTransform: "translateY(0px)",
  signInBlockTransform: "translateY(0px)",
  createAccountBlockTransform: "translateX(-400px)",
};

moveRight.addEventListener("click", () => {
  swipe.style.right = animationRegisterParams.swipeRight;
  swipe.style.left = animationRegisterParams.swipeLeft;
  gradientBlock.style.left = animationRegisterParams.gradientBlockLeft;
  welcomeBlock.style.transform = animationRegisterParams.welcomeBlockTransform;
  helloBlock.style.transform = animationRegisterParams.helloBlockTransform;
  signInBlock.style.transform = animationRegisterParams.signInBlockTransform;
  createAccountBlock.style.transform =
    animationRegisterParams.createAccountBlockTransform;
});

moveLeft.addEventListener("click", () => {
  swipe.style.right = animationLoginParams.swipeRight;
  swipe.style.left = animationLoginParams.swipeLeft;
  gradientBlock.style.left = animationLoginParams.gradientBlockLeft;
  welcomeBlock.style.transform = animationLoginParams.welcomeBlockTransform;
  helloBlock.style.transform = animationLoginParams.helloBlockTransform;
  signInBlock.style.transform = animationLoginParams.signInBlockTransform;
  createAccountBlock.style.transform =
    animationLoginParams.createAccountBlockTransform;
});

const applyCursorRippleEffect = (e) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);
  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;
  ripple.style.animation = "ripple-effect .2s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
};

document.addEventListener("click", applyCursorRippleEffect);

const alertFunc = (styleDisplay, textContent) => {
  alert.style.display = styleDisplay;
  alertMesage.textContent = textContent;
};

const generateMessageError = (item, outlineColor) => {
  item.style.outline = outlineColor;
};

const createUser = (name, email, pass) => {
  const newUser = {
    name,
    email,
    pass,
  };
  users.push(newUser);
  alertFunc("block", "Felicitari, ai creat un cont nou!");
};

const showErrorMessage = (index, input, textMess = "") => {
  errorMessage.forEach((errorMes, idx) => {
    if (index === idx) errorMes.textContent = textMess;
  });
};

const registerNewUsers = () => {
  if (
    createName.value !== "" &&
    createMail.value !== "" &&
    createPass.value !== ""
  ) {
    createUser(createName.value, createMail.value, createPass.value);
  }
};

btnSign.disabled = true;

inputCreate.forEach((input, index) => {
  input.addEventListener("input", (ev) => {
    if (ev.target.value === "") {
      generateMessageError(input, "auto #ff0000");
      btnSign.disabled = true;
      showErrorMessage(index, input, `*Campul ${input.name} este obligator!`);
    } else if (input.value.length < 3) {
      generateMessageError(input, "auto #ff0000");
      showErrorMessage(
        index,
        input,
        `*Campul ${input.name} trebu sa fie mai lung de 3!`
      );
    } else if (
      createMail.value.length >= 3 &&
      !createMail.value.match(pattern)
    ) {
      generateMessageError(input, "auto #ff0000");
      showErrorMessage(
        index,
        input,
        `*Campul ${input.name} trebu sa contina @!`
      );
    } else {
      generateMessageError(input, "auto #008000");
      showErrorMessage(index, input);
    }
    createName.value !== "" &&
    createMail.value !== "" &&
    createPass.value !== ""
      ? (btnSign.disabled = false)
      : null;
  });
});

btnSign.addEventListener("click", () => {
  registerNewUsers();
});

okBtn.addEventListener("click", () => {
  alertFunc("none", "");
});

btnLogIn.addEventListener("click", () => {
  users.forEach((user) => {
    signMail.value === user.email && signPass.value === user.pass
      ? alertFunc("block", "Felicitari, te-ai logat cu succes!")
      : alertFunc("block", "Ups, ai introdus date gresite!");
  });
});
