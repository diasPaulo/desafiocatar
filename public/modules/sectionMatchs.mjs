import seeAllMatchs from "./seeAllMatchs.mjs";
import teams from "../teams.json" assert { type: "json" };
import dataRaw from "../matchs.json" assert { type: "json" };

export default async () => {
  await fetch("/getMatchs");

  const section = document.createElement("section");
  section.setAttribute("id", "matchs");

  const sectionWrapper = document.createElement("div");
  sectionWrapper.setAttribute("class", "wrapper");

  const h2 = document.createElement("h2");
  h2.textContent = "Próximas Partidas";

  sectionWrapper.appendChild(h2);

  const data = dataRaw.data;

  let i = 0;
  let futureMatchs = 0;
  while (i < data.length && futureMatchs < 5) {
    if (data[i].status === "completed"|| data[i].status === "future_unscheduled") {
      i++;
      continue;
    }

    let articleMatch = document.createElement("article");
    articleMatch.setAttribute("class", "match");

    let dateTime = new Date(data[i].datetime);
    let brazilianDate = dateTime.toLocaleString("pt-BR");

    let dateTimeMatch = document.createElement("p");
    dateTimeMatch.setAttribute("class", "date-time-match");
    dateTimeMatch.innerHTML = brazilianDate;

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
    articleMatch.appendChild(dateTimeMatch);
    articleMatch.appendChild(awayTeam);

    sectionWrapper.appendChild(articleMatch);

    i++;
    futureMatchs++;
  }

  const buttonSeeAllMatchs = document.createElement("button");
  buttonSeeAllMatchs.setAttribute("type", "button");
  buttonSeeAllMatchs.addEventListener("click", seeAllMatchs);
  buttonSeeAllMatchs.textContent = "Ver todos os jogos";

  sectionWrapper.appendChild(buttonSeeAllMatchs);

  section.appendChild(sectionWrapper);

  return section;
};
