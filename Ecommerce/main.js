// ^Global area 

let cartItemsArray = [];

// getting the data from local storage 
let data = JSON.parse(localStorage.getItem("data"));

let oneUserData = JSON.parse(localStorage.getItem("oneUser"));  //*this will give info about which user is login 


console.log("data , oneUserData");

console.log(data , oneUserData);

// !Accessing the count span of the no of products added to the cart 

let productCountSpan = document.querySelector("#count");

// !now to update the count 

if(oneUserData){
    //*means the oneUser is log-In first 

    //*then it should add the products in the cart Array 
    if(oneUserData.cartIteams){
        productCountSpan.innerHTML = oneUserData.cartIteams.length;

        // !then when the page will get reloaded 
        cartItemsArray = oneUserData.cartIteams;
    }
}



// creating the function for the login and logout 

function logInLogOut(){

    let login = document.querySelector("#nav3");

    // getting the data from the local storage 
    let oneUserData = JSON.parse(localStorage.getItem("oneUser"));
    
    
    
    console.log(login);
    console.log(oneUserData);
    
    // if I am getting the data from the local storage then do some changes in the UI 
    // updating the user information
    
    if(oneUserData){
        login.innerHTML = `<span>${oneUserData.firstN}</span> <a href = "./main.html"><button id = "logout">Logout</button></a>  `;
    
        // accessing the logout buttton 
        let logout = document.querySelector("#logout");
        
    
        // adding the event on the logout 
        logout.addEventListener("click" , (event) => {
            // then the details should get logout from the local storage 
            localStorage.removeItem("oneUser");
    
            // now to open the home page again using the anchor tag
    
        })
    }
    

}

//calling the loginLog out function 
logInLogOut();



// !fetching the data from the server 
// *so for that creating the one Asynchronous function 

