// for(let i = 1 ; i <= 100 ; i++){
//     console.log(i);
// }


// for(let i = 100 ; i >= 1 ; i--){
//     console.log(i);
// }

// for(let i = 20 ; i <= 50 ; i++){
//     console.log(i);
// }

// for(let i = 70 ; i >= 30 ; i--){
//     console.log(i);
// }

// ^ to add the 1 to 100 numbers using loop

// let sum = 0 ;


// for(let i = 1 ; i <= 100 ; i++){
//     sum += i;
// }

// console.log(sum);

// let sumOf200To700 =  0;

// for(let i = 200 ; i <= 700 ; i++){
//     sumOf200To700 += 200;
// }

// console.log(sumOf200To700);

// ^ even numbers total 

// let evenSum = 0 ;

// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 2 == 0){
//         evenSum += i;
//     }
// }

// console.log("Sum of the Even Numbers from 1 to 100  = " + evenSum);

// ^ 200 to 500 odd numbers sum 

// let oddSumOf200To500 = 0 ;


// for(let i = 200 ; i <= 500 ; i++){
//     if(i % 2 === 1){
//         oddSumOf200To500 += i;
//     }
// }

// console.log("200 to 500 odd numbers total = " + oddSumOf200To500);



// ^ 300 to 700 total numbers divisible by 6 

// let SumOf300To700 = 0 ;


// for(let i = 300 ; i <= 700 ; i++){
//     if(i % 6 === 0){
//         SumOf300To700 += i;
//     }
// }

// console.log("SumOf300To700 divisible by 6 = " + SumOf300To700);

// ! how to call the function which is declared inside object 

// ^ by using the object referance you are calling the function then it will called as the method 


// let obj1 = {
//     x : 100,
//     name : "Manoj",
//     fun : function abc(){
//         console.log("Bye");
//     }
// }

// calling the property of the object 
// console.log(obj1.name);   //*here name is the property

// function xyz(){
//     console.log("Hi");
// }

// ^ above function we can call it directlly 
// xyz();

// ! Now if I want to call the function which is declared inside the object 
// !then it will be not treated as the function it will be treated as the method 

// obj1.fun();



// ! Numbers 

// * Inbuilt properties of Numbers 

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY); //^Infinity


console.log(Number.NEGATIVE_INFINITY);  //^ -Infinity
// ^ for Numbers range 
// ^ Min-Value  : 5 * 10 ^ -324  
// ^ Max -Value : 1.8 * 10 ^ 308


// * Inbuilt methods of Numbers 

let a = "Manoj";
let isFollow = false;    //^ internally false and true are number only 

let num1 = 89;

let d = null;

let e ;

// create the one object also 
let obj2 = {
    x : 1000,
};

// create the one Array 

let arr = [ 1 , 2 , 3 , 4];

// * to check the whether the given value is number or not 
// ^ isFinite() : it will check the whether given passed value is number or not 
//  ^ ifNaN() : it will check whether the pass value is Not a Number or Not 

// console.log(isFinite(a));

// console.log(isFinite(isFollow));

// console.log(isFinite(num1));

// console.log(isFinite(d)); // true because null means 0 empty 

// console.log(isFinite(e));   //false 

// console.log(isFinite(obj2));  //false 

// console.log(isFinite(arr));  //false 

// console.log("10" - "8");

// !NaN()

console.log(isNaN(a));  //true

console.log(isNaN(isFollow));  //false

console.log(isNaN(e));  //true


// *to convert the Numeric String into actual Number 

// let str = "1247";

// let num2 = parseInt(str);

// console.log(num2);
// console.log(typeof num2);


// let str2 = "10245.668";

// let floatingNum = parseFloat(str2);

// console.log(floatingNum);

// console.log(typeof floatingNum);



// *Now for methods 

let num3 = 45785.36974;


// to get the floating number till the 2 digit after the decimal 

console.log(num3.toFixed(2));

// * now when I want the number in the power of the 10

let b = 100000;

console.log(b.toExponential());   // ^1 * 10 ^ 5

