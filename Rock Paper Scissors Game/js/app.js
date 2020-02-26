// Setting DOM variables
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let btn = document.getElementById('reset');

function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click', () => game("s"));
}

function game(playerChoice) {
	const computerChoice = getComputerChoice();
	switch (playerChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(playerChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(playerChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(playerChoice);
			break;
	}
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = (Math.floor(Math.random()*3));
	return choices[randomNumber];
}

function win(player, computer) {
	playerScore++;
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	const smallerPlayer = "player".fontsize(3).sub();
	const smallerComp = "comp".fontsize(3).sub();
	result_p.innerHTML = `${changeToWord(player)}${smallerPlayer} beats ${changeToWord(computer)}${smallerComp}. You WIN!`;
	document.getElementById(player).classList.add('green-glow');
	setTimeout(function(){document.getElementById(player).classList.remove('green-glow') }, 300);
}

function lose(player, computer) {
	computerScore++;
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	const smallerPlayer = "player".fontsize(3).sub();
	const smallerComp = "comp".fontsize(3).sub();
	result_p.innerHTML = `${changeToWord(player)}${smallerPlayer} loses to ${changeToWord(computer)}${smallerComp}. You Lost!`;
	document.getElementById(player).classList.add('red-glow');
	setTimeout(() => document.getElementById(player).classList.remove('red-glow'), 300);
}

function draw(player) {
	result_p.innerHTML = "It's a draw";
	document.getElementById(player).classList.add('gray-glow');
	setTimeout(() => document.getElementById(player).classList.remove('gray-glow'), 300);

}

function changeToWord(letter) {
	if (letter === "r"){
		return "Rock";
	} 
	else if (letter === "p"){
		return "Paper";
	} 
	return "Scissors";
}

main();

btn.addEventListener('click', function(){
	playerScore = 0;
	playerScore_span.innerHTML = playerScore;
	computerScore = 0;
	computerScore_span.innerHTML = computerScore;
});