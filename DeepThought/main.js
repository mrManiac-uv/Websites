const menu = document.body.querySelector("#slider");
let isOpen = false;
console.log(menu);
menu.addEventListener("click", () => {
  if (isOpen === false) {
    menu.classList.remove("-left-80");
    menu.classList.add("slide");
    isOpen = true;
  } else {
    menu.classList.remove("slide");
    menu.classList.add("-left-80");
    isOpen = false;
  }
});

const arrows = document.body.querySelectorAll(".expand");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.nextElementSibling.classList.toggle("hidden");
    arrow.classList.toggle("rotate");
  });
});
