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
const dropDownMenu = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const carretUp = document.querySelectorAll(".arrUp");
const carretdown = document.querySelectorAll(".arrDown");
const imgDown = document.querySelectorAll(".imgDown");
console.log(carretUp, carretdown);

//post Popup
const inputClick = document.getElementById("inputClick");
const xBtn = document.querySelector(".xBtn");
const post = document.querySelector(".post");
const postOverLay = document.querySelector(".postOverLay");
const textArea = document.querySelector("#textArea");
const inActiveBtn = document.querySelector(".inActiveBtn");
console.log(textArea);

//comment drop down
const comment = document.querySelector("#comment");
const commentDropDown = document.querySelector(".dropDownCont");

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

    for (const item of carretdown) {
      item.classList.toggle("hide");
      console.log("clicked");
    }

    for (const item of carretUp) {
      item.classList.toggle("hide");
      console.log("clicked");
    }
  });
}

for (const items of options) {
  items.addEventListener("click", () => {
    for (const item of dropDownBtn) {
      item.textContent = items.textContent;
    }

    dropDownMenu.classList.toggle("hide");
  });
}

// post Popup
inputClick.addEventListener("click", function () {
  post.classList.remove("hidden");
  postOverLay.classList.remove("hidden");
});
function closePost() {
  post.classList.add("hidden");
  postOverLay.classList.add("hidden");
}
xBtn.addEventListener("click", closePost);
postOverLay.addEventListener("click", closePost);

textArea.addEventListener("click", function () {
  inActiveBtn.classList.add("ActiveBtn");
});

// open comment drop down
comment.addEventListener("click", function () {
  commentDropDown.classList.remove("hidden");
  console.log("clicked");
});
