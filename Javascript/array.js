// ! Array And its All Methods 
// * Notes : 
/**
 * *Array is the special Type Of Object used to collect ordered elements with unique index values 
 * *th index value start from 0 and it goes on till length - 1
 * 
 * 
 * *Creating Array :
 * *1) literal way:
 *          ^example : let iplTeams = ["MI" , "CSK" , "Delhi" , "HYD" , "SRH" , "RCB"];
 *   
 *  *2)Using Array Constructor : 
 *           ^example :  let newArray = new Array();
 * 
 *  *3)Using Array.from():
 *             ^example : let arrayFrom = Array.from("Helooooooo");
 *     
 *  *4)Using Array.of():
 *              ^example : let arrayOff = Array.of("hi" , 125 , "bye");
 * 
 * ! Note String methods will never modify the original String 
 * !But in Array some methods will modify the original Array and some will Not 
 */

let iplTeams = ["MI" , "CSK" , "Delhi" , "HYD" , "SRH" , "RCB"];

let newArray = new Array();

let arrayFrom = Array.from("Helooooooo");  //*it will accept the one argument that is string it self 

console.log(newArray);  //*represnt Empty Array 
console.log(arrayFrom);

let arrayOff = Array.of("hi" , 125 , "bye");

console.log(arrayOff);

console.log(typeof iplTeams);



// ^ to remove the last element from the Array 
iplTeams.pop();  //*to remove the last element 

console.log(iplTeams);

// ^ to add the element in Array use push() method 

iplTeams.push("kerla" , "pune");    //*it will added to the last 
console.log(iplTeams);

// ! to remove from the first 
iplTeams.shift();   //*MI will be removed 


// ! to add from the start 
iplTeams.unshift("Mumbai Indians");

console.log((iplTeams));

// !which is having the minimum letters that will remove and other will add that keypoint to remaimber the above methods 


// ^ to remove the particular elements from the Array in-between 
// *iplTeams.splice(starting index , how many elements you want to remove from the Array )

// ^splice : it will remove and also add the elements from the Array 

iplTeams.splice(1 , 2);

console.log(iplTeams);

iplTeams.splice(-1 , 1);   //* it will remove from the last index only one element it will remove 

console.log(iplTeams);

iplTeams.splice(1 , 0 , "Manya" , "Lalbagh");  // *it will not remove but it will add it from the start  

console.log(iplTeams);



// !Date : 17/06/2024


// !How to reverse the Array
// ^reverse() : it will reverse the Array and it will also affect the original Array 

let iplTeams1 = ["MI" , "CSK" , "Delhi" , "HYD" , "SRH" , "RCB" , "RR" , "KKR"];

iplTeams1.reverse();

console.log(iplTeams1);


// !to iterate over the Array methods
// ^1) forEach():
 /**
  * *   it is also the one higher order function
  * *  it will accept the call back function and that call back function will accept the three arguments 
  * *  that are = (arrayElement , indexValue , originalArray)
  * ! default return type is undefined because it will not return anything 
  */


let iplAns = iplTeams1.forEach(function(arrayElement , indexValue , originalArray){
    // inside the cal back function it will accept the 3 arguments
    console.log(arrayElement , indexValue , originalArray);
});

console.log(iplAns);


// ^ using map() method : 
/**
 * * it is also the HOF 
 * * it will also take the one call back function and that call back function will take the three parameters 
 * * that are = (arrayElement , indexValue , originalArray)
 * ! but it will return the new Array it will not modify the original Array (it will return the copy of the Array)
 * * when I want to do some changes then use the map method to get the copy of the Array 
 * ! it will return the each and avery element that is the problem in the map method hence we use filter method 
 */

let mapIpl = iplTeams1.map((arrayElement , indexValue , originalArray) => {
        // console.log(`my favourite team is ${arrayElement} its index value ${indexValue} it belongs to ${originalArray}`);

        return arrayElement.toLowerCase();   //^ it will return the lowercase element and copy will be created of the Array
})

console.log(mapIpl);



// ^More examples 

