// !Now first target the all the html elements on the which I have to give the functionality or I have to change their data when the product will get changed 

let imageOfProduct = document.querySelector("img");

let productName = document.querySelectorAll("h2")[0];
let productPrice = document.querySelectorAll("h2")[1];
let productRating = document.querySelectorAll("h2")[2];

let forwardBtn = document.querySelector(".fa-forward");
let backwardBtn = document.querySelector(".fa-backward");


console.log(productName);
console.log(productPrice);
console.log(productRating);
console.log(imageOfProduct);



// !Now I have to create the Array which will have the 5 products in it in the object format 

let productsArray = [{
    //* product1
    PSource : "./images/product1.jpg",
    PName : "Fastrack smart Watch",
    PPrice : "1499 RS/-",
    PRating : "4 Star"

} , 
{
    //* product2
    PSource : "./images/product2.jpg",
    PName : "Apple iPhone 13",
    PPrice : "48,999 RS/-",
    PRating : "4.5 Star"


} , 

{
    //* product3
    PSource : "./images/product3.jpg",
    PName : "Apple 2023 MacBook Pro ",
    PPrice : "1,79,990 RS/-",
    PRating : "5 Star"
    
} , 

{
    //* product4
    PSource : "./images/product4.jpg",
    PName : "Mountain Cycle with Front Suspension",
    PPrice : "6,499 RS/-",
    PRating : "3 Star"

} , 
{
    //* product5
    PSource : "./images/product5.jpg",
    PName : "Apple iPad (10th generation)",
    PPrice : "30,900 RS/-",
    PRating : "5 Star"

}];


console.log(productsArray.length);

// !lets first try to do it using the setInterval 

let currentIndex = 0 ;

setInterval(() => {
    currentIndex++;

    if(currentIndex === productsArray.length){
        currentIndex = 0;
    }

    // also get the current object from the Array 
    let currentProduct = productsArray[currentIndex];

    //*now updating the all html tags data 
    imageOfProduct.src = currentProduct.PSource;
    productName.innerHTML =  `Product Name : ${currentProduct.PName}` ;
    productPrice.innerHTML = `Product Name : ${currentProduct.PPrice}`;
    productRating.innerHTML = `Product Name : ${currentProduct.PRating}`;

} , 5000);



// !Now I have to add the event listners on the forward button and backword button also 



forwardBtn.addEventListener("click" , (event) => {
    // using the if else also we can achieve but using the modulo operator also I can able to achieve it 

    currentIndex = (currentIndex + 1) % productsArray.length;  //when it will become 5 then 5 % 5 == 0 will go at the first element again 

    // also get the current object from the Array 
    let currentProduct = productsArray[currentIndex];

    //*now updating the all html tags data 
    imageOfProduct.src = currentProduct.PSource;
    productName.innerHTML =  `Product Name : ${currentProduct.PName}` ;
    productPrice.innerHTML = `Product Name : ${currentProduct.PPrice}`;
    productRating.innerHTML = `Product Name : ${currentProduct.PRating}`;


});




// !now in the same way I have to implement the backword vala logic 

backwardBtn.addEventListener("click" , (event) => {
    //here when the index will become the -1 means I have to go back to the last product so for that I will add the length of the array it self so -1 + arrayLength will move the index back to the last product in the my products array 

    currentIndex -= 1;

    if(currentIndex < 0){
        currentIndex += productsArray.length;
    }

    // also get the current object from the Array 
    let currentProduct = productsArray[currentIndex];

    //*now updating the all html tags data 
    imageOfProduct.src = currentProduct.PSource;
    productName.innerHTML =  `Product Name : ${currentProduct.PName}` ;
    productPrice.innerHTML = `Product Name : ${currentProduct.PPrice}`;
    productRating.innerHTML = `Product Name : ${currentProduct.PRating}`;
})
