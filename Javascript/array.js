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



// !reduce method :
/**
 * *it will also return the one value 
 * * it will start from left to right 
 * * its call back will have the 4 parameters 
 *  *(accumalater_value , current_value , current_index , original_array)
 * * accumalater_value : it is first value of the Array element 
 * * current_value : it will start from the 1st index value 
 */

console.log("reduce method");
let numbersArray = [10 , 20 , 30 , 40 , 50];

let mulNumbers = numbersArray.reduce((accumalater_value , current_element , current_index , EntireArray) => {
        console.log(accumalater_value);
        return (accumalater_value*current_element);
} , 50);

console.log(mulNumbers);


// !reduceRight() method:
/**
 * *it will also return the one value 
 * * it will start from right to left 
 * * its call back will have the 4 parameters 
 *  *(accumalater_value , current_value , current_index , original_array)
 * * accumalater_value : it is first value of the Array element 
 * * current_value : it will start from the 1st index value 
 */


let sumOfNumbers = numbersArray.reduceRight((accumalater_value , current_element) => {
    console.log(current_element);
    return accumalater_value + current_element;
});

console.log(sumOfNumbers);


// !every method
/**
 * *for the verification we will use every method 
 * *it will check for the every element statisfy the condition return the true 
 * *else it will return the false value 
 * * its call-back will also take the three parameters 
 * * (element , index , original_array);
 */

console.log("--------------------------every method ------------------------------");

let booleanValue = numbersArray.every((element) =>{
    if(element % 10 == 0){
        
        return element;
    }
});

console.log(booleanValue);





// !some method
/**
 * *
 * *it will check for the one element statisfy the condition then return the true 
 * *else it will return the false value 
 */

console.log("--------------------------some method ------------------------------");

let booleanValueSome = numbersArray.some((element , index , array) =>{
    if(element % 20 == 0){   //*here element 20 , 40 are satifying the call back function condition it will return the true 
        
        return element;
    }

    console.log(element , index , array);
});

console.log(booleanValueSome);








// !sorting methods :
/**
 * *Ascending and Descending order 
 * *By default sort() will sort the data based on the first digit , first character 
 */

let ipl1 = ["mi" , "csk" , "kkr" , "rcb"];

ipl1.sort();

console.log(ipl1);


let num = [5 , 2 , 4 , 1];

num.sort();

console.log(num);

let numbers = [1 , -10 , 2 , 5 , 20 , 6];

// console.log(numbers.sort());


console.log("using the sorting logic for Ascending order ");

numbers.sort((A , B) => {
    // A : means second value 
    // B : prevoius  value 
     console.log(A , B);

     return (A-B);
});

console.log(numbers);




console.log("using the sorting logic for Descending order ");

numbers.sort((A , B) => {
    // A : means second value 
    // B : prevoius  value 
     console.log(A , B);

     return (B - A);
});

console.log(numbers);




// !to get the index of the Array element it is similar to the string method 

numbersArray = [10 , 20 , 30 , 40 , 50];

let numbersElementIndex = numbersArray.indexOf(20);

console.log(numbersElementIndex);



// !lastIndexOf() : 

let lastIndexOfElement = numbersArray.lastIndexOf(40);

console.log(lastIndexOfElement);


// !to merge the two Array 
// ^using concat() method 

let mergedArray = numbersArray.concat(ipl1);

console.log(mergedArray);



// !slice method :
/**
 * *used to extract the part of the Array 
 */

let partOfArray = numbersArray.slice(1 , 4);

console.log(partOfArray);



// !to convert the Array to String (IMP)
// ^ using toString method 

/**
 * * it will return the String 
 * * but it will not modify the original Array 
 * * it will not accept the any argument here 
 */

// ^ using toString method 


let games = ["cricket"  , "kabaddi" , "Kho-Kho"];

let gamesString = games.toString();

console.log(gamesString);

// console.log( games);



// ^ using join method 
/**
 * *it will accept the argument inside the join() condition 
 */
let gamesString1 = games.join(" ");

console.log(gamesString1);



// !All notes again by Sir for Array Methods 

// & Methods will modify the original Array :
/**
 * * .pop() : it will remove the Array element from the last 
 * 
 * * .push(argument1 , argument2) : it will add the element to the Array at last 
 * 
 * * .shift(): it will remove the element from the start from the Array 
 * 
 * * .unshift(argument1 , argument2) : it will add the Array elements to the front 
 * 
 * * .splice(starting_index , elementCount that wanted to remove , elements that wanted to add) : it will remove and also add the elements in the Array 
 * 
 * * .reverse()  : it will reverse the given Array itself
 * 
 * * .sort() : it is the HOF (used to arrange the data in Ascending or descending order)
 * *           its call back will take the two arguments 
 * *            that are     
 * *           (A : means second value  B : previous  value )  
 * !Note :  above is used to sort the two digit or more digit numbers 
 * !           if we will use only sort() method then it will sort based on the first character or first number 
 *          
 */





// !Methods to iterate over the Array (it will not modify the original Array )
// ^ iterating all methods are the HOF
/**
 * & 1)forEach() : it will iterate All the elements of the Array 
 * *              return type is void means undefined 
 * 
 * * Syntax :   forEach((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 *  & 2)map() : it will iterate All the elements of the Array 
 * *              return type is copy of the Array with optional modified elements 
 * 
 * * Syntax :   map((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 *  & 3)filter() :   it will iterate All the elements of the Array 
 * *                return type is array with condition statisfied elements of the call back function 
 * 
 * * Syntax :   filter((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 *  & 4)find() :   it will iterate All the elements of the Array 
 *   *              but it will stop iterating once the condition satisfied 
 * *                return type is only one  element which satisfied condition (single value)
 * 
 * * Syntax :   find((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 * & 5)reduce() :   it will iterate All the elements of the Array 
 * *                 in first iteration accumalater value is first element 
 * *                  from second iteration accumalater value is returned value 
 * *                  return type is only one  value that is the final value of the accumalater 
 * 
 * * Syntax :   reduce((accumulater , currentArrayElement , arrayIndex , originalArray) => {
 * 
 * *                     return (operation with accumalater with array element)
 * 
 * *            } , accumalater_initial_value_we can pass );
 * 
 * 
 * 
 *   & 6)reduceRight() :      it is similar to reduce but iterate from the right to left 
 * *                            in first iteration accumalater value is first element from the right side 
 * *                            from second iteration accumalater value is returned value 
 * *                        return type is only one  value that is the final value of the accumalater 
 * 
 * * Syntax :   reduce((accumulater , currentArrayElement , arrayIndex , originalArray) => {
 * 
 * *                     return (operation with accumalater with array element)
 * 
 * *            } , accumalater_initial_value_we can pass );
 * 
 * 
 */


// !Convert the Array to String methods 

/**
 * * 1) toString(): it will convert the Array to String but it will not accept the any arguments 
 * 
 * * 2) join() : it will also convert the Array to String but it will accept the optional argument 
 * 
 */

// ! Similar to String Methods (4 Methods)

/**
 * * 1) indexOf() 
 * * 2) lastIndexOf() 
 * * 3) concat(): 
 * * 4) slice():
 */


// !Array methods with boolean values which are also HOF (2 Methods)

/**
 * * 1)every() : here All elements should satisfy the condition of the call back function then it will return true else it will return false 
 * 
 * 
 * 
 * * 2) some() : here any-One elements should satisfy the condition of the call back function then it will return true else it will return false 
 */





