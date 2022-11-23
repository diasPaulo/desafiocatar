import groups from '../groups.json' assert {type: 'json'}
import teams from '../teams.json' assert {type: 'json'}

export default async () => {
  const section = document.createElement("section");
  section.setAttribute("id", "groups");

  const sectionWrapper = document.createElement("div");
  sectionWrapper.setAttribute("class", "wrapper");

  const h2 = document.createElement("h2");
  h2.textContent = "Grupos";

  sectionWrapper.appendChild(h2);

  const content = document.createElement("div");
  content.setAttribute("class", "groups");

  groups.map( _group => {
    let groupArticle = document.createElement("article");
    groupArticle.setAttribute("class", "group");

    let h3 = document.createElement("h3");
    h3.textContent = "Grupo " + _group.group;

    groupArticle.appendChild(h3);

    _group.teams.map( _team => {
      let teamContainer = document.createElement("div");
      teamContainer.setAttribute("class", "team");

      let image = document.createElement("img");
      image.src = teams[_team].flag;
      image.alt = "Bandeira " + teams[_team].name;

      let paragraph = document.createElement("p");
      paragraph.textContent = teams[_team].name;

      teamContainer.appendChild(image);
      teamContainer.appendChild(paragraph);

      groupArticle.appendChild(teamContainer);
    })
    content.appendChild(groupArticle);
  })

  sectionWrapper.appendChild(content);

  const arrowsContainer = document.createElement("div");
  arrowsContainer.setAttribute("class", "arrows");

  const leftArrowContainer = document.createElement("div");
  leftArrowContainer.setAttribute("class", "left-arrow");
  leftArrowContainer.innerHTML = leftArrow();

  const rightArrowContainer = document.createElement("div");
  rightArrowContainer.setAttribute("class", "left-arrow");
  rightArrowContainer.innerHTML = rightArrow();

  arrowsContainer.appendChild(leftArrowContainer);
  arrowsContainer.appendChild(rightArrowContainer);
  
  leftArrowContainer.addEventListener("click", () => {
    const groupWidth = document.querySelector("#groups .groups .group").clientWidth;
    const gapBetweenGroups = 24;
    const spaceToScroll = groupWidth + gapBetweenGroups;

    content.scrollLeft -= spaceToScroll;
  });

  rightArrowContainer.addEventListener("click", () => {
    const groupWidth = document.querySelector("#groups .groups .group").clientWidth;
    const gapBetweenGroups = 24;
    const spaceToScroll = groupWidth + gapBetweenGroups;

    content.scrollLeft += spaceToScroll;
  });

  sectionWrapper.appendChild(arrowsContainer);

  section.appendChild(sectionWrapper);

  return section;
};

function leftArrow() {
  return `
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="25" fill="#F4F4F4"/>
      <path d="M29 33L21 25L29 17" stroke="#8D1B3D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  
  `;
}

function rightArrow() {
  return `
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="25" fill="#F4F4F4"/>
      <path d="M21 33L29 25L21 17" stroke="#8D1B3D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}
