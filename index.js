let selection = document.querySelector(".data");
let button = document.querySelector(".bu");
let person_victories = 0;
let ai_victories = 0;
const AI_CHOISE = ["rock", "paper", "scissors"];
let check = () => {
  let person = selection.value;
  console.log(person);
  let ai = AI_CHOISE[Math.floor(Math.random() * 3)];
  console.log(ai);
  if (
    (person == "rock" && ai == "scissors") ||
    (person == "paper" && ai == "rock") ||
    (person == "scissors" && ai == "paper")
  ) {
    person_victories++;
    console.log(
      `Player has won the game. Player has won ${person_victories} games and AI has won ${ai_victories} games`
    );
  } else if (person == ai) {
    console.log("It`s a tie");
  } else {
    ai_victories++;
    console.log(
      `AI has won the game. Player has won ${person_victories} games and AI has won ${ai_victories} games`
    );
  }
};

button.addEventListener("click", check);
console.log(button);
console.log(selection);
