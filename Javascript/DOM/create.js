// !DOM : (Document Object Model): 

/**
 * !DOM : 
 * *        it is programming interface given by the browser to access HTML elements in javascript
 * *        by using the DOM we can access  , modify , style the elements dynamically 
 * *        here the accessing the elements are noting but as an the node  
 * 
 */

// !by tag Name 

// let head1 = document.getElementsByTagName('h1');

// console.log(head1);


// // !by className 

// let head2 = document.getElementsByClassName("learn-dom-h1");

// console.log(head2);


// // !here we are acessing using the css selectors 

// let head3 = document.querySelectorAll("h1");

// console.log(head3);


// let head4 = document.querySelectorAll(".learn-dom-h1");

// console.log(head4);


// // ! to target the individual elements 

// let head5 = document.getElementById("xyz");

// console.log(head5);

// //! querySelector will target the first element with satisfied value that we pass 

// let head6 = document.querySelector("h1");  //* it will target the first h1 

// console.log(head6);

// let head7 = document.querySelector(".learn-dom-h1");

// console.log(head7);

// let allH2HTMLList = document.getElementsByClassName("class2");

// console.log(allH2HTMLList);

// // !now lets do it using the querySelectorAll 

// let allH2NodeList = document.querySelectorAll(".class2");

// console.log(allH2NodeList);

// // image by tag name 

// let imageHtmlList = document.getElementsByTagName("img");

// console.log(imageHtmlList);

// // now to get the first element in the HTML collection 

// let firstElementFromHtmlCollection = imageHtmlList[0];

// console.log("From image HTML Collection " ,firstElementFromHtmlCollection);

// // !same do it using the from the 

// let firstH2FromHtmlCollection = allH2HTMLList[0];

// console.log("From HTML Collection " , firstH2FromHtmlCollection);


// let firstH2FromNodeList = allH2NodeList[0];

// console.log("From Node List " , firstH2FromNodeList);

// let anchorTag = document.querySelector("a");


// console.log(anchorTag);

// !How to access the any attribute and add the attributes in js 

// anchorTag.href = "https://chatgpt.com/";

// anchorTag.target = "_blank";

//^ access the input tag 

// let inputTag = document.querySelectorAll("input");

// console.log(inputTag[0]);

// inputTag[0].type = "password";

// console.log(inputTag[0].type);

// !Access the image using the tagName 

// let image = document.getElementsByTagName("img");

// image[0].src = "./images/dhoni2.jpeg";

// image[0].alt = "please wait it is loading";

// console.log(image[0]);


// !now how to modify the content inside the html element using the javascript 

// let headH1 = document.getElementsByClassName("learn-dom-h1");

// ! to modify the content or add elements we will use the below properties 

//^.innerHtml : it will allow both to add the text and also to add the elements 
// ^innerText : it will allow the only to change the text 


// headH1[0].innerText = "Hi I am From JS changed ";  //*here the content will be display as it is 

// headH1[0].innerHTML = "<p>from paragraph</p>"    //*here it will create the p and inside that it will display 

// console.log(headH1[0]);






// !lets create the some dynamic content 
// let a = 0;

// setInterval(() => {
//     console.log(a);
//     a++;

//     headH1[0].innerHTML = a;

//     console.log(headH1[0]);
// } , 5000);

// !how to stop the interval then store the function inside the one variable 

// let inter = setInterval(() => {
//     console.log(a);
//     a++;

//     headH1[0].innerHTML = a;

//     console.log(headH1[0]);

//     // !to stop the interval 

//     if(a == 10){
//         clearInterval(inter);
//     }

// } , 1000);


// learned about DOM , Accessing html elements in js ,HTMLCollection , NodeList , updating text or html using innerHtml and innerText , also how to stop the interval using clearInterval()


// !Date  : 27/06/24


//! HTML collection : it will be live updated 
// *                    changes will be updated live 


//! NodeList :   it is static 
/**
 * *               here I can able to iterate on the NodeList 
 * *                it will get updated but newlly we have to access it i=once we added or deleted some elements in html 
 */


// let div3 = document.querySelector("#container3");

// access the all the h1 
// let tagHead = document.getElementsByTagName("h1");

// let queryHead1 = document.querySelectorAll("h1");

// console.log(tagHead);

// console.log(queryHead1);

// let head5 = document.createElement("h1");

// head5.innerHTML = "head 5 it is";

// console.log(head5);

// append the child head 5 

// div3.appendChild(head5);

//! Now accessing the node list to check whether it is updated or not 
// ^it will get updated but newlly we have to access it because it is static 
// ^
// let queryHead2 = document.querySelectorAll("h1");


// console.log(tagHead , queryHead1);  

// console.log(tagHead , queryHead2);


// !lets itearate over the queryHead2

// queryHead2.forEach((element , index , originalNodeList ) => {

//     console.log(element);

// });





// !how to convert the NodeList to array

// let queryNodeArray = Array.from(queryHead2); //* it will take the each Nodelist value as the one array element 

// console.log(queryNodeArray);

// let CollectionArray  = Array.from(tagHead);

// console.log(CollectionArray);

// let CollectionArrayUsingOf  = Array.of(tagHead);  //*it will take the all collection values as the one element only 

// console.log(CollectionArrayUsingOf);



