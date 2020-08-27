let p1 = document.querySelector(".img1");
let p2 = document.querySelector(".img2");

const calDice = () => {
  let random1 = Math.ceil(Math.random() * 6);
  let random2 = Math.ceil(Math.random() * 6);

  setDiceImage(random1, p1);
  setDiceImage(random2, p2);

  calWinner(random1, random2);
};

//p1.setAttribute("src", "images/dice1.png");

const setDiceImage = (val, output) => {
  switch (val) {
    case 1:
      output.setAttribute("src", "images/dice1.png");
      return;
    case 2:
      output.setAttribute("src", "images/dice2.png");
      return;
    case 3:
      output.setAttribute("src", "images/dice3.png");
      return;
    case 4:
      output.setAttribute("src", "images/dice4.png");
      return;
    case 5:
      output.setAttribute("src", "images/dice5.png");
      return;
    default:
      output.setAttribute("src", "images/dice6.png");
      return;
  }
};

function calWinner(random1, random2) {
  if (random1 > random2)
    document.querySelector("h1").innerHTML = "Player 1 wins";
  else if (random2 > random1)
    document.querySelector("h1").innerHTML = "Player 2 wins";
  else document.querySelector("h1").innerHTML = "Match Draw";
}
