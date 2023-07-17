let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let highlightIndices = [];

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//change move
let move;
const nextMove = () => {
  move = move == "X" ? "O" : "X";
  return move;
};

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>
  box.addEventListener("click", (e) => {
    nextMove();

    const index = box.id;

    //update array & view
    board[index] = move;
    box.innerText = move;

    //disable button
    box.disabled = true;

    //check win
    checkForWin(move, Number(index));
  })
);

const checkForWin = (move, index) => {
  let flag = false;
  possibleWins.forEach((possibility) => {
    if (possibility.includes(index) && board[index] == move) {
      if (
        board[possibility[0]] === move &&
        board[possibility[1]] === move &&
        board[possibility[2]] === move
      ) {
        flag = true;
      }
    }
  });
  if (flag) {
    highlightBoxes(highlightIndices);
    announceResult(move);
    boxes.forEach((box) => {
      box.disabled = true;
    });
  } else if (board.indexOf(0) == -1) announceResult();
};

//restart the match
const restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
  initiate();
});

//announce result
const result = document.querySelector(".result");
const announceResult = (player) => {
  if (player != null) result.innerHTML = `${player} won the game.`;
  else result.innerHTML = "Game draw.";
};

//highlight the boxes
const highlightBoxes = (arr) => {
  arr.forEach((id) => [boxes[id].classList.toggle("highlight")]);
};

//initialize
const initiate = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  board.fill(0);
  result.innerHTML = "&nbsp;";
  highlightBoxes(highlightIndices);
};

initiate();
