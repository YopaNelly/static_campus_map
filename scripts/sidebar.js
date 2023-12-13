const closeButton = document.querySelector(".js-close-icon-btn");
const sidebar = document.querySelector(".js-sidebar");

closeButton.addEventListener("click", () => {
  sidebar.style.display = "none";
});
