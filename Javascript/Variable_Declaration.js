// ^Declaring the variables using the var (Re-Declaration is possible)

// var num1 = 30;
// console.log(num1);

// var num1 = 1000;
// console.log(num1);

// let num2 = 90;
// console.log(num2);

// num2 = 450;
// console.log(num2);


// console.log(window);

// const b = 3.14;
// console.log(b);



// ^ varibles in differant Scops 
// ^ Global Scope , Block Scope , Functions Scope 

var a = 10;
let name = "Mahi";
const PI = 3.14;


console.log(name);


// ^ Block Scope

{
    var firstName = "Manoj";
    let lastName = "Yew";
console.log(name);
}

// ^Accessing the global Scope variables in the global Scopes 

console.log(firstName);
// console.log(lastName);





// ^ Function Scope

function abc(){
    // ! important point when we will declare the varible using var in function then it will be accessible in the function scope only 

    var num2 = 10;   // within the function only we can able to access variables with var keyword in function 
    let name = "Manoj";


    console.log(num2);
    console.log(name);
}

abc();

console.log(num2);  //it will throw the error because the variable declare inside the function using the var keyword that can be accessible in the function scope only 


