//import getAllMatchs from "./getAllMatchs.mjs";
import teams from "../teams.json" assert { type: "json" };
import dataRaw from "../matchs.json" assert { type: "json" };

export default async () => {
  const sectionWrapper = document.querySelector("#matchs .wrapper");
  const buttonSeeAllMatchs = document.querySelector("#matchs button");

  buttonSeeAllMatchs.style.display = "none";

  const data = orderByAsc(dataRaw.data);

  let i = 0;
  let futureMatchs = 0;

  while (i < data.length) {
    if (data[i].status === "completed" || data[i].status === "future_unscheduled") {
      i++;
      continue;
    }

    futureMatchs++;

    if (futureMatchs <= 5) {
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
  }
};

function orderByAsc(data){
  data.sort(function (a, b) {
    return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
  });

  return data;
}