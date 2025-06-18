const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  // toggle dark mode ke body
  body.classList.toggle("dark-mode");

  // toggle icon
  const currentIcon = this.getAttribute("icon");
  if (currentIcon === "stash:sun-solid") {
    this.setAttribute("icon", "stash:moon-solid");
  } else {
    this.setAttribute("icon", "stash:sun-solid");
  }
});
