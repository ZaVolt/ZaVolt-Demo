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

  //   logoTextAll.forEach((p) => {
  //     p.style.opacity = 1;
  //   });
});

setTimeout(() => {
  // logoTextRedPaths.forEach((p) => p.classList.add("loaded"));
  // logoTextBlackPaths.forEach((p) => p.classList.add("loaded"));
  svg.remove();
  svgImg.classList.add("animated");
}, 1000);
