let gameArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let cells = document.querySelectorAll(".cell"),
  scores = document.querySelectorAll(".score"),
  ticMove = true,
  moveCounter = 0,
  moveCounterDiv = document.querySelector(".moveCounter"),
  winnerDiv = document.querySelector(".winner"),
  playerMove = true,
  player = true,
  restartBtn = document.querySelector(".restartBtn"),
  tic = `<img src="tic.jpg" width='120' height='120'>`,
  toe = `<img src="toe.png" width='120' height='120'>`;

if (localStorage.getItem("score1") != null) {
  score1 = localStorage.getItem("score1");
} else {
  score1 = 0;
}
if (localStorage.getItem("score2") != null) {
  score2 = localStorage.getItem("score2");
} else {
  score2 = 0;
}
if (localStorage.getItem("score3") != null) {
  score3 = localStorage.getItem("score3");
} else {
  score3 = 0;
}
scores[0].textContent = score1;
scores[1].textContent = score2;
scores[2].textContent = score3;

restartBtn.addEventListener("click", function () {
  localStorage.setItem("score1", score1);
  localStorage.setItem("score2", score2);
  localStorage.setItem("score3", score3);
  document.location.reload();
});

function win(type) {
  if (
    (gameArr[0] == gameArr[1] && gameArr[1] == gameArr[2]) ||
    (gameArr[0] == gameArr[3] && gameArr[3] == gameArr[6]) ||
    (gameArr[0] == gameArr[4] && gameArr[4] == gameArr[8]) ||
    (gameArr[1] == gameArr[4] && gameArr[4] == gameArr[7]) ||
    (gameArr[3] == gameArr[4] && gameArr[4] == gameArr[5]) ||
    (gameArr[2] == gameArr[4] && gameArr[4] == gameArr[6]) ||
    (gameArr[6] == gameArr[7] && gameArr[7] == gameArr[8]) ||
    (gameArr[2] == gameArr[5] && gameArr[5] == gameArr[8])
  ) {
    console.log("1");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style = "pointer-events: none";
    }
    if (type == "X") {
      if (player) {
        if (playerMove) {
          winnerDiv.textContent = `Won player X`;
          score1++;
          scores[0].textContent = score1;
        } else {
          winnerDiv.textContent = `Won player X`;
          score3++;
          scores[2].textContent = score3;
        }
      } else {
        if (playerMove) {
          winnerDiv.textContent = `Won player O`;
          score3++;
          scores[2].textContent = score3;
        } else {
          winnerDiv.textContent = `Won player O`;
          score1++;
          scores[0].textContent = score1;
        }
      }
    } else if (type == "O") {
      if (player) {
        if (playerMove) {
          winnerDiv.textContent = `Won player 1`;
          score1++;
          scores[0].textContent = score1;
        } else {
          winnerDiv.textContent = `Won player 2`;
          score3++;
          scores[2].textContent = score3;
        }
      } else {
        if (playerMove) {
          winnerDiv.textContent = `Won player 1`;
          score3++;
          scores[2].textContent = score3;
        } else {
          winnerDiv.textContent = `Won player 2`;
          score1++;
          scores[0].textContent = score1;
        }
      }
    }
    moveCounterDiv.textContent = `Moves: ${moveCounter}`;
    restartBtn.style = "display: block";
    player = !player;
  } else if (moveCounter == 9) {
    winnerDiv.textContent = "Draw";
    score2++;
    scores[1].textContent = score2;
    moveCounterDiv.textContent = `Moves: ${moveCounter}`;
    restartBtn.style = "display: block";
    player = !player;
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    moveCounter++;
    if (ticMove) {
      gameArr[i] = "X";
      console.log(gameArr);
      cells[i].innerHTML = tic;
      playerMove = !playerMove;
      win("X");
    } else {
      gameArr[i] = "O";
      cells[i].innerHTML = toe;
      playerMove = !playerMove;
      win("O");
    }
    ticMove = !ticMove;
    cells[i].style = "pointer-events: none";
  });
}
