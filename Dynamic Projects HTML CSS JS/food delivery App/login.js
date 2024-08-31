// Now to compare the userName ans Password of that user Name I have to access that from the user Name 


let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let eUser = document.querySelectorAll("span")[0];
let ePass = document.querySelectorAll("span")[1];
let eForm = document.querySelectorAll("span")[2];

console.log(form, userName, password, eUser,ePass,eForm);

// !getting the data from the local storage 

let dataFromStorage = JSON.parse(localStorage.getItem("AllUsersData"));

console.log(dataFromStorage);







form.addEventListener("submit" , (event) => {

    // first make the everything empty 
    eUser.innerHTML = "";
    ePass.innerHTML = "";
    eForm.innerHTML = "";

    // event.preventDefault();

    // here check if the data from the local storage is empty means null then I have to move user to first signUp 



    // matching the data is also the one object 
    let matchedData = dataFromStorage.find((currentElement) => {
        if((currentElement.phoneNum == userName.value) && (currentElement.pass == password.value) || ((currentElement.email == userName.value) && (currentElement.pass == password.value)) 
            ||  ((currentElement.firstN == userName.value) && (currentElement.pass == password.value)) ){
            // means returning that object of the having all the details .
            flag = 1;
            return currentElement;
        }

    })


    




    if(userName.value === "" && password.value === ""){
        eUser.innerHTML = "Enter the email or Mobile Number";
        ePass.innerHTML = "Enter the password";

        event.preventDefault();
    }
    else if(userName.value === ""){
        eUser.innerHTML = "Enter the email or Mobile Number";
        event.preventDefault();
    }
    else if(password.value === ""){
        ePass.innerHTML = "Enter the password";
        event.preventDefault();
    }
    else if(matchedData){
        alert("Welcome to the page");

        //* here the user match data object then only that one data should store inside the localStorage 
        localStorage.setItem("currentUserZomato" , JSON.stringify(matchedData));
    }
    else{
        eForm.innerHTML = "Match Not Found";
        event.preventDefault();

    }
})





//* Accessing the password h3
let h3 = document.querySelector("h3");

h3.addEventListener("click" , (event) => {
    if(h3.innerHTML == "show"){
        password.type = "text";
        h3.innerHTML = "hide";
    }
    else{
        h3.innerHTML = "show";
        password.type = "password";

    }
})