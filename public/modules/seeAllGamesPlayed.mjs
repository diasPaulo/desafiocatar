//import getAllMatchs from "./getAllMatchs.mjs";
import teams from "../teams.json" assert { type: "json" };
import dataRaw from "../matchs.json" assert { type: "json" };

export default async () => {
  const sectionWrapper = document.querySelector("#gamesPlayed .wrapper");
  const buttonSeeAllGamesPlayed = document.querySelector("#gamesPlayed button");

  buttonSeeAllGamesPlayed.style.display = "none";

  const data = orderByDesc(dataRaw.data);

  let i = 0;
  let gamesPlayed = 0;

  while(i < data.length) {
    if (data[i].status !== "completed" || data[i].status === "future_unscheduled") {
      i++;
      continue;
    }

    gamesPlayed++;

    if (gamesPlayed <= 5){
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
  }
};

function orderByDesc(data){
  data.sort(function (a, b) {
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });

  return data;
}