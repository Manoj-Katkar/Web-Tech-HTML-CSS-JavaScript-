// !Scope of the variables 
// Questions on that 
// when we will get undefined , null , referance error that is not defined 




// let a = 10;
// var b = 50;





// {
  
//   var b = 45;  
//   let a = 20;
// //   console.log(a);
// }

// function abc(){

//     var b = 800;
//   console.log(b);

// }

// abc()


// !All copy 
/**
 * *value copy 
 * *referance copy 
 * *shallow copy 
 * *deep copy 
 */

// !value copy 

let a = 10;

let b = a;

a = 50;

console.log(a);
console.log(b);


//! referance copy 

let obj1 = {
    name : "Manoj",
    age : 24,

    // !shallow copy will share the same addredd for the nested objects it will restrict only the first level properties of the object 
    car : {
        company : "Oddi",
        year : 2024
    }
}

// copying the same referance 

let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// now I will do the changes in the object 1 and that will get affected in the object 2 also because of the they are having rthe same referance in the heap memory 

obj1.name = "Success";


// console.log(obj1);
// console.log(obj2);


// !Shallow copy 

// we can achieve shallow copy using the spread operator 

let shallowObject = {...obj1};

console.log(obj1);
console.log(shallowObject);

// now lets do the changes in object 1 

obj1.name = "Shanaya";

console.log(obj1);
console.log(shallowObject);

// !but if I will do the changes for the second level properties then it will get reflect the changes 

obj1.car.company = "Maruti";


//! now print the both the objects and see 

console.log(obj1);
console.log(shallowObject);


// !hence we will create the deep copy 

let objInString = JSON.stringify(obj1);   //*converted as it is with its structure in the string format 

let deepObject = JSON.parse(objInString);


// now if I will do the changes in obj1 the nested object also then it will not get reflected for the deep copy 

obj1.car.company = "MK";

console.log(obj1);
console.log(deepObject);   //becasue it will again create the differant addredd for the nested object also in the heap 




// !Object Destructuring 

/**
 * Object destructuring in JavaScript is a way to unpack values from objects into distinct variables. It simplifies accessing specific properties and improves code readability.

Imagine you have a box with labeled compartments, and object destructuring lets you pick out specific compartments and assign their contents to variables, all in one go.
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Traditional approach (using dot notation)
  
  console.log(person.firstName, person.lastName); // Output: John Doe
  
  // Using object destructuring
  const { firstName, lastName } = person;
  
  console.log(firstName, lastName); // Output: John Doe (same result)

