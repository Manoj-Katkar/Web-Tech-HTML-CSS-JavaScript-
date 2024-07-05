
let div1 = document.querySelector("div");
let button1 = document.querySelector("button");
let body = document.querySelector("body");

// console.log(div1);
// console.log(button1);

// Adding the event 

// !Very Imp Notes 

// !Always body will have the only the content height only hence on the entire viewport height of the screen in the body the body event will not get triggred 

// *DOM 3 phases of Event Propogation
/**
 * ^ 1) event capturing  : till searching that element in the dom tree 
 * ^ 2)event  Target     : for that targeted execute its call back function 
 * ^ 3)event bubbling  : it will go back and parents events will get triggred to stop it provide the stop propogation
 */

// *document is stored in the window object 

// !Defination of the event propogation 

//* event propogation :In JavaScript, event propagation is the mechanism that determines the order in which elements in the DOM tree receive and respond to events.


// *addEventListner will have the one more parameter that is capture = it will have by default value as false but after capturing stage of the dom it will become true 
// *and everything will get execute from inner to outer 

// div1.addEventListener('click' , (event) => {
//     // event.stopPropagation();      //*only changes should affect to the div 
//     console.log("I am from div");
//     div1.style.backgroundColor = "black"
// });


// button1.addEventListener('click' , (event) => {
//     console.log(event);
//     // event.stopPropagation();  //!here I am explicitlly telling do not bubble back 
//     console.log("I am from button");
//     button1.style.backgroundColor = "green"

// });

// body.addEventListener('click' , (event) => {
//     console.log("Body Is Clicked");
//     body.style.backgroundColor = "red"
// })




// !Actual usecase of the event propogation 

// target the all the elements 
let nav = document.querySelector("nav");

// Now access the all li

let liList = document.querySelectorAll("li");

// accessing the para

let para = document.querySelector(".p-display");

console.log(liList);

let layOut = liList[1];


// nav.addEventListener("click" , (event) => {
//     // nav.style.backgroundColor = "blue";  //*here i have to implement the another logic to remove and add rather than I will use toggle 

//     nav.classList.toggle("newbg");
// })



// layOut.addEventListener("click" , (event) => {
//     para.classList.toggle("p-display");

//     //* I have to make the changes for the layout only 

//     event.stopPropagation();   //!it will stop the propogation
// } )


// !Above happening in the child to parent and getting executed events in the bubbling stage 

// ^But Now I want in the reverse manner that is from the parent to child using the third argument we can achieve that 

//^ third parameter of addEventListener = (capture value) = false

// !capture value : it represents whether you need capture the event in capture phase or not means its call back should execute or not 

// !(capture value) = 1)it will become true when we have successfully captured means searched that element 
//! 2)it is optional but it can change the sequence of the event execution 


// &now if I want to see in which phase the event is got triggred each event then use = event.eventPhase

// ^event.eventPhase it will represent by the numbers as 1 , 2 , 3 

/**
 * *1 = capturing phase 
 * *2 = Target phase 
 * *3 = bubbling phase 
 */


//^ to get original target = event.target (means the element where I have to go that is going to be the fixed )
// ^to get the current target  = event.currentTarget;



// !event.target.dataset = 
//* it will create the map of the custom attributes we have for the targetted html element in DomMap format 

// to get the current index event.target.dataset.index

//! child to parent execution  (default value of the capture value = false)

nav.addEventListener("click" , (event) => {


    console.log("I am from parent");
} , false)      //*now I want the parent should first get execute make capture value true 



layOut.addEventListener("click" , (event) => {
    console.log("I am from child");
} , false)




// !parent to child execution 


nav.addEventListener("click" , (event) => {


    console.log("I am from parent");

    // *Now I do not want the child should execute then use stop-propogation 

    event.stopPropagation();   //*here for layout it wil not go in the capturing stage also it will get bubble back from the parent only 

} , true)      //*parent to child now it will get executed 



layOut.addEventListener("click" , (event) => {
    console.log("I am from child");
} , false)






