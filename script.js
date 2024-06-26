const BtnBox = document.querySelectorAll(".btn");
const Container = document.querySelector(".game-container");
const BtnParent = document.querySelector(".box-area");
const resetBtn = document.getElementById("reset");
const EachBtn =document.getElementsByClassName("btn");
const winnerModal =document.getElementById("EndGameModal")
const Para =document.getElementById("p")
const choiceX=document.getElementById("x")
const choiceO=document.getElementById("o")
const selectionModal =document.getElementById("selectionModal")

//Player selection ( X or O)

choiceX.addEventListener("click", ()=>{
  selectionModal.style.display="none" ;
  Container.style.opacity='1';
   return GameturnO =false;    
})

choiceO.addEventListener("click", ()=>{
    selectionModal.style.display="none" ;
  Container.style.opacity='1';
    return  GameturnO =true ;
})

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
    if (GameturnO) {
      btn.innerHTML = "O";
     GameturnO= false;
    }
     else {
      btn.innerHTML = "X";
      GameturnO=true;
    }
    btn.disabled=true;
   
    checkWinner()
console.log("button clicked : ",count)
count++
computer()

reset();
  });
});


//Reset the game container filed 
 function reset () {
    resetBtn.addEventListener("click", () => {
      BtnBox.forEach((btn) => {
        btn.innerHTML =" ";
        winnerModal.style.display= "none" ;
        btn.disabled=false;
        BtnParent.style.opacity=1;
    });
  });
}

//Function to check the winner

function checkWinner(){
    for (let pattern of winningPatterns){

          let pos1=  BtnBox[pattern[0]].innerText;
          let pos2=  BtnBox[pattern[1]].innerText;
          let pos3=  BtnBox[pattern[2]].innerText;

          if (pos1!="" && pos2!="" && pos3!=""){
          if (pos1==pos2 && pos2==pos3){
           
console.log("Winner is",pos1)
            winModal()
            Para.innerHTML=`Winner is ${pos2}`
            
          }
          }

    }
}

function winModal(){
    winnerModal.style.display='block';
    BtnParent.style.opacity=".23";
}
  

 // Bot player 
 function computer() {
  let availableButtons = [];
  // Collect all available buttons
  for (let i = 0; i < BtnBox.length; i++) {
      if (!BtnBox[i].disabled) {
          availableButtons.push(i);
      }
  }
  // Choose a random button from available buttons
  if (availableButtons.length > 0 && count%2==0 ) {
      let randomIndex = Math.floor(Math.random() * availableButtons.length);
      let randomButtonIndex = availableButtons[randomIndex];
     
     //It's a IIFE ( Immediately Invoked Function Expression)
      (function delayedClick(delay) {
        setTimeout(() => {
          BtnBox[randomButtonIndex].click() ;
        }, delay);
      })(800)
  }

}

