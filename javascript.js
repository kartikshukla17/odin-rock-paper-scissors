function getComputerChoice() {
    let computerchoice = Math.random();
    if (computerchoice < 0.33) {
        computerchoice = "rock";
    } else if (computerchoice < 0.66) {
        computerchoice = "paper";
    } else {
        computerchoice = "scissors";
    }
    console.log(computerchoice);
    return computerchoice;
}

function getHumanChoice(){
    let humanchoice = parseInt(prompt("enter your choice(1,2,3): "));
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
}

let humanScore = 0
let computerScore = 0

function playRound(humanchoice, computerchoice){
    if (humanchoice == computerchoice){
        console.log("tie")
    }else if (humanchoice == "stone" && computerchoice == "scissors"){
        console.log("You won!")
        humanScore += 1
    }else if (humanchoice == "stone" && computerchoice == "paper"){
            console.log("You loose")
            computerScore +=1
    }else if (humanchoice == "paper" && computerchoice == "scissors"){
            console.log("You loose!")
            computerScore +=1
    }else if (humanchoice == "paper" && computerchoice == "stone"){
            console.log("You won")
            humanScore += 1
    }else if (humanchoice == "scissors" && computerchoice == "stone"){
            console.log("You loose!")
            computerScore +=1
    }else if (humanchoice == "scissors" && computerchoice == "paper"){
            console.log("You won")
            humanScore += 1
    }else {
        console.log("wrong input")
    }
}

function playGame(){
    let humanchoice = getHumanChoice()
    let computerchoice = getComputerChoice()

    return playRound(humanchoice,computerchoice)
}
for (let i=0 ; i<5 ; i++){
    return playGame()
}

console.log('final scores: Human: ${humanScore}, Computer: ${computerScore}')
if (humanScore > computerScore){
    console.log("you won")
} else if (humanScore < computerScore){
    console.log("you loose")
} else {
    console.log("tie!")
}