// "use strict";

const hamburger = document.querySelectorAll(".ham");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mobileMenu");

//like icon animation
const likeBtns = document.getElementsByClassName("liked");
const likeBtn2 = document.querySelectorAll(".liked2");
const commentBtns = document.querySelectorAll(".commented");
const commentBtns2 = document.querySelectorAll(".commented2");
const shareBtns = document.querySelectorAll(".shared");

//drop down menu
const dropDownBtn = document.querySelector(".selectButton");
const dropDownMenu = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const carretUp = document.querySelector(".arrUp");
const carretdown = document.querySelector(".arrDown");
// second Drop down
const dropDownBtn2 = document.querySelector(".selectButton2");
const dropDownMenu2 = document.querySelector(".options2");
const options2 = document.querySelectorAll(".option2");
const carretUp2 = document.querySelector(".arrUp2");
const carretdown2 = document.querySelector(".arrDown2");

//post Popup
const inputClick = document.getElementById("inputClick");
const xBtn = document.querySelector(".xBtn");
const post = document.querySelector(".post");
const postOverLay = document.querySelector(".postOverLay");
const textArea = document.querySelector("#textArea");
const inActiveBtn = document.querySelector(".inActiveBtn");

//comment drop down
const comment = document.getElementsByClassName("comment");
const commentDropDown = document.getElementsByClassName("dropDownCont")[0];

//inner comment drop down
const input = document.querySelector(".inputText");
const inputCont = document.querySelector(".inputCont");
const commTop = document.querySelector(".commTop");
const postBtn = document.querySelector(".postBtn");
const postHeight = document.querySelector("postHeight");

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
for (const item of likeBtn2) {
  item.addEventListener("click", function () {
    item.style.color = "#dda704";
  });
}
for (const item of commentBtns2) {
  item.addEventListener("click", function () {
    item.style.color = "#dda704";
  });
}

//dropDown Menu

dropDownBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("hide");

  carretdown.classList.toggle("hide");

  carretUp.classList.toggle("hide");
});

for (const items of options) {
  items.addEventListener("click", () => {
    dropDownBtn.textContent = items.textContent;
    dropDownMenu.classList.toggle("hide");
  });
}
//second drop down
dropDownBtn2.addEventListener("click", function () {
  dropDownMenu2.classList.toggle("hide");
  carretdown2.classList.toggle("hide");
  carretUp2.classList.toggle("hide");
});

for (const items of options2) {
  items.addEventListener("click", () => {
    dropDownBtn2.textContent = items.textContent;
    dropDownMenu2.classList.toggle("hide");
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

for (const item of comment) {
  item.addEventListener("click", function () {
    commentDropDown.classList.toggle("hidden");

    // for (const item of commentDropDown) {
    //   item.classList.toggle("hidden");
    //   console.log("clicked");
    // }
  });
}

//inner comment drop down

input.addEventListener("keydown", function () {
  inputCont.classList.remove("inputCont");
  input.classList.remove("inputText");
  commTop.classList.remove("commTop");

  inputCont.classList.add("keyDownCont");
  input.classList.add("keyDownInput");
  commTop.classList.add("keyDownCommTop");
  postBtn.classList.remove("hide");
  // postHeight.style.height = `${80}${rem}`;
});

window.addEventListener("click", function (e) {
  // if (e.target === "Backspace") {
  inputCont.classList.add("inputCont");
  input.classList.add("inputText");
  commTop.classList.add("commTop");

  inputCont.classList.remove("keyDownCont");
  input.classList.remove("keyDownInput");
  commTop.classList.remove("keyDownCommTop");
  postBtn.classList.add("hide");
  // }
});
