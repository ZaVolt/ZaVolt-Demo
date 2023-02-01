const svg = document.querySelector("svg#zavolt-logo");
const svgImg = document.querySelector("svg.zv-logo");
const logoTextRedPaths = document.querySelectorAll(".logoText.logoText--red");
const logoTextBlackPaths = document.querySelectorAll(
  ".logoText.logoText--black"
);
const logoTextAll = document.querySelectorAll(".logoText");

window.addEventListener("load", () => {
  logoTextRedPaths.forEach((p) => p.classList.add("animated"));
  logoTextBlackPaths.forEach((p) => p.classList.add("animated"));
  svgImg.classList.add("animated");
});

setTimeout(() => {
  svg.remove();
}, 2000);
