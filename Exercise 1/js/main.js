const btnMenuOpen = document.querySelector(".burger-icon");
const btnMenuClose = document.querySelector(".close-nav-icon");
const menu = document.querySelector(".menu");

btnMenuOpen.addEventListener("click", () => {
  menu.classList.toggle("open");
  btnMenuOpen.style.display = "none";
  btnMenuClose.style.display = "block";
  btnMenuClose.style.color = "#ffffff";
  btnMenuClose.classList.add("icon-animation");
});

btnMenuClose.addEventListener("click", () => {
  menu.classList.toggle("open");
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

const menuSite = document.querySelector("ul");
const menuLink = ["Home", "Projects", "About", "Contact"];

menuLink.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.classList.add("nav-link", "from-right");
  liElement.textContent = item;
  menuSite.appendChild(liElement);
});

const navLink = document.querySelectorAll(".nav-link");

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

const text = [
  `Maybe it was the other George Michael. You know, the singer-songwriter. This was a big get for God. I'm a scholar. I enjoy scholarly pursuits. Suddently playing wits yourself is a scholarly pursuit? Wow. We're just blowing through nap time, aren't we? I need a face passport, preferably to France... I like the way they think. Butterscotch! Want a lick?`,

  `I made a huge tiny mistake. What's gotten into you? Have you been eating cheese? one of the guys told me to take my head out of my bottom and get back to work... my bottom! Hahahaha. Go ahead, touch the Cornballer. She's always got to wedge herself in the middle of us so that she can control everything. Yeah. Mom's awesome.`,

  `No, no, it's pronounced a-nal-ra-pist. It wasn't really the pronunciation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, asperiores maiores. Ex aliquid unde reiciendis in cum, consectetur necessitatibus? Similique tenetur molestiae, accusamus animi quae neque molestias pariatur dolores maiores sequi quidem expedita modi omnis quod nesciunt, ipsam quis magnam repudiandae. Possimus eligendi facere aliquam suscipit fuga, ullam eos odit!`,

  `Maybe it was the other George Michael. You know, the singer-songwriter. This was a big get for God. I'm a scholar. I enjoy scholarly pursuits. Suddently playing wits yourself is a scholarly pursuit? Wow. We're just blowing through nap time, aren't we? I need a face passport, preferably to France... I like the way they think. Butterscotch! Want a lick?`,

  `Maybe it was the other George Michael. You know, the singer-songwriter. This was a big get for God. I'm a scholar. I enjoy scholarly pursuits. Suddently playing wits yourself is a scholarly pursuit? Wow. We're just blowing through nap time, aren't we? I need a face passport, preferably to France... I like the way they think. Butterscotch! Want a lick?`,
];

const authorText = document.querySelector(".author-text");

text.forEach((item) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = item;
  authorText.appendChild(paragraph);
});
