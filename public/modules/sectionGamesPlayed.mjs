import teams from "../teams.json" assert { type: "json" };
import dataRaw from "../matchs.json" assert { type: "json" };
import seeAllGamesPlayed from "./seeAllGamesPlayed.mjs";

export default async () => {
  const section = document.createElement("section");
  section.setAttribute("id", "gamesPlayed");

  const sectionWrapper = document.createElement("div");
  sectionWrapper.setAttribute("class", "wrapper");

  const h2 = document.createElement("h2");
  h2.textContent = "Partidas Jogadas";

  sectionWrapper.appendChild(h2);

  const dataASC = dataRaw.data;
  
  const data = orderByDesc(dataASC);
  
  let i = 0;
  let gamesPlayed = 0;
  while(i < data.length && gamesPlayed < 5) {
    if (data[i].status !== "completed") {
      i++;
      continue;
    }

    let articleMatch = document.createElement("article");
    articleMatch.setAttribute("class", "match");

    let gameScore = document.createElement("p");
    gameScore.setAttribute("class", "game-score");
    gameScore.innerHTML =
      data[i].home_team.goals + " x " + data[i].away_team.goals;

    const homeTeamShort = data[i].home_team_country.toLowerCase();
    const awayTeamShort = data[i].away_team_country.toLowerCase();

    let flagHomeTeam = document.createElement("img");
    flagHomeTeam.src = teams[homeTeamShort].flag;
    flagHomeTeam.alt = "Bandeira " + teams[homeTeamShort].name;

    let flagAwayTeam = document.createElement("img");
    flagAwayTeam.src = teams[awayTeamShort].flag;
    flagAwayTeam.alt = "Bandeira " + teams[awayTeamShort].name;

    let nameHomeTeam = document.createElement("p");
    nameHomeTeam.textContent = teams[homeTeamShort].name;

    let nameAwayTeam = document.createElement("p");
    nameAwayTeam.textContent = teams[awayTeamShort].name;

    let homeTeam = document.createElement("div");
    homeTeam.setAttribute("class", "home-team");
    let awayTeam = document.createElement("div");
    awayTeam.setAttribute("class", "away-team");

    homeTeam.appendChild(flagHomeTeam);
    homeTeam.appendChild(nameHomeTeam);

    awayTeam.appendChild(nameAwayTeam);
    awayTeam.appendChild(flagAwayTeam);

    articleMatch.appendChild(homeTeam);
    articleMatch.appendChild(gameScore);
    articleMatch.appendChild(awayTeam);

    sectionWrapper.appendChild(articleMatch);

    i++;
    gamesPlayed++;
  }

  const buttonSeeAllGamesPlayed = document.createElement("button");
  buttonSeeAllGamesPlayed.setAttribute("type", "button");
  buttonSeeAllGamesPlayed.addEventListener("click", seeAllGamesPlayed);
  buttonSeeAllGamesPlayed.textContent = "Ver todos os jogos concluído";

  if (gamesPlayed === 5) {
    sectionWrapper.appendChild(buttonSeeAllGamesPlayed);
  }

  section.appendChild(sectionWrapper);

  return section;
};

function orderByDesc(data){
  data.sort(function (a, b) {
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });

  return data;
}