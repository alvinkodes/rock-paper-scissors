let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    return choices.at(Math.floor(Math.random() * 3))
}

const getHumanChoice = () => {
    const choice = prompt('Rock, Paper or Scissors?')
    return choice
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice)
        return console.log("It's a draw!")
    if ((humanChoice == 'rock' && computerChoice == 'scissors')
        || (humanChoice == 'paper' && computerChoice == 'rock')
        || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
    }
}

const playGame = () => {
 
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if (humanScore == computerScore)
        console.log("It's a draw!")
    else if (humanScore > computerScore)
        console.log('Human wins!')
    else
        console.log('Computer wins!')
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
}


playGame()