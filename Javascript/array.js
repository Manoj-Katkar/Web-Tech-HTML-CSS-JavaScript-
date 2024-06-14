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


