
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



















let addUserOrdersToUi = () => {






    // !First I have to make sure in the local storage under userOpenRestaurantArray there is empty array only 

    let currentUserZomato = JSON.parse(localStorage.getItem("currentUserZomato"));

    console.log(currentUserZomato);

    let AllOrderedProductsArray = currentUserZomato.cartIteams;

    console.log("AllOrderedProductsArray");

    console.log(AllOrderedProductsArray);



  //^Now I have to also insert the all the menu options in the UI under the  

  //!first access that section

  let menuDetailsSection = document.querySelector("#menu-details");




  // !Now iterate on the menuArray and add the each menu 

  AllOrderedProductsArray.map((currentMenu , index) => {
    menuDetailsSection.innerHTML += `<div class="RecommendedProducts">

                                          <div class="product-details">
                                              <span class="badge">Recommended</span>
                                              <h2>${currentMenu.name}</h2>
                                              <p class="product-description">${currentMenu.description}</p>
                                              <h2 class="Price">Price : ${currentMenu.price}</h2>
                                          </div>

                                          <div class="product-image">
                                              <img src="${currentMenu.productImage}"> <br>
                                             
                                          </div> 

                                      </div>`
  })




  



}


addUserOrdersToUi();