
let form = document.querySelector("form");

let yourName = document.querySelectorAll("input")[0];
let partnerName = document.querySelectorAll("input")[1];

let para = document.querySelector("p");



form.addEventListener("submit" , ((event) => {
    event.preventDefault();  //*to make sure form is not getting submitted 
    
    if(yourName.value === "" && partnerName.value === ""){
        alert("Please enter the Names Properlly");
    }
    else{
        let randomNumber = Math.ceil(Math.random() * 100);

        console.log(randomNumber);
        
        
        para.innerHTML = `${yourName.value} and ${partnerName.value} love percentage is ${randomNumber}`;
    }


}))
