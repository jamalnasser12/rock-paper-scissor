const choices=["rock","paper","scissor"];
const playerDisplay =document.getElementById("playerdisplay");
const computerDisplay=document.getElementById("computerdisplay");
const result=document.getElementById("result");

function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let resultTest="";


    if (playerchoice===computerchoice){
        resultTest="it's a tie !!!🪢"
    }else{
        switch(playerchoice){

            case"rock":
            resultTest=(computerchoice==="scissors")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            break;

            case"paper":
            resultTest=(computerchoice==="rock")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            break;

            case"scissor":
            resultTest=(computerchoice==="paper")?"winner winner chicken dinner 🍗":"you lose try again dont lose hope🤕";
            break;


        }
    }
    playerDisplay.textContent=`player: ${playerchoice}`;
    computerDisplay.textContent=`computer: ${computerchoice}`;
    result.textContent=resultTest;
}