//* Now lets targetthe first Team A all memebers 

let TeamAPoints_H1 = document.querySelector("#TeamA_Points");

let twoPointsBtn_TeamA = document.querySelectorAll(".teamA_buttons")[0];
let threePointsBtn_TeamA = document.querySelectorAll(".teamA_buttons")[1];
let submitBtn_TeamA = document.querySelectorAll(".teamA_buttons")[2];

// Accessing the final menue 
let finalResultBtn = document.querySelector("#final-result");

let spanAllDetailsOfMatch = document.querySelector("#All_Match_Details");



// console.log(twoPointsBtn_TeamA);
// console.log(threePointsBtn_TeamA );
// console.log(submitBtn_TeamA);





//* Team B All members 

let TeamBPoints_H1 = document.querySelector("#TeamB_Points");

let twoPointsBtn_TeamB = document.querySelectorAll(".teamB_buttons")[0];
let threePointsBtn_TeamB = document.querySelectorAll(".teamB_buttons")[1];
let submitBtn_TeamB = document.querySelectorAll(".teamB_buttons")[2];



// lets first add the all the event listners for the buttons of the team A 

let teamATotalPoints = 0;

let teamAFinalScore = 0 ;
let teamBFinalScore = 0 ;




twoPointsBtn_TeamA.addEventListener("click" , ((event) => {
    teamATotalPoints += 2;

    //change in the UI 
    TeamAPoints_H1.innerHTML = teamATotalPoints;

    // console.log(teamATotalPoints);
    
}))


//for 3 points 

threePointsBtn_TeamA.addEventListener("click" , ((event) => {
    teamATotalPoints += 3;

    //change in the UI 
    TeamAPoints_H1.innerHTML = teamATotalPoints;

    // console.log(teamATotalPoints);
    
}))


submitBtn_TeamA.addEventListener("click" , ((event) => {

    teamAFinalScore = teamATotalPoints;
    console.log(teamAFinalScore);

    
}))





// !For Team B 

let teamBTotalPoints = 0;



twoPointsBtn_TeamB.addEventListener("click" , ((event) => {
    teamBTotalPoints += 2;

    //change in the UI 
    TeamBPoints_H1.innerHTML = teamBTotalPoints;


    
}))


//for 3 points 

threePointsBtn_TeamB.addEventListener("click" , ((event) => {
    teamBTotalPoints += 3;

    //change in the UI 
    TeamBPoints_H1.innerHTML = teamBTotalPoints;


    
}))


submitBtn_TeamB.addEventListener("click" , ((event) => {

    teamBFinalScore = teamBTotalPoints;
    console.log(teamBFinalScore);

    
}))



// !Now I have to add the event listner on the final result button ans decide who won the basketball match 



finalResultBtn.addEventListener("click" , ((event) => {

    //here either the team A will won or team B will won or match will get tie
    if(teamAFinalScore > teamBFinalScore){
        //then team A won 
        spanAllDetailsOfMatch.innerHTML = `Team A Won 
                                            Team A total Score ${teamAFinalScore}
                                            Team B total Score ${teamBFinalScore}`;


         //change the count 
         teamATotalPoints = 0 ;
         teamBTotalPoints = 0 ;
         TeamAPoints_H1.innerHTML = teamATotalPoints;
         TeamBPoints_H1.innerHTML = teamBTotalPoints;                                   




    } 
    else if(teamBFinalScore > teamAFinalScore){
        // then team B won 
        spanAllDetailsOfMatch.innerHTML = `Team B Won 
                                            Team A total Score ${teamAFinalScore}
                                            Team B total Score ${teamBFinalScore}`;

         //change the count 
         teamATotalPoints = 0 ;
         teamBTotalPoints = 0 ;
         TeamAPoints_H1.innerHTML = teamATotalPoints;
         TeamBPoints_H1.innerHTML = teamBTotalPoints;                                   
    }
    else if(teamAFinalScore === teamBFinalScore){
        //then match tie 
        spanAllDetailsOfMatch.innerHTML = `Match is Tie lets Play again 
                                            Team A total Score ${teamAFinalScore}
                                            Team B total Score ${teamBFinalScore}`;


         //change the count 
         teamATotalPoints = 0 ;
         teamBTotalPoints = 0 ;
         TeamAPoints_H1.innerHTML = teamATotalPoints;
         TeamBPoints_H1.innerHTML = teamBTotalPoints;                                      
    }

}))





