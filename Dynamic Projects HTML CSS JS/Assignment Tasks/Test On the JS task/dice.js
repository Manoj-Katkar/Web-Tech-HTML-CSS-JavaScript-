// !Now I have to access the elements on which I have to perform the modification 

let startBtn = document.querySelector("#start");

let playerScoreH2 = document.querySelector(".player1Score");
let computerScoreH2 = document.querySelector(".player2Score");

let resultPara = document.querySelector("#Result");


// !Now I have to add the event listner on the startBtn 

let playerScore = 0;
let computerScore = 0 ;

startBtn.addEventListener("click" , (event) => {

    playerScore = Math.ceil(Math.random() * 6);

    computerScore = Math.ceil(Math.random() * 6);

    // !Now I have to update in the UI 
    playerScoreH2.innerHTML = playerScore;

    computerScoreH2.innerHTML = computerScore;

    console.log(playerScore);
    console.log(computerScore);

    // !Now I have to compare the numbers I have to check who won the match 
    if(playerScore === computerScore){
        resultPara.innerHTML = "Match is Tie please play Again";
    }
    else if(playerScore > computerScore){
        // *then player won the match 
        resultPara.innerHTML = `player won the match by ${playerScore - computerScore} points`;
    }
    else if(computerScore > playerScore){
        //*then the computer won the match 
        resultPara.innerHTML = `Computer won the match by ${computerScore - playerScore} points`;


    }else{
        alert("Please Click on the start Button to start Match");
    }

    
})