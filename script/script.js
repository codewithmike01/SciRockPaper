// A scissor, Rock And Paper Game
// 1 - Sciccors
// 2 - Rock
// 3 - Paper


let comChoice= 0;
let comOutput='';
let comWin='';
let playWin='';
let playWinCheck=false;
let comWinCheck=false;
let playerCount=0;
let comCount=0;

function playerChoice(playerSelection){ //User Input case-insensitive
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function computerPlay(){ //Computer Choice
    for(let i=0;i<1;i++){
        comChoice=Math.floor(Math.random() * 3) + 1;
        if(comChoice===1){
            comOutput='scissors';
        }
        else if(comChoice===2){
            comOutput='rock';
        }
    
        else comOutput='paper';
    }
    return comOutput;
}


function playRound(userInputCase,computerSelection){//The Game Play
    let playerOut=userInputCase;
    let comOut=computerSelection;
    if (comOut==='scissors' && playerOut==='rock'){
        playWin='You Win! Rock beats Scissors';
        playWinCheck=true;
        return playWin;
    }

    else if(comOut==='scissors' && playerOut==='paper'){
        comWin='You Lose! Scissors beats Paper';
        comWinCheck=true;
        return comWin;
    }

    else if(comOut==='rock' && playerOut==='paper'){
        playWin='You Win! Paper beats Rock';
        playWinCheck=true;
        return playWin;
    }

    else if(comOut==='rock' && playerOut==='scissors'){
        comWin='You Lose! Rock beats Scissors';
        comWinCheck=true;
        return comWin;
    }

    else if(comOut==='paper' && playerOut==='rock'){
        comWin='You Lose! Paper beats Rock';
        comWinCheck=true;
        return comWin;
    }

    else if(comOut==='paper' && playerOut==='scissors'){
        playWin='You Win! Scissors beats Paper';
        playWinCheck=true;
        return playWin;
    }

    else if(comOut === playerOut){
        let bothEqual='Its a tie';
        return bothEqual; //When equal
    }

    
}

function game(){
    let i=1;
    while (i<=5){
        let userInput= prompt('Enter your choice: ','');
        let userInputCase=playerChoice(userInput);
        let computerSelection=computerPlay();
        let finaleOutput=playRound(userInputCase,computerSelection);
        console.log(finaleOutput)
        if(playWinCheck===true) playerCount++ ;

        else if(comWinCheck===true) comCount++ ;
        
        // back to default for Next Iteration
        playWinCheck=false;
        comWinCheck=false;
        i++;
    }

    if (playerCount>comCount) console.log('You Win');

    else if(comCount > playerCount) console.log('Computer Win');

    else console.log('Its a Tie');
}



game();