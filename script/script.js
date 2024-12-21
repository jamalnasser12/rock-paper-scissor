const choices=["rock","paper","scissor"];
const playerDisplay =document.getElementById("playerdisplay");
const computerDisplay=document.getElementById("computerdisplay");
const result=document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;  
let computerScore = 0; 

function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let resultTest="";


    if (playerchoice===computerchoice){
        resultTest="it's a tie !!!🪢"
    }else{
        switch(playerchoice){

            case"rock":
            resultTest=(computerchoice==="scissors")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            if (computerchoice === "scissors") playerScore++; else computerScore++;
            break;

            case"paper":
            resultTest=(computerchoice==="rock")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            if (computerchoice === "rock") playerScore++; else computerScore++;

            break;

            case"scissor":
            resultTest=(computerchoice==="paper")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            if (computerchoice === "paper") playerScore++; else computerScore++;

            break;


        }
    }
    playerDisplay.textContent=`player: ${playerchoice}`;
    computerDisplay.textContent=`computer: ${computerchoice}`;
    result.textContent=resultTest;


    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}