



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
    
        let convertedDataPromise = await dataFromServer.json();  //*json()will also convert the data in json() format but it is asynchronous 
    
        console.log(convertedDataPromise);
    
}


allProductsData();



