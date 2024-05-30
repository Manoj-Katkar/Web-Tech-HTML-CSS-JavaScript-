let a = 10;
let b = 2.457;

let c = -45;

let d = NaN;



console.log(a , b , c , d);
console.log(typeof a);

console.log(typeof b);

console.log(typeof c);

console.log(typeof d); // ! type of the NaN is also Number 

// ^ we can declare the String in the 3 way 

let firstName = 'Manoj';
let lastName = 'Katkar';

// ^ using double codes 

let actorFirstName = "Vijay";
let actorLastName = "Thalapathi"

console.log(firstName , lastName);
console.log(actorFirstName , actorLastName);

console.log(typeof firstName);
console.log(typeof actorLastName);


// ^ boolean

let isFollow = false;
console.log("isFollow : " + isFollow);
console.log(typeof isFollow);



// ^ undefined : when the declaration is done but initialization is not done then it will trow the undefined 

let companyName ;

console.log(companyName);
console.log(typeof companyName);

// ^ null : whenever I want to start something from the empty 

let num = null;

console.log(num);

// ! when they created the datatype at that time there was only 1 datatype that is object 

console.log(typeof num);  //*type of the null is the object because while creating the datatype at starting in javascript it was treated as the object 



// ^ BigInt : write the n after typing the big number then it will get converted into the bigInt

let num1 = 34623874230423098239823984203984032842308420482084n;

console.log(num1);
console.log(typeof num1);


// ^ Symbol : for providing name for key we will use the symbol

let n = Symbol("key"); // *this use case is for only the string 

console.log(n);
console.log(typeof n);


// ! --------------------------------------------------Non-Primitive Datatypes -----------------------------



// ^ --------------------------------------------------- Object ---------------------------------------

// *Objects : the values will get store in the key value pairs 

let obj = {
    key1 : "it is value",
    key2 : "its second value",
    name : "Manoj",
    emailId : "abc@gmail.com",
    largeNumber : 923498237498237482378423782398279239723979823749837423984723847239874293874n
}

// ^ Acess the values 
console.log(obj);

console.log(typeof obj);

console.log(obj.name);
console.log(obj.emailId);

console.log(obj.largeNumber);

// ^update the values 

obj.emailId = "xyz@gmail.com";

console.log(obj.emailId);

console.log(obj);

// ^ creating the new object 

let obj1 = {
    firstName : "Manoj",
    lastname : "Katkar",
    actorFirstName : "Salman",
    actorLastName : "Khan"
}

console.log(obj1.firstName);
console.log(obj1.actorFirstName);

obj1.actorFirstName = "Sharukh";


console.log(obj1);


// ! ----------------------------------------------Array---------------------------------------------

// ^ Array : for Array the by default the key are nothing but and index because it internally object only 

let ipl = ["csk" , "MI" , false , true , "RCB" , "DC" , "GT" , "SRH" , 123 , null , 4465456456456456n , 10.5];


console.log(ipl);

console.log(typeof ipl);

console.log(ipl[1]);

// ^ Modify the Array 

ipl[0] = "RCB";

console.log(ipl[0]);

console.log(ipl);