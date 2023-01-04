import "./styles.css";
import { players, addPlayerLink, calcColor } from "./main.js";
const queryString = window.location.search;
console.log("querystring", queryString);
const urlParams = new URLSearchParams(queryString);
const player = urlParams.get("player");
console.log("player", player);

const person = players[player];
console.log("person", person);

let colorBefore = document.getElementById("color-before");
colorBefore.setAttribute(
  "style",
  "background-color:" + calcColor(person.ballondor_rank)
);

let personImage = document.getElementById("player-page-image");
let actualImage = document.createElement("img");
actualImage.setAttribute("src", person.actionimgurl);
actualImage.setAttribute("class", "img-fluid");
personImage.appendChild(actualImage);

let colorAfter = document.getElementById("color-after");
colorAfter.setAttribute(
  "style",
  "background-color:" + calcColor(person.ballondor_rank)
);

let personInfo = document.getElementById("player-page-info");
let actualInfo = document.createElement("h1");
actualInfo.setAttribute(
  "class",
  "display-1 text-center ef-individual-player-name"
);
let innerText = person.name;
actualInfo.innerText = innerText;
personInfo.appendChild(actualInfo);

let fullInformation = document.getElementById("fact-list");

createItem("Ballon d'or ranking 2022:", person.ballondor_rank);
createItem("Position:", person.position);
createItem("Height:", person.height);
createItem("Birth date:", person.date);
createItem("Nationality:", person.nationality);
createItem("National Team:", person.nationalteam + " " + person.nationalteamnr);
createItem("Joined Senior National Team:", person.nationalteamjoin);
createItem("Youth National Teams:", person.ynt);
createItem(
  "Current club season 22/23:",
  person.club + " " + person.clubnr + " (Since: " + person.clubjoin + ")"
);
createItem("Joined first team squad:", person.ftsquadjoin);
createItem("Previous clubs:", person.psclubs);
createItem("Junior clubs:", person.jclubs);

function createItem(title, value) {
  if (value) {
    let factsParagraph = document.createElement("p");
    factsParagraph.setAttribute("class", "fact-item");
    let importantFacts = document.createElement("span");
    importantFacts.setAttribute("class", "fact-title");
    importantFacts.innerText = title;
    let normalFacts = document.createElement("span");
    normalFacts.innerText = " " + value;
    factsParagraph.appendChild(importantFacts);
    factsParagraph.appendChild(normalFacts);
    fullInformation.appendChild(factsParagraph);
  }
}

//find element-prev
//if (player > 0) {}
//addPlayerLink(player - 1, element)

let previousLink = document.getElementById("prevLink");

if (player > 0) {
  addPlayerLink(player - 1, previousLink, "Previous");
}

//find element-next
//if (player < players.length - 1) {}
//addPlayerLink(player + 1, element)

let nextLink = document.getElementById("nextLink");

if (player < players.length - 1) {
  addPlayerLink(+player + 1, nextLink, "Next");
}
