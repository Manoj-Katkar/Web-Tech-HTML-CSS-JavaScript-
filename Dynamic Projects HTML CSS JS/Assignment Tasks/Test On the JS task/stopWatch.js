

// !Now access the all the buttons over here 
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let timeH1 = document.querySelector("#timeIncrease");

// !Now I have to take the one variable that will get increse by the after 1 second 

let timeCount = 0 ;

let clearIntervalId = -1;

startBtn.addEventListener("click" , (event) => {

    let intervalId = setInterval(() => {
        timeCount++;
        timeH1.innerHTML = timeCount;

        //update the interval id also 
        clearIntervalId = intervalId;

    } , 1000);

});


stopBtn.addEventListener("click" , (event) => {
    //!then I have to use clearInterval Id 
    clearInterval(clearIntervalId);
})




resetBtn.addEventListener("click" , (event) => {
    timeCount = 0;

    timeH1.innerHTML = timeCount;
})



