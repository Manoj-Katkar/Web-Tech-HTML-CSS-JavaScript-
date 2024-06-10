// !Named Function 
// &Note : Hosting will be possible for the Named Function only in javascript

function abc(num1 , num2 , num3){
    console.log("Inside the Name Function ");

    return "great you are learning Function"
}

let value = abc(10 , 20 , 30);
console.log(value);


// !Annonymous Function 
// ^ A function without a Name is Known as Annonymous Function 

// *Syntax 
// function(){

// }

// !Note : Directlly  we cannot write the Annonymous Function  we have to use it along with Function with Experesion



// ! Function with Experesion
// ^ if we are storing the function inside the variable is know as Function with Experation 
// *Syntax 
// let demo = function(){    //same we can do for named function 

// }

let demo = function(){
    console.log("hiiiiii I am function with experation");

    return 120;
}

// * how to call using the variable Name we have to call it 

demo(); 

let demoCall = demo();

console.log(demoCall);  //* it will always return the value when we call and we have to store inside the variable 

let demo2 = function cde(){  //*no need to write the name becase it is useless we cannot call by name we can call by only varible name hence use Annonymous Function
    console.log("Named Inside variable");
}
 
demo2();




// !Immediatelly Invoke Function Execution (IIFE)
// when we want to execute only one time then use IIFE
// * Here two brackets will be there   
// () = to write the function body 
// () = second one to invoke it 


(function(num5){
    console.log("I am Immediatelly Invoke Function Execution");

    console.log(num5);
})(10);




// * colourfull Comments colors 
// &
// ?
// ~


// ! Arrow Function 
// without using function keyword we can create the function and also with expression we have to create  that is Arrow function 
// ?  In Interview Also they will ask everything with respect to Arrow Function 


let arrowFunction = () => {
    console.log("I am Arrow Function ");
}

// call it using the variable Name 
arrowFunction();

//! Note : we cannot access  the Arrow function before declaration because inside the variable it is having the undefined we cannot invoke the undefined 