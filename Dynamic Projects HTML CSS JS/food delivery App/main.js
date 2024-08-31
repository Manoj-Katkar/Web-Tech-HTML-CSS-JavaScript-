





//!directlly fetching the data from the json file 

let restaurantData = [];

// Fetch the data and return a promise
async function fetchRestaurantData() {
    try {
        // Fetch the JSON file
        const response = await fetch('./restaurants.json');

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const data = await response.json();

        // Use the restaurant data
        restaurantData = data;

    } catch (error) {
        // Handle any errors that occurred during fetch or parsing
        console.error('There has been a problem with your fetch operation:', error);
    }
}

  
// Call the function  fetchRestaurantData(); to fetch data but after it get resolved then only call the displayRestaurants because fetchRestaurantData() is asynchronous
//  

  console.log("restaurantData");
  console.log(restaurantData);
  
  
















// Approach I have to iterate over the restaurantData Array and display it into the UI 

let displayRestaurants = () =>{

    // !Access the root element and adding the all the restaurants into the ui
    let divRoot = document.querySelector("#root");


    restaurantData.map((currentRestaurant , currentIndex) => {
        divRoot.innerHTML += `<div class="all-restaurants">
                                <div class="all-restaurants-1">
                                    <img src="${currentRestaurant.restaurantImg}" alt="">
                                    <h2>${currentRestaurant.name}</h2>
                                    <h3>${currentRestaurant.restaurantLocation}</h3>
                                    <span>Vesu</span>
                                </div>
    
                                <div class="all-restaurants-2">
                                    <h4 class="rating"><i class="fa-solid fa-star"></i> 
                                    ${currentRestaurant.rating}</h4>
                                    <span>.</span>
                                    <h4>${currentRestaurant.distance}</h4>
                                    <span>.</span>
                                    <h4>${currentRestaurant.offerGoingOn}</h4>
                                </div>
                            </div>`
    })

}


// Call fetchRestaurantData and then display restaurants
fetchRestaurantData().then(() => {
    displayRestaurants();
    restaurantsClickEvents();

});




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







// !Now I have to write the code for the all the restaurants 
// *Means if user click on any restaurant it should get re-directed to the new website that will be menu.html 




function restaurantsClickEvents(){




    // for that I have to access the all the div having the class="all-restaurants"

    let allRestaurantsDiv = document.querySelectorAll(".all-restaurants");   //this is going to be the nodelist iterate over it and add the event listner to each div

    allRestaurantsDiv.forEach((currentRestaurantDiv , Index) => {
        currentRestaurantDiv.addEventListener("click" , (event) => {

            //here I have to check whether the user is logedIn then only move to the restaurant having menu else move that user to first login 

            if(currentUserData){
                //^means the user is logedIn allow o=it to move 

                // !First I have to make sure in the local storage under userOpenRestaurantArray there is empty array only 

                let currentUserZomato = JSON.parse(localStorage.getItem("currentUserZomato"));

                console.log(currentUserZomato);

                currentUserZomato.userOpenRestaurantArray = [];  //*making it intensionally empty to track each time only one restaurant data 

                //! now also update that in the local storage for that current zomato user 
                localStorage.setItem("currentUserZomato" , JSON.stringify(currentUserZomato));




                //*then I have to store on which restaurant user clicked on in the local storage 
                console.log("current target restaurant");
                console.log(event.target.parentElement.parentElement);  //to get the parent element 

                //Now I will get the name of the restaurant and try to match exactlly in our restaurants array 
                //and then store that object under the userOpenRestaurantArray in the local storage 

                let parentDiv = event.target.parentElement.parentElement;

                let childH2NameOfRestaurant = parentDiv.querySelector("h2").innerHTML;

                console.log(parentDiv);
                console.log(childH2NameOfRestaurant);

                //!Now I have to iterate over the restaurantData array

                restaurantData.map((currentRestaurant , currentIndex) => {
                    //now here I have to check that the name of the currentRestaurant and childH2NameOfRestaurant both are strictlly equal or not then take decision

                    if(currentRestaurant.name === childH2NameOfRestaurant){
                        console.log("restaurant Matched");
                        console.log(currentRestaurant);  //this is entire object 


                        //* then I have to store this data in the local storage userOpenRestaurantArray

                        //In local storage we canoot able to undate hence we will overide the data 
                        // below is commanded because already it is declared above 
                        // let currentUserZomato = JSON.parse(localStorage.getItem("currentUserZomato"));

                        console.log(currentUserZomato);

                        //now update currentUserZomato

                        currentUserZomato.userOpenRestaurantArray.push(currentRestaurant);

                        console.log(currentUserZomato.userOpenRestaurantArray);
                        
                        
                        //* now also update that in the local storage for that current zomato user 
                        localStorage.setItem("currentUserZomato" , JSON.stringify(currentUserZomato));


                        //*if needed then also update in the all users data 


                        // !now once the user click on that restaurant user should redirect to the menu.html website 

                        window.location.href = "./menu.html";



                    }
                    else{
                        // do not do anything because my data it static always name of the restaurant will get matched 

                        // console.log("restaurant Un-Matched");

                        
                    }

                })


            }
            else{
                alert("Please login first");
                window.location.href = "./login.html";
        
            }


            

            
            
        })
    })
}

















// !here I will export the default restaurant data 

// export default restaurantData;