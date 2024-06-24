// !Module is the sepearate Scope 


// to transfer the one function to another file use export (then it will belongs differant Scope that is module scope )


//* importing the function 

//^ import { grettings } from "./main.js";


//* importing the obj1 from the main.js file 

//^ import {obj1} from "./main.js"

//* now import the array 
//^ import { arr1 } from "./main.js";

//* import the branch 
//^ import { branch } from "./main.js";


// !How to import the multiple line of code in single line 

// import {grettings , obj1 , arr1 , branch} from "./main.js"

// grettings();

// console.log(obj1);

// console.log(arr1);


// !now the advantages of the default keyword accessing the all function and code 
// ^without the {} curll bracket we can access the function if it is default 
// ^ we can use the default keyword for the only function not for others and in one file we can use one default only
// !export default is there for only namedFunction  


import obj1 from "./main.js"

import grettings from "./main.js";

import arr1 from "./main.js"

console.log(arr1);

// console.log(obj1);

grettings();



