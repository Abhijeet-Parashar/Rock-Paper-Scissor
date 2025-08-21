let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");





const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    //rock , paper, scissore
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () => {
    // console.log("Game Was Draw 🫱🫲");
    msg.innerText = "Game Was Draw 🫱🫲 PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {//==true
        userScore++;
        userScorePara.innerText = userScore;



        // console.log("YOU WON🎉🎉🎉🎉");
        msg.innerText = `you won! 🎉🎉🎉🎉 your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {

        compScore++;
        compScorePara.innerText = compScore;

        //  console.log("SORRY, YOU LOST😔😔");
        msg.innerText = `SORRY, YOU LOST😔😔   ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();

    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;

        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //  console.log("choice was clicked", userChoice);
        playGame(userChoice);


    });
});