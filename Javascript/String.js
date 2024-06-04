// Note : All the methods will not affect the original String 

let a = "Hello";

// ^ To measure the length use length property

console.log(a.length);

console.log(a.toLowerCase());  //* to convert the String into lower case 
console.log(a.toUpperCase());   //* to convert the String into Upper case 


let strWithoutTrim = "                      Learning Javascript           ";

console.log(strWithoutTrim.length);

console.log(strWithoutTrim);

// ^ now to remove the extra space use trim method
// ! usefull when we are creating the login or the signup form 

// console.log(strWithoutTrim.trim());

//* to make the changes save it in the another variable 

let strAfterTrim = strWithoutTrim.trim();

console.log(strAfterTrim);


// ^ to search the any character in the given String 
// ! index of will accept the two arguments  ( character that we want to search , start index)



let str2 = "election t result";

// *Searching inbuild Methods for String 



console.log(str2.indexOf("r"));  //* here it will display the index of the passed character 

console.log(str2.indexOf("t"));   //* it will take the first t and give its index 

// ! search the character from the last to first right to left 

console.log(str2.lastIndexOf("t"));  //*it will search from the right to left  but it will give the index count from the left to right only 

console.log(str2.lastIndexOf("r"));  //9

console.log(str2.lastIndexOf("n"));  //7

// ^ now I want to search the t which is between from start and end 
// ^ then give the second parameter that from which index you want to search  same for the last index also 

console.log(str2.indexOf("t" , 7));  //9


console.log(str2.lastIndexOf("t" , 14));  //9




// ! whenever we want to display using the filter whether the product is starting with particular character 
// ^ it will return the boolean result 


console.log(str2.startsWith("e"));  //*this will return true 

console.log(str2.startsWith("ele"));

// ! endsWith some character 

console.log(str2.endsWith("lt"));  //true

console.log(str2.endsWith("m"));  //false

//! includes method will check whether it is existing or not in that product name 

console.log(str2.includes(" "));  //true because space is there in our string 

console.log(str2.includes("Modi"));   // false modi not contain in the election result 


// ! to access the some part of the string

// *SubString Methods

let wc = "lets hope india will win world cup";

console.log(wc.charAt(5)); // *to get the character h

let singleCharacterExtracted = wc.charAt(5);

console.log(singleCharacterExtracted);

// * another way 

console.log(wc[0]);


// ^ to access the part of the String 
// console.log(wc.substring(5 , 9));   // *last index it will not consider 

console.log(wc.substring(-1 , -3));   // substring will not accept the negative value 

console.log(wc.substring(25 , 30));   // * world




// !Slice() method 


console.log(wc.slice(5 , 9));    // *last index it will not consider 

console.log(wc.slice(0 , -1));  // *slice will accept the negative value   
                                // * - represent the index from the last one from right to left 


// ! How to convert the String to Array


let str3 = "this week mock along with css";

// *Using split method we can convert the String to Array 
// *Generally we pass the argument as the space 

console.log(str3.split(" "));    // * from the argument that we will passs from that it will be sepearated 


let arrayMock = str3.split(" ");  // it converted into the Array and we stored it 

console.log(arrayMock);



// ! merging Strings or Concatinating the Strings 


let msd = "dhoni";
let nick = "thala";

// ^ Using Concat method 

console.log(msd.concat(" " , "is " ,  nick));

// ^ using + 

console.log(msd + " "  + nick);

// ^ Another way using the template literals 