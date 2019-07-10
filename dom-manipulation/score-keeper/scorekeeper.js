var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton=document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var p1count = document.getElementById("p1counter");
var p2count = document.getElementById("p2counter");
var gameOver = false;
var winningScore = 5;
var numInput = document.getElementById("numInput");
var p = document.querySelector("p")
var winningScoreDisplay = document.querySelector("p span")
// var input = document.querySelector("input")


//a lot of redundant code, will come back and refactor code into JS functions. 

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score ++;
        // console.log is for debugging when values return a string instead of a number //
        console.log(p1Score, winningScore)
        if (p1Score === winningScore){
            console.log("Game Over!")
            p1count.classList.add("winner")
            gameOver = true;
        }
        p1count.textContent = p1Score
    }
})

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score ++;
        console.log(p1Score, winningScore)
        if(p2Score === winningScore){
            console.log("Game Over!")
            p2count.classList.add("winner")
            gameOver = true;
        }
    }
    p2count.textContent = p2Score
})

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1count.textContent = 0;
    p2count.textContent = 0;
    p1count.classList.remove("winner")
    p2count.classList.remove("winner")
    gameOver = false;
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1count.textContent = 0;
    p2count.textContent = 0;
    p1count.classList.remove("winner")
    p2count.classList.remove("winner")
    gameOver = false;
}
