
let message = document.getElementById("message")
let player1dice = document.getElementById("player-1-dice")
let player2dice = document.getElementById("player-2-dice")
let player1scoreboard = document.getElementById("player-1-score")
let player2scoreboard = document.getElementById("player-2-score")
let rollButton = document.getElementById("rollBtn")
let resetButton = document.getElementById("resetBtn")

let player1score = 0
let player2score = 0
let player1turn = true

function messageChange(m){
    message.textContent = m
}

function player1ScoreChange(s) {
    player1scoreboard.textContent = s
}

function player2ScoreChange(s) {
    player2scoreboard.textContent = s
}

function player1DiceChange(n){
    player1dice.textContent = n
}

function player2DiceChange(n){
    player2dice.textContent = n
}

function diceNumber(){
    return Math.floor(Math.random() * 6) + 1

}
function resetBtnDisplay(){
    resetButton.style.display = "block"
    rollButton.style.display = "none"
}
function rollBtnDisplay(){
    resetButton.style.display = "none"
    rollButton.style.display = "block"
}
function comparison(one, two){
    if(one >=20){
        messageChange("Player 1 win!")
        resetBtnDisplay()

    }else if(two >= 20){
        messageChange("Player 2  win!")
        resetBtnDisplay()
    }
}

function resetGame(){
    if(confirm("Are you sure?")){
        player1score = 0
        player1ScoreChange(player1score)
        player1DiceChange("-")
        player2score = 0
        player2ScoreChange(player1score)
        player2DiceChange("-")
        let player1turn = true
        messageChange("Player 1 Turn")
        rollBtnDisplay()
    }
   
}


/* roll the dice primary function */


function rollDice(){
    if(player1turn){
        messageChange("Player 2 Turn")
        let dice = diceNumber()
        player1score += dice
        player1DiceChange(dice)
        player2dice.classList.add("boxshadow")
        player1ScoreChange(player1score)
        player1dice.classList.remove("boxshadow")
        player1turn = false
    }else{
        messageChange("Player 1 Turn")
        let dice = diceNumber()
        player2score += dice
        player2DiceChange(dice)
        player2ScoreChange(player2score)
        player1dice.classList.add("boxshadow")
        player2dice.classList.remove("boxshadow")
        player1turn = true
    }

    comparison(player1score, player2score)
}

