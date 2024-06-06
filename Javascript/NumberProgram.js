// ! Template literals

let a = "I am from";
let b = "Lalbagh";

console.log(a.concat(" " , b));

// ^ How to concat using the pactics =  we cann acess the varibles representing the strings within the String we can Access it 
// ! in javascript we can access the variables within the string using the pactics 
// !Syntax ${}

console.log(`${a} ${b}`);  // *but here I can acess the variables which are having the string value within the pactics then it will get concatinated  

console.log("${a} ${b}");   // *here it will be treated as the string and same content will be displayed 
console.log('${a} ${b}');   // *here it will be treated as the string and same content will be displayed 


// ! performing some opearations 

let num1 = 10;
let num2 = 80;

// ^ performing the addition using the pactics 

console.log(`Addition between the two numbers : ${num1 + num2}`);


// ! now writing the multiple lines using the pactics only we can perform 

let firstName = "Manoj";
let age = 23 ;
let place = "Mumbai";


console.log(`firstName is ${firstName} age is ${age} place is ${place}`);


// ^ now using the multilines 
console.log("Using multilines");

console.log(`firstName is ${firstName}
age is ${age} 
place is ${place}`);




// ! How to generate the Numbers 

let decimalNumber = 10.58968;    //*if it is more than 5 then it will round to the bigger value 

let intValue = parseInt(decimalNumber);

console.log(intValue);  //*10

// * Another way to convert into the int number 

console.log(Math.round(decimalNumber)); // *11  it will do the both 


console.log(Math.floor(decimalNumber));  // *10

console.log(Math.ceil(decimalNumber));



let num3 = 42.05;

console.log(parseInt(num3));   //42

console.log(Math.floor(num3));  //42

console.log(Math.ceil(num3));  //43

console.log(Math.round(num3));  //* it will do the both condition checking >= 0.5 then ceil  or < 0.5 it will return 42 that is floor 




// ! square root 

let num4 = 16;

console.log(Math.sqrt(num4));  //4

let num5 = 15;

console.log(Math.sqrt(num5));  //*3.872983346207417  to get the only two digits after the decimal then use toFixed() method

console.log(Math.sqrt(num5).toFixed(2));   //3.87


// ! to find the power of the particular number using Math.pow() Method 

console.log(Math.pow(num5 , 2));

console.log(Math.pow(num4 , 0.5));  // * here also we will get the square root of the any number
                                    // * square power = 0.5  and cube root = 0.33



let num6 = 25;

console.log(Math.pow(num6 , 2));

console.log(Math.pow(num6 , 0.5));  //5  


// ! How to generate the Numbers 

// ^ The Random Number will be generated between the 0 and 1 

let randomNumber = Math.random();

console.log(randomNumber);

// ! Now lets Create the Dice game where the numbers will be generated from the 1 to 6 then multiply by 6 

// ^ then I have to always go to the next value because I have to not consider the 0 as the value in the my dice game 
// ^ then I have to use the ceil method not round 

let randomNumberFrom1To6 = Math.ceil(Math.random() * 6);

console.log(randomNumberFrom1To6);


// ! Now lets create the game for the cards which will have the 13 cards 

console.log("Cards Game Generating  the random number for the cards ");

let randomNumberForCards = Math.ceil(Math.random() * 13);

console.log(randomNumberForCards);




// ! Numbers Programs 

// ^Q 1 : find the sum of the digits of the given Number 

let num8 = 7254;

let sumOfDigits = 0 ;


while(num8 > 0){
    let lastDigit = num8 % 10;

    sumOfDigits += lastDigit;

    num8  = parseInt(num8 / 10);  //* here I want the int value in javascript it will return the float value hence convert it into the int 
}

console.log("sum of the digits = " + sumOfDigits);  //*18


// *learned about the template literals that is bactics to do the interpolation between thw Strings  and also learn the inbuild Math Methods 



// ! Date 6 th june 2024

// !return will By default value as the undefined 

// *return will return some value and it will stop the execution 



function abc(){
    console.log("hi");
    console.log("Hello");

    return console.log("Bye");  //*return if the last line of the execution if all blocks 

    console.log("Bye Bye");    // this is not acessible 
}

abc();

function demo(){
    let a = 10;
    let b = 50;

    console.log(a , b);

    return "Kacha-Picha-return";  //*deafult value of the return is undefined 
}

// demo();

console.log(demo());


function demo2(a , b){    //*parameters 
    console.log("Hi");
    console.log(a , b);
}

demo2(50 , 30);                 // *arguments

demo2(50 , 141);

let container = demo2(500 , 600);


console.log(container);   //*undefined because the default value is undefined 



// !Function for odd and Even 

function checkNumber(a){
    if(a % 2 === 0){
        console.log(a + " is the Even Number");
    }
    else{
        console.log(a + " is the Odd Number");
    }
}

// call the function
checkNumber(10);

checkNumber(15);

// go on the HackerRank and solve the problems whether it is frontend or backend the problem solving is the most important 

// ^ Function to get the sum of the digits 


function sumOfTheDigits(a){
    let sum = 0 ;

    while(a > 0){
        // get the last digit 
        let lastDigit = a % 10;

        sum += lastDigit;

        a = parseInt(a / 10);   //*javascript will give the value in decimal by default hence take the int value use parseInt

    }

    return sum;
}

let sumOfDigit = sumOfTheDigits(19455);

console.log("sum Of Digit = " + sumOfDigit);




// ^ Reverse the given Number 

function reverseNumber(a){
    
    
    let newNumber = 0;

    while(a > 0){ 

        // *get the last digit 
        let lastDigit = a % 10;

        newNumber = newNumber * 10 +  lastDigit;

        a  = parseInt(a / 10);
    }

    return newNumber;
}


let reversedNumber = reverseNumber(10457);

console.log(reversedNumber);  // 75401



// * Using the empty String also we can do but it will take more time complexity 


function reverseNumber2(a){
    
    
    let newNumber = "";   //*by taking the empty String

    while(a > 0){ 

        // *get the last digit 
        let lastDigit = a % 10;

        newNumber = newNumber  +  lastDigit;  //^ here concatination will happen 

        a  = parseInt(a / 10);
    }

    return newNumber;
}


let reversedNumber2 = reverseNumber(10457);

console.log(reversedNumber2);  // 75401
