// !rest operators Notes and comparasion with spread 
// ^it will collect the element 
// ^here property will be converted into the object 
// ^if we are putting the 3 dots in the RHS in the assigning it will spread opearator 
// ^ if we are putting the 3 dots at LHS while declaration then it will collect the elements that rest opearator 


//! usecase 
// *object destructuring        


let obj1 = {
    y : 200,
    z : 300,
    a : 50,
    b : 20,
    c: 800
}

let arr1 = [10 , 20 , 25 , 55 , 45 , 84 , 78];

//! Object Destructuring 
// once we destructure the object we can use it directlly 

let {y , z , a , ...bc} = obj1;                // ^it will collect the element b and c

console.log(y , z , a);

console.log(bc);

// object destructuring for Array 

let [one , two , ...arr2] = arr1;  //*I want to convert the all other elements to the one Array 
                                    //*...arr2 is the variable name we can give any name for that remaining elements 


console.log(one , two );

console.log(arr2);


// more examples

function abc(...x){
    console.log(x);   //*it is in declaration that is rest it will give that is array 
}

abc(10 , 20 , 40 , 50 , 80);





















