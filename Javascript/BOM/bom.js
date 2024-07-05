//! BOM : (Browser Object Model)
// *     it is also the programming interface given by the browser to interact with browser



//^ Inbuilt methods of the browser given by the window object 

// alert("Session is got expired");

//* To give the more option to confirm the user 

// let message = confirm("are you want to continue");

// console.log(message);


// if we want to get the input from the user then use prompt 

// let userInputValue =  prompt("type your age");

// console.log(userInputValue);



// !to find the viewport width and height of the document that is html body height and width
// it is aprt from serach bar , developer tool , scroll bar 

console.log( window.innerWidth , window.innerHeight );

// now with height and width serach bar , developer tool , scroll bar 

// !to get the browser width and height

console.log( window.outerWidth , window.outerHeight );



//* to navigate to some another tab 

// setTimeout(()=> {
    // after 5 seconds it will open new window used in pyrated websites 
    // !usecase : to give the advertisements and then navigate to another wesite 
                    //*to increase the traffic on the web-site 

    // window.open("https://github.com/Manoj-Katkar?tab=repositories");  //*open in the another tab 

// } , 5000);



// !to get the screen width and height with taskbar of our laptop 

console.log(screen.width , screen.height);  //*it will be constant because the screen size is fixed 


//* now to get the width and height without taskbar of our laptop 

console.log(screen.availWidth , screen.availHeight); 



// ! location 

// ^properties 

console.log(location.href);  //*to get the actual domain address of any web site 

console.log(location.protocol);  //*https or http 

console.log(location.host);  // *link without protocol 

console.log(location.port);   //*5500


// setTimeout(()=> { 
    // *href is the property 
//     location.href = "https://github.com/Manoj-Katkar?tab=repositories";   //*open in the same tab 
// } , 5000);


// !to refresh the page use   location.reload();

// setTimeout(()=> { 
//     location.reload();
// } , 4000);

// !one more method to open the link in the same tab using the method 

setTimeout(()=> { 
    //*open in same tab                        
    location.assign("https://www.interviewbit.com/snippet/0c66fd5bf33fcde7a8dd/");
} , 4000);




// learned about the browser object model and its inbuilt methods such as alert , confirm , prompt , window.open , setTimeOut , setInterval, some properties to get the width and height of html and entire browser , screen width and height  , and some location properties and methods  