let numArray = [1 , 2 , 3, 4, 5];

// using the map method 
let mapArray = numArray.map((element , index , originalArray) => {
    return (element*10);
});


console.log(mapArray);   //* it will create the copy of the Array elements 

// ^original Array 
console.log(numArray);   //! it will be not modified 




// ^ using filter() method : 
/**
 * * it is also the HOF 
 * * it will also take th aone call back function and that call back function will take the three parameters 
 * * that are = (arrayElement , indexValue , originalArray)
 * ! but it will return the new Array it will not modify the original Array 
 * ! it will return the filtered value in the one Array format 
 */

console.log("-------------------------------------Filter Method ------------------------");


// ^ for getting the even numbers 

let evenNumbersArray =  numArray.filter((arrayElement , indexValue , originalArray) => {
    // console.log(`my favourite team is ${arrayElement} its index value ${indexValue} it belongs to ${originalArray}`);

    if(arrayElement % 2 == 0){
        // the it is even number that only return it 
        return arrayElement;
    }
});

console.log(evenNumbersArray);  //*return the filtered array 

console.log(numArray);              //* not modified the original Array 



// ! lets try it using the map method itself 

let oddNumbersArray =  numArray.map((arrayElement , indexValue , originalArray) => {

    if(arrayElement % 2 === 1){
        // the it is odd number that only return it 
        return arrayElement;
    }
});


console.log("--------------------------------filtered using the map method-------------------- ");

console.log(oddNumbersArray);  //*return the filtered array 

console.log(numArray);



let filteredIpl = iplTeams1.filter((element , index , originalArray) => {
        if(element.includes("C") == true){
            return element;
        }
});

console.log(filteredIpl);



// ^ now filter the team names ending with R 

let endWithRTeam = iplTeams1.filter((element) => {
    if(element.endsWith("R") == true){
        return element;
    }
});

console.log(endWithRTeam);






// ^ using find() method :  
/**
 * * it is also the HOF 
 * * when you wamt the one value then use the find method 
 * * it will also take the one call back function and that call back function will take the three parameters 
 * * that are = (arrayElement , indexValue , originalArray)
 * ! but it will return one value (which is only value not in array format )
 */

console.log("-------------------------------------Find Method ------------------------");


// iplTeams1.find((arrayElement , indexValue , originalArray) => {
//     console.log(`my favourite team is ${arrayElement} its index value ${indexValue} it belongs to ${originalArray}`);
// })

//! Now I want to only the CSK 

// ^using map method 

let findCSK = iplTeams1.find((element) => {
    if(element == "CSK"){
        return element;
    }
});


console.log(findCSK);   //* here I will get the only one value but main key point it will be not in Array format 




// !RealTime usecase of the above 4 methods that is used to iterate over the Array 


// ^ create the 5 objects using the constructor way 

// *constructor Function 

function Product(name , price , rating){
    this.ProductName = name;
    this.ProductPrice = price;
    this.ProductRating = rating;
}


// ?creating the 5 objects 

let product1 = new Product("I-Phone" , 100000 , 4.8);
let product2 = new Product("Samsung" , 18000 , 3.5);
let product3 = new Product("MI" , 12000 , 4.2);
let product4 = new Product("Dell" , 120000 , 4.5);
let product5 = new Product("HP" , 54000 , 3.5);


console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

// console.log(typeof product1);  //* Object


// create the new Array 

let productArray = [product1 , product2 , product3 , product4 , product5];


console.log(productArray);

// ! My requirement I want the to search the product that is having the name I=Phone 
// *I will use the find method 


let productWithIPhone = productArray.filter((element) => {
    if(element.ProductName == "I-Phone"){
        return element;
    }
});

console.log(productWithIPhone);  // *here I got the product with having the product Name as I phone 




// ! Now I want the products which are having the rating greater than 4

// ^ then I will use filter method 

let productRatingGood = productArray.filter((element) => {
    if(element.ProductRating >= 4){
        return element;
    }
});


console.log(productRatingGood);

// learned about the all iterating methods for Array in js that is forEach , map , filter , find all are HOF
