const btnMenu = document.getElementById("btnOpenCloseMenu");
const links = document.querySelectorAll("header nav a");

function closeMenu() {
  window.innerWidth >= 1024
    ? document.body.classList.remove("menuOpened")
    : null;
};

function openCloseMenu() {
  const btnMenu_ariaExpanded = btnMenu.getAttribute("aria-expanded");
  document.body.classList.toggle("menuOpened");
  btnMenu.setAttribute(
    "aria-expanded",
    btnMenu_ariaExpanded === "false" ? "true" : "false"
  );
};

window.addEventListener("resize", closeMenu);
btnMenu.addEventListener("click", openCloseMenu);

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menuOpened");
  });
});