async function allProductsData(params) {
    
    let dataFromServer = await fetch("https://www.shoppersstack.com/shopping/products/alpha");

    

    console.log(dataFromServer);   //*this is the response in the object form I got now I have to convert it into the JSON format


        //* Now I have to convert the data in json format 
    
        let convertedData = await dataFromServer.json();  //*json()will also convert the data in json() format but it is asynchronous 

        console.log(convertedData);


        //* now to get the all data related to the all products 
        let allData = convertedData.data;

        console.log("All Data");

        console.log(allData);
        

        //* now filtering the all the men data 
        let  menData = allData.filter((currentElement) => {
            if(currentElement.category === "men"){
                return currentElement;
            }
        })


        console.log("Men Data");
        
        console.log(menData);



        //* now filtering the all the women data 
        let  womenData = allData.filter((currentElement) => {
            if(currentElement.category === "women"){
                return currentElement;
            }
        })
        console.log("women Data");
        console.log(womenData);
        

        //* now filtering the all the kids data 
        let  kidsData = allData.filter((currentElement) => {
            if(currentElement.category === "kids"){
                return currentElement;
            }
        })

        console.log("kids Data");
        console.log(kidsData);



         //* now filtering the all the electronics data 

        let  electronicsData = allData.filter((currentElement) => {
            if(currentElement.category === "electronics"){
                return currentElement;
            }
        })

        console.log("electronics Data");

        console.log(electronicsData);




        // !Now I have to update the UI with the products via their differant category 

        let maleOutput = document.querySelector("#maleCont");

        //* now iterating on the male data array 
        menData.map((currentElement) => {
            // console.log(currentElement);

            //* I have to get the previous products plus new current product 

            maleOutput.innerHTML += `<div id="${currentElement.productId}" class="menDynamic" >
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                    // ${currentElement.productImageURLs[0]} price
            
        })



        //* now for updating the products related to the female 

        let femaleOutput = document.querySelector("#femaleCont");

        //* now iterating on the male data array 
        womenData.map((currentElement) => {
            // console.log(currentElement);

            //* I have to get the previous products plus new current product 

            femaleOutput.innerHTML += `<div id="${currentElement.productId}" class="menDynamic"">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })




        //* now for updating the products related to the kids 

        let kidsOutput = document.querySelector("#kidsCont");

        //* now iterating on the male data array 
        kidsData.map((currentElement) => {
            // console.log(currentElement);

            //* I have to get the previous products plus new current product 

            kidsOutput.innerHTML += `<div id="${currentElement.productId}" class="menDynamic"">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })


        //* now for updating the products related to the electronics

        let electronicsOutput = document.querySelector("#electronicsCont");

        //* now iterating on the male data array 
        electronicsData.map((currentElement) => {
            // console.log(currentElement);

            //* I have to get the previous products plus new current product 

            electronicsOutput.innerHTML += `<div id="${currentElement.productId}" class="menDynamic"">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })



        // !Search Results 
        let serachInput = document.querySelector("#serachInput");
        let serachBtn = document.querySelector("#searchBtn");
        let serachDisplayDiv = document.querySelector("#searchResult");

        


        console.log(serachInput);
        console.log(serachBtn);
        console.log(serachDisplayDiv);

        //* adding the event of the search button 
        serachBtn.addEventListener("click" , (event) => {
            
            //* now serach then text of the input tag in the all the products 
            serachDisplayDiv.innerHTML = "";

            allData.map((currentElement) => {

                // *use includes method to search 
                //* HERE i AM CONVERTING THE PRODUCT NAME AND THE INPUT VALUE INTO THE LOWERCASE 

                if(currentElement.name.toLowerCase().includes(serachInput.value.trim().toLowerCase())){
                    // then I have to print the value 
                    serachDisplayDiv.innerHTML += `<div id="${currentElement.productId}" class="menDynamic"">
                                                    <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                                    <h3>Name ${currentElement.name}</h3>
                                                    <h2>Price ${currentElement.price}</h2>
                                                    <h2>Rating ${currentElement.rating}</h2>
                                                    <button>Add to Cart</button>
                                                </div>`
                }

        
            })
        })




        //* acessing the all the buttons 
        //* then all buttons from the main section I want to access 
        let mainSection = document.querySelector("main");

        //*from the above main I will access the all the buttons 
        let allBtnFromMain = mainSection.querySelectorAll("button");

        console.log(allBtnFromMain);

        //* I have to convert the allBtnFromMain NodeList to array using the from method or using the forEach I can able to iterate on the NodeList 

        allBtnFromMain.forEach((currentBtn) => {



            currentBtn.addEventListener("click" ,  (event) => {

            //^here I have to make sure that the some user is log-in then only add the products to the bucket and how then the count else do not allow them to add the products to the cart 

            if(oneUserData){

                console.log(currentBtn.parentElement);



                //* now I have to remove the same product that is getted added twice because that product should get added once and its count should get incremented
                
                //! to remove the duplicate 

                cartItemsArray = cartItemsArray.filter((currentElement) => {
                    if(currentElement.productId != currentBtn.parentElement.id){

                        return currentElement;
                    }
                });


                // Do this at home implementation of my logic 
                //!I have to try my logic also using the splice method
                // cartItems.filter((currentElement) => {
                //     if(currentElement.productId == currentBtn.parentElement.id){

                //         return currentElement;
                //     }         
                // });




                let product = allData.find((currentElement) => {

                    // *to get that unique product that is matching with that particular div below logic is there 

                    if(currentElement.productId == currentBtn.parentElement.id){

                        return currentElement;
                    }

                })

                // !now to increment the count of the total products that are added by the user I have to push that in the cartItems array 

                cartItemsArray.push(product);

                //* now for that object user we have one key as cartIteams for that we will assign the our array 
                oneUserData.cartIteams = cartItemsArray;

                console.log(oneUserData);
                
                console.log(cartItemsArray);
                
                //!Now same data for that sign In user I have to update the data in the local storage 
                localStorage.setItem("oneUser" , JSON.stringify(oneUserData));

                // !Now I have to update it under the data that was got created after the signup 
                // !In local storage we cannot update hence we will replace it by removing it 
                
                data = data.filter((currentElement) => {
                    if(currentElement.phoneNum != oneUserData.phoneNum){
                            return currentElement;
                    }
                })
                
                data.push(oneUserData);

                console.log("Updated Data");    
                
                console.log(data);

                //* Now again to update this data under the data variable again set it in the local storage 
                localStorage.setItem("data" , JSON.stringify(data));
                
                //here after the click add to cart then also count should get increased 
                productCountSpan.innerHTML = oneUserData.cartIteams.length;
            }
            else{
                alert("Login First");
                window.location.href = "./login.html";  //*to redirect the user to login first 
            }
                        

            });//ending of the addEventListner 
        });  //ending of the for Each loop  

        // learned how to update the count of the product in cart and when it should get updated and also updated the localStorage data for oneUser and data for the  cartIteams and also remove the duplicate iteams product from the array 


}  //logout function scope 


allProductsData();



