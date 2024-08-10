// targetting the html elements on which I have to work dynamically 

let inputTag  = document.querySelector("input");

let paraToDisplay = document.querySelector("p");

let reversedString = "";

inputTag.addEventListener("input" , (event) => {

    paraToDisplay.innerHTML = "";

    reversedString = "";

    let currentString = inputTag.value;

    // !I have to get the last character that is entered by the user

    let length = currentString.length;

    for(let i = length - 1 ; i >= 0 ; i--){
        reversedString += currentString[i];
    }

    paraToDisplay.innerHTML = reversedString;
    
})