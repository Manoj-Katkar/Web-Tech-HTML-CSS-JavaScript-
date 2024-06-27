// !Date  : 27/06/24
// !How to create the HTML elements in javascript 

let div1 = document.getElementById("container1");

console.log(div1);

// creating the one h1 element 

let head1 = document.createElement("h1");

// to make the h1 as the child to the div1 
// ^using appendChild(head1); we can add the child in the parent 
// ^ appendChild() will add the one child at the time 

// div1.appendChild(head1);

//* add the content in h1 

head1.innerHTML = "Are you Enjoying Dom";



// create one anchor tag and append inside the division 

let anchorTag = document.createElement("a");

anchorTag.innerHTML = "Click Me";

// now append it 

// div1.appendChild(anchorTag);

anchorTag.href = "https://chatgpt.com/";

// anchorTag.setAttribute("href" , "https://www.interviewbit.com/snippet/0c66fd5bf33fcde7a8dd/");

let link =   anchorTag.getAttribute("href");

console.log(link);

anchorTag.target = "_blank";

// !lets update the more than one element in the div using the appendChild()
// ^ to add the multiple child elements in the parent use append()
// ^append() means add the childs to the last 


// div1.appendChild(head1 , anchorTag);  //it will add one child only 

// div1.appendChild(anchorTag);

div1.append(anchorTag , head1);   //!not getting added doubt 

// !now if I want to add the content from starting in particular div then use below 
//* using prepend() : prepend will add the elements as first child 

// access the container 2 

let div2 = document.querySelector("#container2");

console.log(div2);

//* create the one span tag 

let spanTag = document.createElement("span");

div2.prepend(spanTag);

//*now adding the same head h1 in the div 2 also 

div2.appendChild(head1);

//* now add the anchor tag in the first 

div2.prepend(anchorTag);


//* create the one section and add as the firstchild of div2 

let section1 = document.createElement("section");

div2.prepend(section1);


// !to remove the any child individually 

// div2.removeChild(anchorTag);

// to entirelly remove the div2 

// div2.remove();

// div1.append(anchorTag , head1);




//! doubt : the same content I am trying to add in the both the div it is not getting added it is getting added to either one of them why it is so 

// learned about append() appendChild() also prepend() to add from the starting and diff bet^w HTML-Collection and NodeList


