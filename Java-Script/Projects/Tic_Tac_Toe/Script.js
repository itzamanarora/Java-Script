let boxes = document.querySelectorAll(".box"); //Select all the boxes
let new_game_button = document.querySelector("#new_game"); //New Game Button
let reset_button = document.querySelector("#reset_game"); //reset Button
let chance = true; //player: X, O
let winner_text = document.querySelector(".winner_text"); //Print the Winner Text
let X_Score = 0; //Default Score Value
let O_Score = 0; //Default Score Value
let click_count = 0;
let X_prob = document.querySelector("#X_prob");
let O_prob = document.querySelector("#O_prob");
X_prob.value = 50;
O_prob.value = 50;
let Current_Player;

document.querySelector("#Player_Chance").innerText = "O"; //Print the Player Chance
document.querySelector("#XScore").innerText = X_Score; //Print the Score
document.querySelector("#OScore").innerText = O_Score; //Print the Score

//Winning Pattern Array
const Winning_Pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//ADD VALUE in box function
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box is Clicked!");
    if (chance === true) {
      //Player chance condition
      Current_Player = box.innerText = "O"; //Print the Player Chance
      document.querySelector("#Player_Chance").innerText = "X"; //Change the Player Text
      chance = false; //Chance the Player Chance
    } else {
      Current_Player = box.innerText = "X"; //Print the Player Chance
      document.querySelector("#Player_Chance").innerText = "O"; //Change the Player Text
      chance = true; //Chance the Player Chance
    }
    box.disabled = true; //Disable button after a player chance for missclicking
    click_count++;
    wining_Probality(Current_Player);
    check_winner();
  });
});

//CHECK WINNER function
const check_winner = () => {
  for (let Pattern of Winning_Pattern) {
    let pos_1_Val = boxes[Pattern[0]].innerText;
    let pos_2_Val = boxes[Pattern[1]].innerText;
    let pos_3_Val = boxes[Pattern[2]].innerText;

    if (pos_1_Val != "" && pos_2_Val != "" && pos_3_Val != "") {
      if (pos_1_Val === pos_2_Val && pos_2_Val === pos_3_Val) {
        //Verify the Condtions
        boxes[Pattern[0]].classList.add("winner");
        boxes[Pattern[1]].classList.add("winner");
        boxes[Pattern[2]].classList.add("winner");
        show_winner(pos_1_Val); //Sending the value to the winner function for printing the winner name
        return;
      }
    }
    if (click_count === 9 && winner_text.innerText === "") {
      winner_text.innerText = `It's a DRAW!`;
      X_prob.value = 0;
      O_prob.value = 0;
    }
  }
};

//SHOW WINNER function
const show_winner = (pos_1_Val) => {
  winner_text.innerText = `${pos_1_Val} is the Winner!`; //Print the Winner Text
  if (pos_1_Val == "O") {
    O_Score++; //Add the Score value
    O_prob.value = 100;
    document.querySelector("#OScore").innerText = O_Score; //Print the Score
  } else {
    ++X_Score; //Add the Score Value
    X_prob.value = 100;
    document.querySelector("#XScore").innerText = X_Score; //Print the Score
  }
  disable_box(); //Disable box function
};

//DISABLE BOX function
const disable_box = () => {
  for (let box of boxes) {
    box.disabled = true; //Disable boxes after win
  }
};

//NEW GAME function
const new_game = () => {
  for (let box of boxes) {
    box.disabled = false; //Box Disable off
    box.innerText = ""; //Box text clear
    winner_text.innerText = ""; //Winner Text Clear
    X_prob.value = 50;
    O_prob.value = 50;
    for (let Pattern of Winning_Pattern) {
      boxes[Pattern[0]].classList.remove("winner");
      boxes[Pattern[1]].classList.remove("winner");
      boxes[Pattern[2]].classList.remove("winner");
    }
  }
};

//RESET function
const reset_game = () => {
  for (let box of boxes) {
    box.disabled = false; //Box Disable off
    box.innerText = ""; //Box text clear
    winner_text.innerText = ""; //Winner text clear
    O_Score = 50; //Reset Score
    X_Score = 50; //Reset Score
    document.querySelector("#OScore").innerText = O_Score; //Print the Score
    document.querySelector("#XScore").innerText = X_Score; //Print the Score
    for (let Pattern of Winning_Pattern) {
      boxes[Pattern[0]].classList.remove("winner");
      boxes[Pattern[1]].classList.remove("winner");
      boxes[Pattern[2]].classList.remove("winner");
    }
  }
  click_count = 0; // Reset click counter
};

const wining_Probality = (Player) => {
  const prob_value = 12.5;
  let currentProb = Player === "X" ? parseFloat(X_prob.value) : parseFloat(O_prob.value);
  for (let Pattern of Winning_Pattern) {
    let pos_1_Val = boxes[Pattern[0]].innerText;
    let pos_2_Val = boxes[Pattern[1]].innerText;
    let pos_3_Val = boxes[Pattern[2]].innerText;

    if(pos_1_Val === Player || pos_2_Val === Player || pos_3_Val === Player) {
        currentProb += prob_value;
    }

    if(Player === 'X') {
        X_prob.value = currentProb > 100 ? 100 : currentProb;
        O_prob.value = 100 - X_prob.value;
    } else {
        O_prob.value = currentProb > 100 ? 100 : currentProb;
        X_prob.value = 100 - O_prob.value;
    }
  }
};

//CLICKING EVENTs
new_game_button.addEventListener("click", new_game); //Event Listener of NEW GAME Button
reset_button.addEventListener("click", reset_game); //EVENT Listener of RESET Button
