function getComputerChoice() {
    let computerchoice = Math.random();
    if (computerchoice < 0.33) {
        computerchoice = "rock";
    } else if (computerchoice < 0.66) {
        computerchoice = "paper";
    } else {
        computerchoice = "scissors";
    }
    console.log(computerchoice)
    return computerchoice
}

function getHumanChoice(){
    let humanchoice = parseInt(prompt("enter your choice 1(rock),2(paper),3(scissors)): "));
    if (humanchoice == 1) {
        humanchoice = "rock";
    } else if (humanchoice == 2) {
        humanchoice = "paper";
    } else if (humanchoice == 3) {
        humanchoice = "scissors";
    } else {
        console.log("Invalid Choice")
        return null;
    }
    console.log(humanchoice);
    return humanchoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanchoice, computerchoice){
    if (humanchoice === computerchoice){
        console.log("tie")
    }else if (humanchoice === "rock" && computerchoice == "scissors"){
        console.log("You won!")
        humanScore ++
    }else if (humanchoice === "rock" && computerchoice == "paper"){
            console.log("You loose")
            computerScore ++
    }else if (humanchoice === "paper" && computerchoice == "scissors"){
            console.log("You loose!")
            computerScore ++
    }else if (humanchoice === "paper" && computerchoice == "rock"){
            console.log("You won")
            humanScore ++
    }else if (humanchoice === "scissors" && computerchoice == "rock"){
            console.log("You loose!")
            computerScore ++
    }else if (humanchoice === "scissors" && computerchoice == "paper"){
            console.log("You won")
            humanScore ++
    }else {
        console.log("wrong input")
    }
}

function playGame(){
    let humanchoice = getHumanChoice()
    let computerchoice = getComputerChoice()

    playRound(humanchoice,computerchoice)
}
for (let i=0 ; i<5 ; i++){
    playGame()
}

console.log('final scores: Human: '+ humanScore + ',Computer: '+ computerScore)
if (humanScore > computerScore){
    console.log("you won")
} else if (humanScore < computerScore){
    console.log("you loose")
} else {
    console.log("tie!")
}