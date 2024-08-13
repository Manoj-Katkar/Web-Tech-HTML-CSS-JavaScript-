
let form = document.querySelector("form");

let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let phoneNumber = document.querySelectorAll("input")[3];
let createPassword = document.querySelectorAll("input")[4];
let confirmPassword = document.querySelectorAll("input")[5];

// firstName lastName  email  phoneNumber createPassword  confirmPassword

// !Access the all the span tags 
// !here e represent the error for all the input tags 
let eFirst = document.querySelectorAll("span")[0];
let eLast = document.querySelectorAll("span")[1];
let eEmail = document.querySelectorAll("span")[2];
let ePhoneNumber = document.querySelectorAll("span")[3];
let eCreatePass = document.querySelectorAll("span")[4];
let eConfirmPass = document.querySelectorAll("span")[5];

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(phoneNumber);
console.log(createPassword);
console.log(confirmPassword);




console.log(eFirst);
console.log(eLast);
console.log(eEmail);
console.log(ePhoneNumber);
console.log(eCreatePass);
console.log(eConfirmPass);

// !creating the one empty array to store the each user data in the form of the array 
// !I can store the multiple values in  the form of the object 

let storage = [];


let dataFromStorage = JSON.parse(localStorage.getItem("details"));


//*here we are doing like appending in the array

if(dataFromStorage){
    storage = dataFromStorage;
}



// Adding the event on the form 

form.addEventListener("submit" , (event) => {
    // I have to restrict the default behaviour of the form 

    //* cheking for the new mobile number that is entered by the user is already exist or not in the local storage array  memory 
   
    let mobileNumberCheck = storage.find((element) => {
        if(element.phoneNum === phoneNumber.value){  //*cheking with already exist mobile with user typed mobile number
            return element;
        }
    })

    // *Now check that user is typing the same email id again 
    let newEmailExistInStorage = storage.some((element) =>{
        if(element.email ===  email.value){
            return true;
        }
    })


    // flag taken to add the data in the local storage
    let flag = true;

    
     


    // !How to create the regular expression  (very Important)
    // (^) = used to start the expression
    // ($) = used to end the expression 
    //^ input from the user = [] (square bracket)
    //^ user length for input = {mincharCount , maxCharCount}  (//*No space is allwed)

    let regx = /^[a-zA-Z]{1,17}$/


    // !first Name validation

    if(firstName.value === ""){
        //^ then the form should not be submitted 
        event.preventDefault();

    // ^and error should display in the UI 
        eFirst.innerHTML = "enter the first name";


        flag = false;
        
    }
    else if(regx.test(firstName.value)){
        // if there is no error so make it empty 
        eFirst.innerHTML = "";

        // and form also should be get submitted 
    }
    else{
        // means test given the false value in return 
        eFirst.innerHTML = "Invalid first name";
        event.preventDefault();

        flag = false;
    }






    // !last Name validation

    if(lastName.value === ""){
        //^ then the form should not be submitted 
        event.preventDefault();

    // ^and error should display in the UI 
        eLast.innerHTML = "enter the last name";

        flag = false;
        
    }
    else if(regx.test(lastName.value)){
        // if there is no error so make it empty 
        eLast.innerHTML = "";

        // and form also should be get submitted 
    }
    else{
        // means test given the false value in return 
        eLast.innerHTML = "Invalid last name";
        event.preventDefault();


        flag = false;
    }




    // !Email validation
    // here we are not using the regular expression because already by default validation is done via html
    if(newEmailExistInStorage){
        eEmail.innerHTML = "Email Id Already Exist";

        event.preventDefault();

        flag = false;
    }
    else if(email.value === ""){
        eEmail.innerHTML = "Enter the Email";

        //make sure that form should not get submitted 
        event.preventDefault();

        flag = false;
    }
    else{
        eEmail.innerHTML = "";
    }


    // !mobile validation 
    // in india mobile number starts with  9 , 8 , 7, 6 (and having the +91 as suffix )

    // mobile regular expresion 

    let mobileRegx = /^[6-9][0-9]{9}$/    //*[6-9 (it will take one number)] other rest nine numbers 

    if(mobileNumberCheck){
        ePhoneNumber.innerHTML = "Mobile Number is Already exist";
        event.preventDefault();

        flag = false;

    }
    else if(phoneNumber.value === ""){
        //it is error 
        ePhoneNumber.innerHTML = "Enter Phone Number";

        event.preventDefault();

        flag = false;

    }
    else if(mobileRegx.test(phoneNumber.value)){
        //true means it is proper 10 digits 
        ePhoneNumber.innerHTML = "";
    }
    else{
        ePhoneNumber.innerHTML = "Invalid Phone Number";

        // ^and I have prevent the default behaviour of  the event 
        event.preventDefault();


        flag = false;
    }






    // !create password validation

    // ^regular expression for password 
    let regPassword = /^[a-zA-Z0-9!@]{6,15}$/

    if(createPassword.value === ""){
        eCreatePass.innerHTML = "Enter the password";
        event.preventDefault();


        flag = false;
    }
    else if(regPassword.test(createPassword.value)){
        // true means there is no error 
        eCreatePass.innerHTML = "";
    }
    else{
        // means the invalid password 
        eCreatePass.innerHTML = "Invalid Password";

        event.preventDefault();


        flag = false;
    }


    // !confirm password validation

    if(confirmPassword.value === ""){
        eConfirmPass.innerHTML = "Enter the Correct the password";
        event.preventDefault();


        flag = false;
    }
    else if(confirmPassword.value === createPassword.value){
        // means it is correct password entered by the user in the confirm password filed 
        eConfirmPass.innerHTML = "";
    }
    else{
        eConfirmPass.innerHTML = "Entered password is not Matching please enter again";
        event.preventDefault();


        flag = false;
    }






// !Storing the data in the local storage 
// firstName lastName  email  phoneNumber createPassword  confirmPassword
// ^Approach to store the data in the local storage using t he flag means when the error is there from the user for the input value then it will not accept the wrong values 
// ^but whenever the flag is true means no error from user site 

if(flag){

    let details = {
        firstN : firstName.value,
        lastN :lastName.value,
        email :email.value,
        phoneNum : phoneNumber.value,
        pass : confirmPassword.value
    }



    // !adding the data in the local storage using the Array 
    storage.push(details);

    // adding the data in the local storage 
    localStorage.setItem("details" , JSON.stringify(storage));

    console.log(details);
}















})

// localStorage.clear();