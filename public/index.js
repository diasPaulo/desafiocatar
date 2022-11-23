import sectionGroups from "./modules/sectionGroups.mjs";
import heroSection from "./modules/heroSection.mjs";
import sectionMatchs from "./modules/sectionMatchs.mjs";
import sectionGamesPlayed from "./modules/sectionGamesPlayed.mjs";
import getFooterLogo from "./modules/getFooterLogo.mjs";
import sectionAbout from "./modules/about/index.mjs";
import sectionContact from "./modules/contact/index.mjs";

const main = document.querySelector("#main");
const footer = document.querySelector("footer .wrapper");

const pathname = new CustomEvent("onstatechange", {
  detail: { name: location.pathname }
});

window.addEventListener("load", async () => {
  main.innerHTML = "";
  footer.appendChild(getFooterLogo());
  switch (pathname.detail.name) {
    case "/":
      main.appendChild(heroSection());
      main.appendChild(await sectionGroups());
      main.appendChild(await sectionMatchs());
      main.appendChild(await sectionGamesPlayed());
      break;

    case "/about":
      main.appendChild(sectionAbout());
      break;

    case "/contact":
      main.appendChild(sectionContact());
      break;

    default:
      `Página não encontrada`;
  }
});
