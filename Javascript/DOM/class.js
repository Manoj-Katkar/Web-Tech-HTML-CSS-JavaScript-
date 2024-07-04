// let h1=document.querySelector("h1")
// console.log(h1);
// //inbuild method to add class name to a tag. (variablename.classList.add)
// h1.classList.add("xyz")
// console.log(h1);
// h1.classList.add("aaa","bbb")

// //remove the class name.
// h1.classList.remove("aaa")
// console.log(h1);


// //how to check class name is there or not 
// //contains("arg") is used to check 
// //it return true if present and return fale if not there
// console.log(h1.classList.contains("aaa"));//false

// //how to replace the class
// h1.classList.replace("xyz","mno")

// //! toggle
// //it is very important
// //if class is there then remove it and if not there then add it.
// //it will accept only one argment
// //it return type is boolean

// h1.addEventListener("click",()=>{
//    h1.classList.toggle("addd");  
//     console.log(h1);
  
// })

//how see the password 

let input1=document.querySelector("input");
let slash=document.querySelectorAll("i")[0];  // it will select all i element but by providing [0] it will select <i> tag at 1st position.
let eye=document.querySelectorAll("i")[1];  // it will select all i element but by providing [01] it will select <i> tag at 2st position.

console.log(input1, slash, eye);

//when we click on slash-eye it should be disable and the password will be show
//when we click on eye it should be enable and the password will be hide


//it is used to see the password after click on slash-eye
//it is asynchronus 
slash.addEventListener("click",()=>{
    input1.type="text";
    slash.classList.toggle("happy");
    eye.classList.toggle("happy");
    

})

//it is used to hide the password after click on eye
eye.addEventListener("click",()=>{
    input1.type="password";
    eye.classList.toggle("happy");
    slash.classList.toggle("happy");
})























