const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const resultElement = document.querySelector('#result');

function computerPlay(){
    const choices=['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){

    console.log(`User chose ${playerSelection}; computer chose ${computerSelection}`);
    switch(playerSelection.toLowerCase()){
        case 'rock':
            if(computerSelection.toLowerCase()=== 'paper')
                return 'You Lose! Paper beats Rock';
            if(computerSelection.toLowerCase()=== 'scissors')
                return 'You Win! Rock beats Scissors';
            return `It's a tie!`
            break;
        case 'paper':
            if(computerSelection.toLowerCase()=== 'scissors')
                return 'You Lose! Scissors beats Paper';
            if(computerSelection.toLowerCase()=== 'rock')
                return 'You Win! Paper beats Rock';
            return `It's a tie!`
            break;
        case 'scissors':
            if(computerSelection.toLowerCase()=== 'rock')
                    return 'You Lose! Rock beats Scissors';
                if(computerSelection.toLowerCase()=== 'paper')
                    return 'You Win! Scissors beats Paper';
                return `It's a tie!`
                break;
    }   
}

function game(){
    let count=0;
    for(let i=0;i<5;i+=1){
        const userSelection = prompt(`Choose from 'Rock', 'Paper', or 'Scissors'. Enter your choice.`);
        const result = playRound(userSelection,computerPlay());
        console.log(`Round ${i+1}: ${result}`);
        if(/^You Lose!/.test(result))
            count -=1;
        else if(/^You Win!/.test(result))
            count +=1;
    }
    console.log( count<0 ? 'Sorry you lose!': count === 0 ? `It's a tie`:'Yay! you won!');
}

//game();
let userScore = 0;
let computerScore = 0;
let gameOver = false;
function handleclick(e){
    //console.log(this.textContent);
    if(gameOver){
        resultElement.textContent = 'Winner:';
        //score.textContent = '';
        userScore = 0;
        computerScore = 0;
        gameOver = false;
    }
   
    //console.log(playRound(userSelection,computerPlay()));
    const userSelection = this.textContent;
    const result = playRound(userSelection,computerPlay());
    if(/^You Lose!/.test(result))
        computerScore += 1;
    else if(/^You Win!/.test(result))
        userScore +=1;

    score.textContent = `Score: You : ${userScore} , Computer :  ${computerScore}`;
    
    if(userScore === 5 || computerScore === 5){
        resultElement.textContent = userScore<computerScore ? 'Sorry you lose!': userScore === computerScore  ? `It's a tie`:'Yay! you won!';
        results.appendChild(resultElement);
        gameOver = true;
    }
}

buttons.forEach(button=>{
    button.addEventListener('click', handleclick);
})