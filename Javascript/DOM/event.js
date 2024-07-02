
let button1 = document.querySelector("button");

let h1 = document.querySelector("h1");

let input = document.querySelector("input");

let h2 = document.querySelector("h2");


// h1.innerHTML = "I am From Mumbai"


console.log(button1);
console.log(h1);



// event listners are also the Asynchronous 

//* click events

// !single click 

// button1.addEventListener( 'click' , (event) => {
//     console.log("Event is Triggred");
//      button1.style.backgroundColor = "red";
//     h1.innerHTML = "I am From DOM"

//     console.log(h1.innerHTML);

// })



// !double click 

// button1.addEventListener( 'dblclick' , (event) => {
//     console.log("Event is Triggred");
//      button1.style.backgroundColor = "red";
//     h1.innerHTML = "I am From DOM"

//     console.log(h1.innerHTML);

// })


// !Mouse Events


// !mouse hover

// button1.addEventListener( 'mouseover' , (event) => {
//     console.log("I am from Mouse over ");
//      button1.style.backgroundColor = "yellow";
//     h1.innerHTML = "I am From Mouse Over"

//     console.log(h1.innerHTML);

// })


// !mouseout

// button1.addEventListener( 'mouseout' , (event) => {
//     console.log("I am from Mouse Out");
//      button1.style.backgroundColor = "pink";
//     h1.innerHTML = "I am From Mouse out"

//     console.log(h1.innerHTML);

// })

// !mouseenter

// button1.addEventListener( 'mouseenter' , (event) => {
//     console.log("I am from Mouse Out");
//      button1.style.backgroundColor = "red";
//     h1.innerHTML = "I am From Mouse Enter"

//     console.log(h1.innerHTML);

// })

// ^IMP 
// !if user is typing the somthing then it is value 
// !and we are giving some content that is innerHtml or innerText

// console.log(input.value);  //*this is going to be the empty only so do not take it outside never take it 
                            //*because the page is loaded the value is going to be the empty only 


button1.addEventListener('click' , (event) => {
    console.log(input.value);

    // Now I have to print the above input value in the h2 

    h2.innerHTML = input.value;   //here the value of the input is assign to the h2 innerText 
})



// !Now I want the changes should happen while typing 

// ^keyboard Events 
// keydown , keypress : copy paste will also not work 

// input.addEventListener('keydown' , (event) => {
//     h1.innerHTML = input.value;
// })


// !while releasing the changes happen keyup event 


// input.addEventListener('keyup' , (event) => {
//     h1.innerHTML = input.value; 
// })


// !here we will not get the first character because it will be treated as empty 


// input.addEventListener('keypress' , (event) => {
//     console.log(input.value);
//     h1.innerHTML = input.value;
// })


// ^hence we will go for the input event 
// ^it will be live updated 

// input.addEventListener('input' , (event) => {
//     console.log(input.value);
//     h1.innerHTML = input.value;
// })
