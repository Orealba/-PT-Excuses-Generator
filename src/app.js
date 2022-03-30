// import "bootstrap";
import "./style.css";

function cardGenerator() {
  let pokerCards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let pokerIconos1 = ["♦", "♥", "♠", "♣"];
  let colors = ["red", "black"];

  var pokerCardsAleatorioNumero = Math.floor(Math.random() * 13);
  var pokerCardsAleatorioIconos = Math.floor(Math.random() * 4);

  const pokerCardsGenerator1 = document.querySelector("#pokerIconos1");
  pokerCardsGenerator1.innerHTML = pokerIconos1[pokerCardsAleatorioIconos];

  const pokerCardsGenerator2 = document.querySelector("#pokerCards");
  pokerCardsGenerator2.innerHTML = pokerCards[pokerCardsAleatorioNumero];

  const pokerCardsGenerator3 = document.querySelector("#pokerIconos2");
  pokerCardsGenerator3.innerHTML = pokerIconos1[pokerCardsAleatorioIconos];

  if (pokerCardsAleatorioIconos == 0 || pokerCardsAleatorioIconos == 1) {
    console.log(colors[0]);
    document.querySelector("#card").className = colors[0];
  } else {
    console.log(colors[1]);
    document.querySelector("#card").className = colors[1];
  }
}

cardGenerator();
let button = document.querySelector("#button");
button.addEventListener("click", function() {
  cardGenerator();
});
