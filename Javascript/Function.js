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


// ! 11/06/24 More About the Functions 

function result(){

}
// ^ to perform addition 

function add(a , b){
    console.log("Addition is : " + (a+b));
}

add(10 , 20);

// *console is object and log is the method 





// !higher order function : 
/*
* if a function accepting another function as the argument or returning another function that is known as 
* Higher Order Function(HOF) 
*/


// !call-back function
// *A function which is passed as the argument to another function that is call-back function


// *Examples 

function abcd(a , b , diff){    //*HOF 
    console.log(diff);    //* it will have the entire sub function 
    diff(a , b);
}


function sub(a , b){                 //*call-back function

    console.log(a - b);
}

abcd(100 , 50 , sub);


// ?Another Example 

function result1(a , b){

    return mul(a , b);   //*it is returning another function hence it is also HOF
}

function mul(x , y){
    console.log(x * y);
}

result1(10 , 60);




// !Nested Function 
// *Function inside Another Function is Nested Function 

let a = 50; 

function nestedOuter(){

    console.log(a);

    var b = 70;

    nestedInner();   //*because of the hosting we can before its declared 

    function nestedInner(){
        console.log("NestedInner Function : " + a , b);  // 50 , 70

        let c = 80;   //*I can access it within the inner function ifself 
    }

    // call the inner function
    // nestedInner();

    // console.log(a);  //*50
    // console.log(b);  //*70
    // console.log(c);  //*Referance Error Not defined cannot access inner variable to outer function

}

nestedOuter();







// ! Scope Chaining (Very IMP Topic) it is Mechanism
// ?(How it will look for the varaibles)
// *the process of loking for varaibles from the inner to their parent one by one this process is know as Scope Chaining 
// * if it will find the varaible for any parent scope then it will stop there only 
// *first it will search the varaible in innermost Scope , if it is not there it will look for parent Scope , if it is not in parent Scope Same Way it will look till outerMost Scope that is Global Scape , 
// *then also it is not there then we will get the referance error means it is not defined itself 


// ^ Example :


let num1 = 10;

function outerFun(){

    let num2 = 50;
    let num1 = 400;

    function innerFun(){
        let c = 100;
        let b = 800;

        console.log(num1);   //400
        console.log(b);       // 800
        // console.log(d);  // error Not Defined 
     }

    innerFun();
}

outerFun();

