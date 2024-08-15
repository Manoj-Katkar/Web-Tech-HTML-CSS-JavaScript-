



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


        // now to get the all data related to the all products 
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

        // now iterating on the male data array 
        menData.map((currentElement) => {
            // console.log(currentElement);

            // I have to get the previous products plus new current product 

            maleOutput.innerHTML += `<div id="menDynamic">
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

        // now iterating on the male data array 
        womenData.map((currentElement) => {
            // console.log(currentElement);

            // I have to get the previous products plus new current product 

            femaleOutput.innerHTML += `<div id="menDynamic">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })




        //* now for updating the products related to the kids 

        let kidsOutput = document.querySelector("#kidsCont");

        // now iterating on the male data array 
        kidsData.map((currentElement) => {
            // console.log(currentElement);

            // I have to get the previous products plus new current product 

            kidsOutput.innerHTML += `<div id="menDynamic">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })


        //* now for updating the products related to the electronics

        let electronicsOutput = document.querySelector("#electronicsCont");

        // now iterating on the male data array 
        electronicsData.map((currentElement) => {
            // console.log(currentElement);

            // I have to get the previous products plus new current product 

            electronicsOutput.innerHTML += `<div id="menDynamic">
                                        <img src="${currentElement.productImageURLs[0]}" alt="please wait it is loading">
                                        <h3>Name ${currentElement.name}</h3>
                                        <h2>Price ${currentElement.price}</h2>
                                        <h2>Rating ${currentElement.rating}</h2>
                                        <button>Add to Cart</button>
                                    </div>`;

                                   
            
        })
    




}


allProductsData();



