let input = document.querySelector("input");
let searchBtn = document.querySelector("button");

let container = document.querySelector("#container");


searchBtn.addEventListener("click" , ( async (event) => {

    // before reading or creating every elements I have to remove the previous result 
    container.innerHTML = "";

    let apiKey = "1ff2ae88ce2778da9bbb169df2898be2";

    let dataFromServer = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`);

    console.log(dataFromServer);

    // !now we will convert the dataFrom server to the actual javascript object using .json()

    let actualData  = await dataFromServer.json();

    console.log(actualData);

    // I want to insert the 5 data in the UI so For that I am creating the 5 h2 
    /**1)CityName , 2)Temp , 3)Climate , 4)WindSpeed , 5)humidity  */

    if((dataFromServer.status === 200) || (dataFromServer.statusText === "OK")){
        let cityName = document.createElement("h2");
        let Temp = document.createElement("h2");
        let Climate = document.createElement("h2");
        let WindSpeed = document.createElement("h2");
        let Humidity = document.createElement("h2");
    
        cityName.innerHTML = `City Name : ${actualData.name}` ;
    
        // !now converting the temp kelvin to degree celsius and fixed only the two digits after the decimal points 
    
        Temp.innerHTML = `Temperature : ${(actualData.main.temp - 273).toFixed(2)} °C`;
    
        Climate.innerHTML = `Climate : ${actualData.weather[0].main}`;
        WindSpeed.innerHTML = `Wind Speed : ${actualData.wind.speed} km/hr`;
        Humidity.innerHTML = `Humidity is : ${actualData.main.humidity}%`;
    
        
    
        container.append(cityName , Temp , Climate , WindSpeed , Humidity);
    
        console.log(cityName);
    }
    else{
        let h2 = document.createElement("h2");

        h2.innerHTML = `Please Enter the Valid City Name`;

        container.append(h2);

    }


    



    

    
}))