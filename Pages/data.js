// "use strict";

const hamburger = document.querySelectorAll(".ham");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mobileMenu");

//like icon animation
const likeBtns = document.getElementsByClassName("liked");

const commentBtns = document.querySelectorAll(".commented");
const shareBtns = document.querySelectorAll(".shared");

//drop down menu
const dropDownBtn = document.querySelectorAll(".selectButton");

console.log(dropDownBtn);

const dropDownMenu = document.querySelector(".options");

const options = document.querySelectorAll(".option");

//post Popup
const input = document.querySelector(".input");
const xBtn = document.querySelector(".xBtn");
const post = document.querySelector(".post");

//open harmburger

function openMenu() {
  menu.classList.toggle("hidden");
}
for (const item of hamburger) {
  item.addEventListener("click", openMenu);
}

//Close harmburger
function closeMenu() {
  menu.classList.toggle("hidden");
}

for (const item of hamburger) {
  closeBtn.addEventListener("click", closeMenu);
}

//Changing icon color
function iconColor() {
  this.classList.toggle("clicked");
}
function removeColor() {
  this.classList.toggle("unclicked");
}

for (const items of likeBtns) {
  items.addEventListener("click", iconColor);
}
for (const items of commentBtns) {
  items.addEventListener("click", iconColor);
}
for (const items of shareBtns) {
  items.addEventListener("click", iconColor);
}

//dropDown Menu

for (const item of dropDownBtn) {
  item.addEventListener("click", function () {
    dropDownMenu.classList.toggle("hide");
  });
}

for (const items of options) {
  items.addEventListener("click", () => {
    dropDownBtn.textContent = items.textContent;
    dropDownMenu.classList.toggle("hide");
    dropdown.classList.toggle("open");
  });
}

//post Popup

input.addEventListener("click", () => post.classList.remove("hidden"));

xBtn.addEventListener("click", () => post.classList.add("hidden"));
