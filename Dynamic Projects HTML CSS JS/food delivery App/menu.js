

async function fetchRestaurantData() {
    try {
      // Fetch the JSON file
      const response = await fetch('./restaurants.json');
  
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON data
      const data = await response.json();
  
      // Use the restaurant data
      console.log(data);
    } catch (error) {
      // Handle any errors that occurred during fetch or parsing
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  // Call the function to fetch data
  fetchRestaurantData();















  // !Now I have to acess the data from the local storage about who is loggedIn a=that user hole information I want to access 

let data = JSON.parse(localStorage.getItem("AllUsersData"));

let currentUserData = JSON.parse(localStorage.getItem("currentUserZomato"));

console.log("AllUsersData");

console.log(data);

console.log("currentUserZomato");

console.log(currentUserData);



// creating the function for the login and logout 

function logInLogOut(){

    let login = document.querySelector("#nav-3");

    // getting the data from the local storage 
    let currentUserData = JSON.parse(localStorage.getItem("currentUserZomato"));
    
    
    
    console.log(login);
    console.log(currentUserData);
    
    // if I am getting the data from the local storage then do some changes in the UI 
    // updating the user information
    
    if(currentUserData){

        // !then I have to also reassign the cartIteams from the local storage from All users data to the current user data if he already in the past signedIn 

            // !I have to also update in the AllUsersData
            // ^here it is not getting updated because I have to go under that user 

            let AllUsersDataArray = JSON.parse(localStorage.getItem("AllUsersData"));

            console.log(AllUsersDataArray);


            AllUsersDataArray.map((currentUser , index) => {
                if(currentUserData.email === currentUser.email || currentUserData.phoneNum === currentUser.phoneNum){
  
                  //then means I at the correct currentUser 
                  currentUserData.cartIteams = currentUser.cartIteams;
  
                  console.log("currentUserData");
  
                  console.log(currentUserData);
  
                  
                  
                }
              })
            
              //!then also update the in the local stoarege that user ordered which food 
            localStorage.setItem("currentUserZomato" , JSON.stringify(currentUserData));


        login.innerHTML = `<span>Welcome ${currentUserData.firstN}</span> 
            <a href = "./userOrders.html"><button class = "cart"><i class="fa-solid fa-cart-shopping"></i></button></a>
          <a href = "./main.html"><button id = "logout">Logout</button></a>  `;
    
        // accessing the logout buttton 
        let logout = document.querySelector("#logout");
        
    
        // adding the event on the logout 
        logout.addEventListener("click" , (event) => {
            // then the details should get logout from the local storage 
            localStorage.removeItem("currentUserZomato");
    
            // now to open the home page again using the anchor tag
    
        })
    }
    

}

//calling the loginLog out function 
logInLogOut();




// !here I have to create the 2 functions over here 
//^first for adding the restaurant details that will be fetched from localStorage

// ^second to add the all the menu that are there in that restaurant in the UI 

//!for both write the only one function 

let addRestaurantDetailsWithMenu = () => {

      // ^Access the restaurant-details section
      let restaurantDetailsSection = document.querySelector("#restaurant-details");




      // !First I have to make sure in the local storage under userOpenRestaurantArray there is empty array only 

      let currentUserZomato = JSON.parse(localStorage.getItem("currentUserZomato"));

      console.log(currentUserZomato);

      let restaurantDetails = currentUserZomato.userOpenRestaurantArray[0];

      console.log("restaurantDetails");

      console.log(restaurantDetails);


      //^ Now update the inner html of the restaurantDetailsSection 

      restaurantDetailsSection.innerHTML = `<div class="dynamic-restaurant">
                                                  <div id="dynamic-restaurant1">
                                                      <img src="${restaurantDetails.restaurantImg}" alt="">
                                                  </div>

                                                  <div id="dynamic-restaurant2">
                                                      <h3>${restaurantDetails.name}</h3>
                                                      <p>${restaurantDetails.restaurantLocation}</p>
                                                      <br>
                                                      <div>
                                                          <h4 class="border-togive start"><i class="fa-solid fa-star"></i> ${restaurantDetails.rating}</h4>
                                                        <h4 class="border-togive left">${restaurantDetails.distance}<h4>
                                                          <h4 class="left">${restaurantDetails.offerGoingOn}</h4>
                                                      </div>
                                                  </div>
                                          </div>`
      

    //^Now I have to also insert the all the menu options in the UI under the  

    //!first access that section

    let menuDetailsSection = document.querySelector("#menu-details");

    // Now I have to get the all the menu that are there 
    let menuArray = restaurantDetails.RecommendedProducts;


    // !Now iterate on the menuArray and add the each menu 

    menuArray.map((currentMenu , index) => {
      menuDetailsSection.innerHTML += `<div class="RecommendedProducts">

                                            <div class="product-details">
                                                <span class="badge">Recommended</span>
                                                <h2>${currentMenu.name}</h2>
                                                <p class="product-description">${currentMenu.description}</p>
                                                <h2 class="Price">Price : ${currentMenu.price}</h2>
                                            </div>

                                            <div class="product-image">
                                                <img src="${currentMenu.productImage}"> <br>
                                                <button class="add-button">ADD +</button>
                                            </div> 

                                        </div>`
    })




    // !Now I have to track that user added the which food items to cart

    //*first from the local storage access the cart items for that user 
    let cartIteamsArray = currentUserZomato.cartIteams;

    console.log(cartIteamsArray);

    // Access tha all the add to cart buttons 

    let allBtns = document.querySelectorAll(".add-button");

    //*now I have to add the event listner on the all btns 
    // console.log(allBtns);

    allBtns.forEach((currentBtn , index) => {
      currentBtn.addEventListener("click" , (event) => {
          
        console.log(event.target.parentElement.parentElement);

        let parentOfCurrentClickBtn = event.target.parentElement.parentElement;

        //now get the first div from that 
        let parentFirstChild = parentOfCurrentClickBtn.querySelectorAll("div")[0];

        console.log(parentFirstChild);


        // now above's first child I have to find the first h2 from that 

        let menuName = parentFirstChild.querySelectorAll("h2")[0].innerHTML;

        console.log(menuName);


        // now I have to again iterate over the menu Array to find that current clicked target object 

        menuArray.map((currentMenu , index) => {
          if(currentMenu.name === menuName){
            // then I have to add that object in the cartIteamsArray
            // and also after that update the local storage also 
            cartIteamsArray.push(currentMenu);
            //now here print the cartIteamsArray
            console.log("Updated - cartIteamsArray");
            console.log(cartIteamsArray);

            //update the local storage also 
            currentUserZomato.cartIteams = cartIteamsArray;

            //!Update in the local storage also 
            localStorage.setItem("currentUserZomato" , JSON.stringify(currentUserZomato));

            // !I have to also update in the AllUsersData
            // ^here it is not getting updated because I have to go under that user 

            let AllUsersDataArray = JSON.parse(localStorage.getItem("AllUsersData"));

            console.log(AllUsersDataArray);

            AllUsersDataArray.map((currentUser , index) => {
              if(currentUserZomato.email === currentUser.email || currentUserZomato.phoneNum === currentUser.phoneNum){

                //then means I at the correct currentUser 
                currentUser.cartIteams = cartIteamsArray;

                console.log("currentUser");

                console.log(currentUser);

                
                
              }
            })

            // AllUsersData.cartIteams = cartIteamsArray;

            localStorage.setItem("AllUsersData" , JSON.stringify(AllUsersDataArray));
            

          }
        })


        

        
        
      })

    })




    


    



}

addRestaurantDetailsWithMenu();






  