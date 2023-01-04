import "./styles.css";
import { players, addPlayerLink, calcColor } from "./main.js";

console.log("Index: ", players);
players.forEach((person, index) => {
  let playerGrid = document.getElementById("player_grid");
  let gridSquare = document.createElement("div");
  gridSquare.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");
  playerGrid.appendChild(gridSquare);
  let cardLayout = document.createElement("div");
  cardLayout.setAttribute("class", "ef-card text-center");
  gridSquare.appendChild(cardLayout);
  let efLink = addPlayerLink(index, cardLayout);
  let cardSpan = document.createElement("span");
  efLink.appendChild(cardSpan);
  let playerCircle = document.createElement("span");
  playerCircle.setAttribute("class", "circle-face");
  playerCircle.setAttribute(
    "style",
    "background-color:" + calcColor(person.ballondor_rank)
  );
  cardSpan.appendChild(playerCircle);
  let playerImage = document.createElement("img");
  playerImage.setAttribute("src", person.profimgurl);
  playerCircle.appendChild(playerImage);
  let playerTextMP = document.createElement("p");
  playerTextMP.setAttribute("class", "player-name");
  let innerText = person.ballondor_rank + ". " + person.name;
  playerTextMP.innerText = innerText;
  cardSpan.appendChild(playerTextMP);
});
