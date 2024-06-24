// rest and spread operator are denoted (...)

// !In this file learned about the spread storage 

// usecase 
/**
 * *if I want a copy the one object or create the copy of the anything individually then use the spread operator 
 * *we can use it as the argument 
 * *if we want to merge the objects 
 * ! spread operator : it will spread the value of the all keys of the objects 
 */

let obj1 = {
    name : "manoj",
    age : 23
}

// let obj2 = {
//     obj1
// }

// !using spread operator

let obj2 = {
    ...obj1,
}

console.log(obj2);

// !let do it with the Array 

let arr1 = [10 , 20 , 25 , 55];

console.log(arr1);

console.log(...arr1);

// !if I want to copy the entire array as it is to the new Array means I have to create the copy of the array then I have to use the spread operator 

let arr2 = [...arr1];   //* this is copy of the array

let arr3 = [arr1];   //* this is array inside the array 

console.log("this is copy of the array 1 " , arr2);


// !how it works in the function 

function abc( x , y , z){
    console.log(x , y , z);
}

abc(arr1);  //* x = entire array , y and z = undefined 

// using the spread opearator that will sepearate the elements sepearatelly 

abc(...arr1);  //*x = 10 , y = 20 , z = 25



// !how it works on the string 

let str = "I am from Thane";

console.log(str); //*here it will be complete string format 

// !now if I want to one one character then use the spread operator 

console.log(...str);

// !now lets pass the characters in the function 
abc(...str);


// !if we want to merge the objects using the spread operator 

let obj4 = {
    name : "Raj",
    age : 20
};

let obj5 = {
    name : "Sagar",
    Minage : 25
};

// let obj5 = {
//     firstName : "Sagar",
//     minAge : 25
// };

let obj6 = {...obj4 , ...obj5};   //*it is getting override by the last obj5 because the same properties are getting overridden  


console.log("MERGED OBJECT " , obj6);


// !for merging the two arrays

let arr4 = [10 , 20 , 30];
let arr5 = [10 , 20 , 30];

let arr6 = [...arr4 , ...arr5];

console.log(arr6);

// learned about the spread operator , module how to access the line of code in differant files using the export and import keywords and module type  also learned use one default in one file that is we can use for function , object for everything but just one default in one file 



