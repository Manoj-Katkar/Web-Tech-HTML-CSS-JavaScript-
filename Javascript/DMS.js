// ! falsei values then truthy block will not ge executed 
// *undefined 
// *null 
// *0 
// *empty string = ""
// *NaN 


// ! remember the empty Array is truthy value because its type is object 




//  ^find positive number or negative 

// let a = null;

// if(a > 0){
//     console.log(a + " is positive number");
// }
// else if(a < 0){
//     console.log(a + " is the negative number");
// }
// else if(a == 0){
//     console.log(a + " is = 0 ");
// }
// else{
//     console.log("it is not a valid number");
// }

// ^ Another Example 

// let money = 50000;

// if(money >= 10000){
//     console.log("you can go to the goa");
//     money = 2000;
// }
// else{
//     console.log("I will save the money");
//     money = 60000;
// }

// console.log("Money = " + money);

// ^ New Example for the redeclare and reassign the value using the if else 

// let friendsCount = 4;

// if(friendsCount == 4){
//     console.log("you can play BGMI");
// }
// else{
//     // ^ using the let keyword 
//     // let friend5 = "Savita";
//     // let friend6 = "shubham";
//     var friend5 = "Savita";
//     var friend6 = "shubham";
// }

// ! Now lets try to access the friend5 and 6 

// console.log(friend5);    //* it will throw referance error that it is not defined 
// console.log(friend6);


// ^ playing with the var and let in differant Scope using DMS 

let x = 50;
var y = 60;

if(x){
    let x = 500;
    var y = 6000;

    console.log(x); //500
    console.log(y);  //6000
}

console.log(x);  //50
console.log(y);  //6000

// 2nd example 
// ^ odd even numbers 
let num = 10;

if(num % 2 == 0){
    console.log("it is even number");
}
else{
    console.log("it is odd number");
}

// * Extra operator === (it will check data and also the datatype)

console.log(false == 0);            // *it will check only the data
console.log(false === 0);           //* it will check the data and the data-type 

console.log("100" == 100);          //true
console.log("100" === 100);            //false 


console.log("1" == true);          //true
console.log("1" === true);            //false 