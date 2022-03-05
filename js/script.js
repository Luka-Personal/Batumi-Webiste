// TBILISI CAROUSEL
const CarouselTB = document.querySelector(".tbilisi-icon");
const BackgroundTB = document.querySelector(".carousel-tbilisi");
const usePG0 = document.querySelector(".dots-pg0");
const usePG1 = document.querySelector(".dots-pg1");
const usePG2 = document.querySelector(".dots-pg2");
const usePG3 = document.querySelector(".dots-pg3");

CarouselTB.addEventListener("click", function () {
  BackgroundTB.style.backgroundImage =
    "linear-gradient(to left, rgba(30, 30, 31, 0.6), rgba(117, 19, 93, 0)), url(" +
    imagesTbilisi[count++] +
    ")";
  if (count == 4) {
    count = 0;
  }
  if (count == 0) {
    usePG3.classList.remove("selected");
    usePG0.classList.add("selected");
  }
  if (count == 1) {
    usePG0.classList.remove("selected");
    usePG1.classList.add("selected");
  }
  if (count == 2) {
    usePG1.classList.remove("selected");
    usePG2.classList.add("selected");
  }
  if (count == 3) {
    usePG2.classList.remove("selected");
    usePG3.classList.add("selected");
  }
});

var count = 0;
var imagesTbilisi = [
  "./img/tbilisi-carousel/tbilisi1.jpg",
  "./img/tbilisi-carousel/tbilisi2.jpg",
  "./img/tbilisi-carousel/tbilisi3.jpg",
  "./img/tbilisi-carousel/tbilisi-main.jpg",
];

// KUTAISI CAROUSEL
const CarouselKT = document.querySelector(".kutaisi-icon");
const BackgroundKT = document.querySelector(".carousel-kutaisi");
const usePG00 = document.querySelector(".dotss-pg00");
const usePG11 = document.querySelector(".dotss-pg11");
const usePG22 = document.querySelector(".dotss-pg22");
const usePG33 = document.querySelector(".dotss-pg33");

CarouselKT.addEventListener("click", function () {
  BackgroundKT.style.opacity = "1";
  BackgroundKT.style.backgroundImage =
    "linear-gradient(to left, rgba(30, 30, 31, 0.6), rgba(117, 19, 93, 0)), url(" +
    imagesKutaisi[count++] +
    ")";
  if (count == 4) {
    count = 0;
  }
  if (count == 0) {
    usePG33.classList.remove("selected");
    usePG00.classList.add("selected");
  }
  if (count == 1) {
    usePG00.classList.remove("selected");
    usePG11.classList.add("selected");
  }
  if (count == 2) {
    usePG11.classList.remove("selected");
    usePG22.classList.add("selected");
  }
  if (count == 3) {
    usePG22.classList.remove("selected");
    usePG33.classList.add("selected");
  }
});

var count = 0;
var imagesKutaisi = [
  "./img/kutaisi-carousel/kutaisi1.jpg",
  "./img/kutaisi-carousel/kutaisi2.jpg",
  "./img/kutaisi-carousel/kutaisi3.jpg",
  "./img/kutaisi-carousel/kutaisi-main.jpg",
];
// SMALL QUIZ BATUMI
const AnswerBD1 = document.querySelectorAll(".bad1");
const AnswerGD1 = document.querySelector(".good1");
// #####################
const AnswerBD2 = document.querySelectorAll(".bad2");
const AnswerGD2 = document.querySelector(".good2");
// #######################
const AnswerBD3 = document.querySelectorAll(".bad3");
const AnswerGD3 = document.querySelector(".good3");
// #########################
const AnswerBD4 = document.querySelectorAll(".bad4");
const AnswerGD4 = document.querySelector(".good4");
// ######################### FIRST QUESTION
function falsee1() {
  AnswerBD1.forEach(function (e) {
    e.style.backgroundColor = "red";
    AnswerGD1.style.backgroundColor = "green";
  });
}
function truee1() {
  AnswerGD1.style.backgroundColor = "green";
}
// ######################### SECOND QUESTION
function falsee2() {
  AnswerBD2.forEach(function (ee) {
    ee.style.backgroundColor = "red";
    AnswerGD2.style.backgroundColor = "green";
  });
}
function truee2() {
  AnswerGD2.style.backgroundColor = "green";
}
// ######################## THIRD QUESTION
function falsee3() {
  AnswerBD3.forEach(function (eee) {
    eee.style.backgroundColor = "red";
    AnswerGD3.style.backgroundColor = "green";
  });
}
function truee3() {
  AnswerGD3.style.backgroundColor = "green";
}
// ######################## LAST QUESTION
function falsee4() {
  AnswerBD4.forEach(function (eeee) {
    eeee.style.backgroundColor = "red";
    AnswerGD4.style.backgroundColor = "green";
  });
}
function truee4() {
  AnswerGD4.style.backgroundColor = "green";
}
// ################################# MENU
const MenuBTN = document.querySelector(".menu-icon");
const navTOP = document.querySelector(".nav-top");
const navLINK = document.querySelectorAll(".btn-nav");

// MENU ON CLICK
MenuBTN.addEventListener("click", function () {
  document.body.style.overflow = "hidden";
  navTOP.classList.add("menu-nav-top");
  navTOP.style.display = "flex";
  for (var i = 0; i < navLINK.length; i++) {
    navLINK[i].classList.add("menu-color");
  }
});
// LINK ON CLICK
navLINK.forEach((item) => {
  item.addEventListener("click", (event) => {
    document.body.style.overflow = "visible";
    navTOP.classList.remove("menu-nav-top");
    if (window.matchMedia("(max-width: 960px)").matches) {
      navTOP.style.display = "none";
    }
  });
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 960px)").matches) {
    navTOP.style.display = "flex";
    for (var i = 0; i < navLINK.length; i++) {
      navLINK[i].classList.remove("menu-color");
    }
    navTOP.classList.remove("menu-nav-top");
  } else {
    navTOP.style.display = "none";
  }
});
// TO FIX NAV AT 960px
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 961px)").matches) {
    navTOP.style.display = "flex";
    for (var i = 0; i < navLINK.length; i++) {
      navLINK[i].classList.remove("menu-color");
    }
    navTOP.classList.remove("menu-nav-top");
  } else {
    navTOP.style.display = "none";
  }
});
