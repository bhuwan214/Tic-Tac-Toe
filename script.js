const BtnBox = document.querySelectorAll(".btn");
const Container = document.querySelector(".game-container");
const resetBtn = document.getElementById("reset");
const EachBtn =document.getElementsByClassName("btn");


let Gameturn0 = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let count = 1;

// Traversing over the  all btn and  adding click event to each button
BtnBox.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (count % 2 == 0) {
      btn.innerHTML = "O";
      count++;
    } else {
      btn.innerHTML = "X";
      count++;
    }

reset();
  });
});


//Reset the game container filed 
 function reset () {
    resetBtn.addEventListener("click", () => {
      BtnBox.forEach((btn) => {
        btn.innerHTML =" ";
    });
  });
}

  