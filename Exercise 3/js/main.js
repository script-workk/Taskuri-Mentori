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
const errorEmail = document.querySelector(".error-email");

const users = [];
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

moveRight.addEventListener("click", () => {
  animationStyle(
    "0",
    "400px",
    "-400px",
    "translateY(-200px)",
    "translateY(0px)",
    "translateY(0px)",
    "translateX(-400px)"
  );
});

moveLeft.addEventListener("click", () => {
  animationStyle(
    "400px",
    "0",
    "0",
    "translateY(0px)",
    "translateY(200px)",
    "translateY(400px)",
    "translateX(0px)"
  );
});

const animationStyle = (
  swipeRight,
  swipeLeft,
  gradientBlockLeft,
  welcomeBlockTransform,
  helloBlockTransform,
  signInBlockTransform,
  createAccountBlockTransform
) => {
  swipe.style.right = swipeRight;
  swipe.style.left = swipeLeft;
  gradientBlock.style.left = gradientBlockLeft;
  welcomeBlock.style.transform = welcomeBlockTransform;
  helloBlock.style.transform = helloBlockTransform;
  signInBlock.style.transform = signInBlockTransform;
  createAccountBlock.style.transform = createAccountBlockTransform;
};

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

const validateMail = () => {
  createMail.value.match(pattern)
    ? (errorEmail.textContent = 'Campul Email trebu sa contina "@"') // inca nu am terminat cu validarea email
    : "null";
};

btnSign.addEventListener("click", () => {
  validateMail();
  inputCreate.forEach((item) => {
    const generateMesageError = (textError) => {
      item.attributes.placeholder.value = textError;
    };

    if (item.value === "") {
      item.style.outline = "auto #ff0000";
      generateMesageError(`* Campul ${item.name} este obligatoriu`);
    } else if (item.value !== "") {
      item.style.outline = "auto #008000";
      generateMesageError("");
    }
  });

  if (
    createName.value !== "" &&
    createMail.value !== "" &&
    createPass.value !== ""
  ) {
    const createUser = (name, email, pass) => {
      const newUser = {
        name: name,
        email: email,
        pass: pass,
      };
      users.push(newUser);
      alertFunc("block", "Felicitari, ai creat un cont nou!");
    };
    createUser(createName.value, createMail.value, createPass.value);
  }
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

// de optimizat codul....
// de creat validare speciala pentru email
