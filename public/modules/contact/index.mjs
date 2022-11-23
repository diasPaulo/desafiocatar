export default () => {
  const sectionAbout = document.createElement("section");
  sectionAbout.setAttribute("id", "contact");

  const sectionWrapper = document.createElement("div");
  sectionWrapper.setAttribute("class", "wrapper");

  const articleAboutMe = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = "Contato";

  const aboutMeH3 = document.createElement("h3");
  aboutMeH3.textContent = "Olá, sou Paulo Dias";

  const aboutMeParagraph = document.createElement("p");
  aboutMeParagraph.textContent =
    "Mestre em Modelagem Computacional pela UERJ, Bacharel em Matemática Aplicada e Computacional pela UFRRJ e Técnico em Informática pelo IFSuldeMinas. Atuo como Técnico de Informática na Fundação Municipal de Educação - Niterói.";

  articleAboutMe.appendChild(aboutMeH3);
  articleAboutMe.appendChild(aboutMeParagraph);
  articleAboutMe.appendChild(createSocialMediaNav());

  sectionWrapper.appendChild(h2);
  sectionWrapper.appendChild(articleAboutMe);

  sectionAbout.appendChild(sectionWrapper);

  return sectionAbout;
};

function createSocialMediaNav() {
  const navSocialMedia = document.createElement("nav");

  const archorGithub = document.createElement("a");
  archorGithub.title = "Github";
  archorGithub.target = "_blank";
  archorGithub.href = "https://github.com/diasPaulo/";
  archorGithub.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
    aria-label="GitHub" role="img"
    viewBox="0 0 512 512">
      <rect width="512" height="512" rx="15%" fill="#000"/>
      <path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/>
    </svg> Github
  `;

  const anchorFacebook = document.createElement("a");
  anchorFacebook.title = "Facebook";
  anchorFacebook.target = "_blank";
  anchorFacebook.href = "https://www.facebook.com/paulo.dias.5439087/";
  anchorFacebook.innerHTML = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 408.788 408.788" style="enable-background:new 0 0 408.788 408.788;" xml:space="preserve">
      <path style="fill:#000;" d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
        h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
        v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
        l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
        c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
        C408.786,24.662,384.124,0,353.701,0z"/>
    </svg> Facebook
  `;

  const anchorLinkedin = document.createElement("a");
  anchorLinkedin.title = "Linkedin";
  anchorLinkedin.target = "_blank";
  anchorLinkedin.href = "https://www.linkedin.com/in/paulo-dias-8b8bb522/";
  anchorLinkedin.innerHTML = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve">
      <g>
        <path fill="#000" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
          C77.16,101.969,74.922,99.73,72.16,99.73z"/>
        <path fill="#000" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
          c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
        <path fill="#000" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
          c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
          c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
          C310,145.43,300.549,94.761,230.454,94.761z"/>
      </g>
    </svg> Linkedin
  `;

  const anchorTelegram = document.createElement("a");
  anchorTelegram.title = "Telegram";
  anchorTelegram.target = "_blank";
  anchorTelegram.href = "https://t.me/DiasPH";
  anchorTelegram.innerHTML = `
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M41.4193 3.37079C41.4193 3.37079 45.3046 1.55279 44.9808 5.96793C44.8729 7.78596 43.9016 14.149 43.1461 21.0314L40.5559 41.4191C40.5559 41.4191 40.3401 44.4057 38.3974 44.9252C36.4547 45.4446 33.5408 43.1072 33.0011 42.5877C32.5694 42.1982 24.9068 36.3546 22.2086 33.4977C21.4531 32.7186 20.5897 31.1603 22.3165 29.3423L33.6487 16.3566C34.9438 14.7983 36.2389 11.1623 30.8426 15.5774L15.7331 27.9139C15.7331 27.9139 14.0063 29.2124 10.7686 28.0437L3.75342 25.4466C3.75342 25.4466 1.16321 23.4987 5.58815 21.5508C16.3807 15.4475 29.6555 9.21432 41.4193 3.37079Z" fill="black"/>
  </svg> Telegram
  `;

  navSocialMedia.appendChild(archorGithub);
  navSocialMedia.appendChild(anchorFacebook);
  navSocialMedia.appendChild(anchorLinkedin);
  navSocialMedia.appendChild(anchorTelegram);

  return navSocialMedia;
}
