"use strict";

const hamburger = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mobileMenu");

function openMenu() {
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    console.log("clicked open");
  });
}
openMenu();

function closeMenu() {
  closeBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    console.log("clicked close");
  });
}
closeMenu();

// hamburger.addEventListener("click", function () {
//   if (!menu.classList.contains("open")) {
//     menu.classList.remove("closing");
//     menu.classList.add("open");
//     menu.classList.toggle("hidden");
//   }
// });

// closeBtn.addEventListener("click", function () {
//   if (menu.classList.contains("open")) {
//     menu.classList.remove("open");
//     menu.classList.add("closing");
//     // menu.classList.toggle("hidden");
//   }
// });
