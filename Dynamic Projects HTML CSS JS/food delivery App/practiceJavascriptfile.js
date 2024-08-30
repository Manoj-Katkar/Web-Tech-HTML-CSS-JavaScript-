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

// Function to display restaurants
let displayRestaurants = () => {
    let divRoot = document.querySelector("#root");

    restaurantData.map((currentRestaurant) => {
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
    });
}

// Call fetchRestaurantData and then display restaurants
fetchRestaurantData().then(() => {
    displayRestaurants();
    restaurantsClickEvents(); // Call this after restaurants are displayed
});

// Access the data from local storage
let data = JSON.parse(localStorage.getItem("AllUsersData"));
let currentUserData = JSON.parse(localStorage.getItem("currentUserZomato"));

console.log("AllUsersData", data);
console.log("currentUserZomato", currentUserData);

// Create the function for login and logout
function logInLogOut() {
    let login = document.querySelector("#nav-3");
    let currentUserData = JSON.parse(localStorage.getItem("currentUserZomato"));
    
    if (currentUserData) {
        login.innerHTML = `<span>Welcome ${currentUserData.firstN}</span> <a href = "./main.html"><button id = "logout">Logout</button></a>`;
    
        let logout = document.querySelector("#logout");
        
        logout.addEventListener("click", (event) => {
            localStorage.removeItem("currentUserZomato");
        });
    }
}

// Call the loginLogOut function
logInLogOut();

// Function to handle restaurant click events
function restaurantsClickEvents() {
    let allRestaurantsDiv = document.querySelectorAll(".all-restaurants");

    allRestaurantsDiv.forEach((currentRestaurantDiv) => {
        currentRestaurantDiv.addEventListener("click", (event) => {
            let parentDiv = event.currentTarget; // Use event.currentTarget to get the parent div
            let childH2NameOfRestaurant = parentDiv.querySelector("h2").innerHTML;

            restaurantData.forEach((currentRestaurant) => {
                if (currentRestaurant.name === childH2NameOfRestaurant) {
                    let currentUserZomato = JSON.parse(localStorage.getItem("currentUserZomato"));
                    currentUserZomato.userOpenRestaurantArray = currentUserZomato.userOpenRestaurantArray || [];
                    currentUserZomato.userOpenRestaurantArray.push(currentRestaurant);
                    localStorage.setItem("currentUserZomato", JSON.stringify(currentUserZomato));
                    window.location.href = "./menu.html";
                }
            });
        });
    });
}
