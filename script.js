function openLetter() {
  document.querySelector(".letter").classList.toggle("open");
}

document.querySelector(".letter").addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});
