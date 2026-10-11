let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#result");

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    return choices.at(Math.floor(Math.random() * 3))
}

const playRound = (humanChoice, computerChoice) => {
    const text = document.createElement('p');
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice)
        text.textContent = "It's a draw!";
    else if ((humanChoice == 'rock' && computerChoice == 'scissors')
        || (humanChoice == 'paper' && computerChoice == 'rock')
        || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore++;
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        }
    else {
        computerScore++;
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
    const scores = document.createElement('span');
    scores.textContent = ` (Human Score: ${humanScore}\nComputer Score: ${computerScore})`;
    text.appendChild(scores);
    container.appendChild(text);

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(e.target.textContent);
        playRound(e.target.textContent, getComputerChoice());
    })
})


