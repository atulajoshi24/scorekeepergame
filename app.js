
var player1score = 0;
var player2score =0 ;
var playToScore = 5; 

function processPlayer1Score(){

    if(isScoreEqualToPlayToScore(player1score,player2score)){
        return;
    }else{
        player1score++;
        updateScore(player1score,"player1");
    }

}

function processPlayer2Score(){
    
    if(isScoreEqualToPlayToScore(player1score,player2score)){
        return;
    }else{
        
        player2score++;
        updateScore(player2score,"player2");
    }

}

function isScoreEqualToPlayToScore(score1,score2){
    return (score1 === playToScore) || (score2 === playToScore);
}

function reset(){

    player1score = 0;
    player2score = 0;
    playToScore = 5; 

    document.getElementById("player1"+"-"+"score").textContent = 0;
    document.getElementById("player2"+"-"+"score").textContent = 0;
    document.getElementById("player1"+"-"+"score").classList.remove("winner");
    document.getElementById("player2"+"-"+"score").classList.remove("winner");
    document.querySelector('#playToScore span').textContent = playToScore;
    document.querySelector('#playToInput').value = 0;
}

function updateScore(score,playerNo){
 
    document.getElementById(playerNo+"-"+"score").textContent = score;
    if(isScoreEqualToPlayToScore(score)){
        document.getElementById(playerNo+"-"+"score").classList.add("winner");
    }
    
}

function updatePlayToScore(event){

    console.log(typeof event.target.value);
    playToScore = parseInt(event.target.value);
    document.querySelector('#playToScore span').textContent = playToScore;

}

document.getElementById("player1-btn").addEventListener("click",processPlayer1Score);
document.getElementById("player2-btn").addEventListener("click",processPlayer2Score);
document.getElementById("reset-btn").addEventListener("click",reset);
document.querySelector('#playToInput').addEventListener("change",updatePlayToScore);

