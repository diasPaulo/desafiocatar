export default () => {
  const sectionAbout = document.createElement("section");
  sectionAbout.setAttribute("id", "about");

  const sectionWrapper = document.createElement("div");
  sectionWrapper.setAttribute("class", "wrapper");

  const articleProject = document.createElement("article");
  const articleDevelop = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = "Sobre";

  const projectH3 = document.createElement("h3");
  projectH3.textContent = "O Projeto";

  const projectParagraph1 = document.createElement("p");
  projectParagraph1.textContent =
    "Projeto construído para fins didáticos, com o objetivo de colocar em prática meus conhecimentos de HTML, CSS e JavaScript.";

  const projectParagraph2 = document.createElement("p");
  projectParagraph2.innerHTML = `O design da página foi retirado da comunidade do Discord <a target="_blank" href="https://discord.gg/ABduqDxq">Codelândia</a> assim como foi utilizada a API <a target="_blank" href="https://world-cup-json-2022.fly.dev/">World-Cup-Json</a> na qual retorna todas as informações sobre a Copa do Mundo para a construção deste projeto.`;

  const projectParagraph3 = document.createElement("p");
  projectParagraph3.textContent =
    "Desenvolvido utilizando HTML, CSS e Javascript, além do ambiente Node.JS e do Framework Express e conceitos de SPA (Single Page Aplication, ou aplicação de páginas única).";

  const developH3 = document.createElement("h3");
  developH3.textContent = "Desenvolvimento";

  const developParagraph1 = document.createElement("p");
  developParagraph1.innerHTML = `Desenvolvido para ser uma página de consulta básica sobre dados das partidas da Copa do Mundo 2022. Tem seu design para telas grandes retirado da comunidade do Discord <a target="_blank" href="https://discord.gg/ABduqDxq">Codelândia</a> e seu design foi adaptado para telas pequenas a partir do design inicial.`;

  const developParagraph2 = document.createElement("p");
  developParagraph2.innerHTML = `Os dados são fornecidos pela API <a target="_blank" href="https://world-cup-json-2022.fly.dev/">World-Cup-Json</a> na qual fornece diversos dados relacionado aos jogos da Copa do Mundo 2022. Esses dados são copiados para um arquivo do tipo JSON e é atualizado todas as vezes que a página é carregada porém com um limite mínimo de 1 minuto entre as atualizações. Caso a atualização da página ocorra em menos de 1 minuto, a página utilizará os dados no arquivo JSON sem atualizar os dados.`;

  articleProject.appendChild(projectH3);
  articleProject.appendChild(projectParagraph1);
  articleProject.appendChild(projectParagraph2);
  articleProject.appendChild(projectParagraph3);

  articleDevelop.appendChild(developH3);
  articleDevelop.appendChild(developParagraph1);
  articleDevelop.appendChild(developParagraph2);

  sectionWrapper.appendChild(h2);
  sectionWrapper.appendChild(articleProject);
  sectionWrapper.appendChild(articleDevelop);

  sectionAbout.appendChild(sectionWrapper);

  return sectionAbout;
};