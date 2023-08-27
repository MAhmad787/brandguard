// Selecting Elememts
const navbar = document.querySelector(".navbar");
const navlist = navbar.querySelector(".navlist");
const burger = document.querySelector("#burger");
const links = document.querySelectorAll(".nav-items");

burger.addEventListener("click", () => {
  navbar.classList.toggle("resp-nav");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("resp-nav");
  });
});
