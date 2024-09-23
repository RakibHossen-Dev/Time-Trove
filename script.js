const mainMenu = document.getElementById("main_Menu");
const hamBers = document.getElementById("ham_bers");

hamBers.addEventListener("click", function () {
  mainMenu.classList.toggle("hidden");
});
