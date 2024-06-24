

// we can access the data in the multiple files because it got saved into the database hence database is same for all 

let objFromStorage = localStorage.getItem("jsonObj2");

console.log(objFromStorage);  //* this is in the string format I have to convert it into the object use parse method

console.log(typeof objFromStorage);  //*string

let objInFormObject = JSON.parse(objFromStorage);

console.log(objInFormObject);

console.log(typeof objInFormObject);   //* here it is object because we converted it into the object using the parse method of the JSON


// !Now How to remove the data from the local Storage

localStorage.removeItem("Course");  //*here the pair with the key Course will be removed


// !Now lets remove obj3 which is not in the form of the string

localStorage.removeItem("obj3");  //*here the object with key obj3 will be removed


// !IMP Notes for database for local storage 
/**
 ** to add the data in the local storage 

* ^ localStorage.setItem("key" , value);



    //* to get the data from the storage 

    *^ localStorage.getItem("key");



    // *to delete the data from the local storage database 

    *^ localStorage.removeItem("key");




    // *to convert the any data in the actual string as it is 

    *^ JSON.stringify(variable_name_that_ShouldConvertedToString);




    // *to get the data in the original format while getting the data from the local storage that will be in the form of the string so to convert it into javascript original data 

    *^ JSON.parse(variable_name)





    ** to remove the all the data from the local storage 

    * ^localStorage.clear();


    // !to get the length of the local storage 

    *^  console.log(localStorage.length);

    // !to get the one key from the local storage that we are targetting 

    *^ console.log(localStorage.key("obj1"));

    
    *! Note : it will try to convert the all the data in the form of the string while seting the data in the local storage but it will be not in the actual structure hence use stringfy() method of the JSON 



 */


// NOw I have to remove the all pairs from the databse all data I wanted to remove 

// localStorage.clear();

// learned about the local storage methods all methods notes are there in the storage2.js file


// !Learning the session Storage 
// ^ session storage is only for that session once the that tab is closed then that data will be gone 

let a = "I am string";

let obj = {
    product : "AC",
    price : "20000"
}

let arr = [1 , 2 , 3 , 4 , 5];

// sessionStorage.setItem("str" , a );


let jsonObj = JSON.stringify(obj);

sessionStorage.setItem("obj" , jsonObj);

// now lets add the array to the session storage 

let jsonArray = JSON.stringify(arr);

sessionStorage.setItem("arr" , jsonArray);

// !usecase of the session storage : 
// ^to create the capcha 
// ^to create the otp


// !now acess the value of the session storage 

let objInStringFormat = sessionStorage.getItem("obj");

console.log(objInStringFormat , typeof objInStringFormat);

// !now to get the object in the javascript original format 

let convertedObj = JSON.parse(objInStringFormat);

console.log(convertedObj , typeof convertedObj);

// !now get the Array from te session storage 

let arrFromSession = sessionStorage.getItem("arr");

// now convert it into the original Array format 

let convertedArray = JSON.parse(arrFromSession);

console.log(convertedArray);



// !let remove the one object that is Array 

sessionStorage.removeItem("arr");

// !to clear the all storage use .clear() method 

