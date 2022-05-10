let openEl = document.getElementById("open");
let closeEl = document.getElementById("close");
let containerEl = document.querySelector(".container");

/* OPEN BUTTON EVENT CLICKED */
openEl.addEventListener("click", () => {
  containerEl.classList.add("show-nav");
});

closeEl.addEventListener("click", () => {
  containerEl.classList.remove("show-nav");
});
