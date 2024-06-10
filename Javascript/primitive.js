// ! how to convert the all the numbers to the boolean datatype 

console.log(Boolean(55));  //true
console.log(Boolean(0));    //false 



console.log(Boolean([]));   //true
console.log(Boolean({}));    //true


// ^ Now lets check the false values 
console.log(Boolean(""));   //false

console.log(Boolean(NaN));    //false

console.log(Boolean(" "));   //true


// ! BigInt

console.log(Number.MAX_VALUE);  //*1.8 * 10^308 this max value cannot be handled by the Integer safelly hence use the max safe Integer 
console.log(Number.MAX_SAFE_INTEGER);


// !Integer bellow Max value cannot be handled by the Integer hence we have to use the BigInt  
// Min = -5 * 10^-324
// Max = 1.8 * 10^308               

// !Integer can handled the safe values upto below range but it will support tha above min and max value but not safelly , 
// !hence safelly handled values for Integer is below 

// Min = -2^53 - 1
// Max = 2^53 - 1

let num1 = 9907199254740991;  
console.log(num1);                     // output : 9907199254740992  // *here value will be wrong not handled properly some value is loosed 


let num2 = 9907199254740991n;   //now it can handle this value safelly 
console.log(num2);                    // output : 9907199254740991n         //* here as it is value same we will get because of the BigInt 

let num3 = BigInt(845151);   //*to convert the value in the bigInt 
console.log(num3);