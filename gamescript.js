let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()  * 3);
    return options[randIdx];
};
 
const drawGame = () => {
    console.log("game was draw!");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "blue";
};
const showWinner =(userWin) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win!");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
}
     
const playGame =(userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log(" comp choice = ", compChoice);
    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper"? false : true;
        }
        else if( userChoice === "paper"){
            //rock ,scissors
            userWin = compChoice === "scissors"? false : true;
        } else {
            //rock ,paper
            userChoice = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choices) =>{
    choices.addEventListener("click",() =>{
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
});