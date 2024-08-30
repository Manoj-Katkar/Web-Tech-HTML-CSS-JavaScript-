

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
        login.innerHTML = `<span>Welcome ${currentUserData.firstN}</span> <a href = "./main.html"><button id = "logout">Logout</button></a>  `;
    
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
  