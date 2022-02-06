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

const inputLogin = document.querySelectorAll("#log_in input");
const inputCreate = document.querySelectorAll("#create_user input");
const logIn = document.querySelector("#log_in");
const btnSign = document.querySelector("#sign");
const btnLogIn = document.querySelector("#login");
const cname = document.querySelector("#cname");
const cmail = document.querySelector("#cmail");
const cpass = document.querySelector("#cpass");

const alert = document.querySelector(".alert");
const alertMesage = document.querySelector(".alert-mesage");
const okBtn = document.querySelector(".ok");

const users = [];

btnSign.addEventListener("click", () => {
  inputCreate.forEach((item) => {
    if (item.value === "") {
      item.style.outline = "auto #ff0000";
    } else {
      item.style.outline = "auto #008000";
    }
  });

  if (cname.value !== "" && cmail.value !== "" && cpass.value !== "") {
    const createUser = (name, email, pass) => {
      const newUser = {
        name: name,
        email: email,
        pass: pass,
      };
      users.push(newUser);
      alert.style.display = "block";
      alertMesage.textContent = "Felicitari, ai creat un cont nou!";
    };
    createUser(cname.value, cmail.value, cpass.value);
  }
});

okBtn.addEventListener("click", () => {
  alert.style.display = "none";
  alertMesage.textContent = "";
});

const smail = document.querySelector("#smail");
const spass = document.querySelector("#spass");

btnLogIn.addEventListener("click", () => {
  users.forEach((user) => {
    if (smail.value === user.email && spass.value === user.pass) {
      alert.style.display = "block";
      alertMesage.textContent = "Felicitari, te-ai logat cu succes!";
    } else {
      alert.style.display = "block";
      alertMesage.textContent = "Ups, ai introdus date gresite!";
    }
  });
});