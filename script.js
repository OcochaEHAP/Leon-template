/*
  Hi evryone ,
  I hope you are doing great
  ok i have a very basic knowlege of javascript i create this file for practicing, because i am learniig git & github from yoututbe "elzro web school"
  but do not gues i am stupid , i know python
  >
    this is me again after ji learned js, I'm going to update this template using advanced Css and js 
*/
// variables
let links = document.querySelector(".links");
let navbar = document.querySelector(".navbar");
let navbarIcon = document.querySelector(".icon");

let checkbox = document.querySelector(".checkbox");
// variables
links.addEventListener("click", () => {
  links.classList.toggle("active");
});

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
