
// ^ Primitive datatype 
let a = 100;
let b = a ;

b = 70;

console.log(b);

// ^ Non Primitive




let obj1 = {
    firstName : "Manoj",
    Course : "WebTech",
    pinCode : 400033

}

console.log(obj1);

// ^now lets create the one more object and copy the same value 

let obj2 = obj1;

// ! now lets update the value that is Course using the obj2 

obj2.Course = "Java";

console.log(obj2);
