
// let obj = {
//     name : "shoe",
//     price : 1200
// }

// console.log(obj);

// ! How to convert the object to String 

// let objInString = obj.toString();

// console.log(objInString);

// json : means javascript object notation 

// ! we can convert it using the JSON.stringify() method converts the object to sr=ting 

// let jsonObject = JSON.stringify(obj);

// console.log(jsonObject);

// !we can convert the Array to string using the JSON.stringify() method

// let arr = [1 , 2 , 3 , 4 , 5];


// let jsonArray = JSON.stringify(arr);   //* it will convert the as it is array to string 

// console.log(jsonArray);

// let obj2 = `{
//     "name" : "shirt" , "price" : "1500"
// }`

// !if we want to convert the string values to javascript object then use parse() method 

// ~but the data should be stored in the form of the String 

// let javascriptObject = JSON.parse(obj2);  //*convert the data to the javascript object 

// console.log(javascriptObject);

//! NOte : whenever we are transferring the data so that data is going to be in the form of the stringfy 

// web store given the two types of the storage 
/**
 * *1) local storage 
 * *2) session storage 
 */


// !Local Storage 

// ^we are going to set something in the local storage for that localStorage.setItem() method is used 
// ^ it will take the two parameters key and value 

// localStorage.setItem("name" , "web tech");

// let arr2 = [1 , 2 , 3 , 4];

// localStorage.setItem("arr2" , arr2);  //* here the array getting store in the form of string but square bracket is getting remove 
                                        //*so I have to convert the arr2 into the json string object 

// let arr2JsonStringObj = JSON.stringify(arr2);

// !Now Array will be converted to the String in the Array format 

// localStorage.setItem("arr2JsonStringObj" , arr2JsonStringObj);


// ! lets take one more example with object 

// let obj3 = {
//     product : "t-shirt",
//     price : 500
// }


// localStorage.setItem("obj3" , obj3);  //*here it will get store in the form of the object object because it will not get converted automatically to the string hence I have to convert it into the string 


// let jsonObj2 = JSON.stringify(obj3);


// now add it it will be in the string format 

// localStorage.setItem("jsonObj2" , jsonObj2);

// !What is the advantage of the local Storage 
/**
 * * the data which is stored inside the lcal storage it will be stored for the permanant basis 
 * * till now I have learned how to add the data in the local storage 
 * * now lets learn how to get the data from the local storage using .getItem();
 * ! while storing it is getting stored in the key , value pair hence no need to store it in the variable 
 * !but while getting the we have to store inside some variable to reuse that value 
 */


let dataFromLocalStorage = localStorage.getItem("name");  //* here I have to pass the key only 

console.log(dataFromLocalStorage);

// ! Now I want to get the array from the storage 

let arrayFromStorage = localStorage.getItem("arr2JsonStringObj");

console.log(arrayFromStorage);  //* this is string I have to convert it into the Array 

console.log(typeof arrayFromStorage);  //* string to convert it into the Array I have to use the parse method 

let convertedToArray = JSON.parse(arrayFromStorage);

console.log(convertedToArray);

console.log(typeof convertedToArray);