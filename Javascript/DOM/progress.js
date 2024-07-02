
// let h1 = document.querySelector("h1");
// let button = document.querySelector("button");

// console.log(h1);
// console.log(button);

// giving the css in js file 

// h1.style.color = "red";  //*one way to give css

// !direct using the style it will remove all properties of css first and only apply those we have given in js 

// h1.style = "font-size:105px; color:hotpink;"   //* here we are reassign the value to the entire css of that element hence the color is not getting changed only 
                                //*font-size will be shown to display the color mension the color again
                                
                                
// !Now I want on clicking on the button the font size should be increase 

// let size = 2;

// button.addEventListener('click' , (event) => {
//     size = size + 1;

//     h1.style.fontSize = `${size}rem`;
// })


//! I wanted to implement when I will click then the width of the child should get increment

let child = document.querySelector("#child");

let buttonIncreaseWidthChild = document.querySelector("button");

console.log(child);
console.log(buttonIncreaseWidthChild);

// !width variable I have to take it 

let width = 0;

buttonIncreaseWidthChild.addEventListener('click' , (event) => {

  let interval =   setInterval(() => {

    if(width >= 100){
        clearInterval(interval);
        // width = 0;
    }

        //here I am restructing the width 
        if(width < 100){
            width += 5;
            child.style.width = `${width}%`;
        }


        
    } , 20);



})