// 1)Targeting the all html tags which are dynamic I have to do the changes via js 

let h1 = document.querySelector("h1");

let addBtn = document.querySelectorAll("button")[0];

let submitBtn = document.querySelectorAll("button")[1];


let para = document.querySelector("p");

console.log(h1);
console.log(addBtn);
console.log(submitBtn);
console.log(para);

// when , where and how ask this questions always 

// Taking the one count variable in the global area 

let count = 0 ;


addBtn.addEventListener("click" , ((event) => {
    // increment the count 
    count = count + 1;
    console.log(count);

    h1.innerHTML = count; 
    
}))

 

submitBtn.addEventListener("click" , ((event) => {

    let currentCount = count;



    para.innerHTML = para.innerHTML +   `${currentCount} , `;    //*this is also one approach 

    // para.innerHTML += para.innerHTML +   `${currentCount} , `;   //*this is also another approach using +=


    // and Then I have to make the count set to 0 again 
    count = 0;
    h1.innerHTML = count; 
 

}) )

