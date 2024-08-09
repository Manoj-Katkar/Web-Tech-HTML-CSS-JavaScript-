let image = document.querySelector("img");
let forwardBtn = document.querySelector(".fa-forward");
let backwordBtn = document.querySelector(".fa-backward");



// !Creating the one Array 
let imagesArray = ["./images/1.jpg" , "./images/2.jpeg" , "./images/3.jpeg" , "./images/4.jpeg"];

// !the logic image should change for the each seconds 

let index = 0 ;

// setInterval(() => {
//     // it should get changed 
//     // index += 1;

//     // ^or using the modulo operator we can achieve 
//     index = (index + 1) % imagesArray.length;



//     // ^this will also work 
//     // if(index === 4){
//     //     index = 0;
//     // }

//     image.src = imagesArray[index];
    

// } , 2000)



// !using the icons to move forward 
forwardBtn.addEventListener("click" , (event) => {

    // ^or using the modulo operator we can achieve 
    index = (index + 1) % imagesArray.length;


    image.src = imagesArray[index];

});


backwordBtn.addEventListener("click" , (event) => {

    // ^now I have create the logic to go to the backword 
    index = index - 1;

    if(index < 0){
        index += imagesArray.length;
    }

    image.src = imagesArray[index];

})