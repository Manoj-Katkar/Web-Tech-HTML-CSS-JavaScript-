// targetting the html elements 
let form = document.getElementsByTagName("form")[0];

let userName = document.querySelectorAll("input")[0];
let userPass = document.querySelectorAll("input")[1];

let eUser = document.querySelectorAll("span")[0];
let ePass = document.querySelectorAll("span")[1];


let btn = document.querySelector("button");

let anchor = document.querySelector("a");

console.log(userName);
console.log(userPass);
console.log(btn);


form.addEventListener("submit" , ((event) => {
        if((userName.value == "") && (userPass.value == "")){
            eUser.innerHTML = "Please Enter the user Name";
            ePass.innerHTML = "Please Enter the password correctlly";



            // !to prevent the default property of the g=form that is submitted use event.preventDefault();
            event.preventDefault();  //^here form is not getting submitted 





        }
        else if((userName.value === "Manoj Katkar")  && (userPass.value === "Manoj@01")){
            alert("Welcome to the page");
        }
        
}))


anchor.addEventListener("click" , ((event) => {
    
    //^it will prevent the default behaviour of the any tag here it will not redirect to the link which is assigned 

    event.preventDefault();
}) )