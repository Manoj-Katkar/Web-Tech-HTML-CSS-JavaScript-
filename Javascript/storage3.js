// create one array and one object add that in the local storage 

let arr = [10 , 20 , 30 ,40 , 50];

let obj1 = {
    name : "Thala",
    age : 25,
    subject : "web-tech"
}

// NOw I have to store the array in the local storage 
// first convert it into the string but as it is with brackets so for that use JSON.stringyfy() method

let arrInStringFormat = JSON.stringify(arr);

// now add it in storage 

localStorage.setItem("arr" , arrInStringFormat);

// !Now same I have to do it for the obj1 

// convert the object as it is in the form of the string 

let objInStringFormat = JSON.stringify(obj1);



// add it in the storage 

localStorage.setItem("obj1" , objInStringFormat);

// 1 we can do it in the one line also 

// localStorage.setItem("obj1" , JSON.stringify(obj1))


// !to get the length of the local storage 

console.log(localStorage.length);

// !to get the one key from the local storage that we are targetting 

console.log(localStorage.key("obj1"));


