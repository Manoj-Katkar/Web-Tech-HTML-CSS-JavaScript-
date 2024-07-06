// !I have to fetech the data from the API 

let main = document.querySelector("main");

console.log(main);

try{
    async function pro(){

        let dataFromServer = await fetch("https://www.shoppersstack.com/shopping/products/alpha");
        
        console.log(dataFromServer);

        let jsonData = await dataFromServer.json();   //*return the promise resolved stage message 

        console.log(jsonData);

        let allDataArray = jsonData.data;

        console.log(allDataArray);

        // now I want to iterate over the each and every element of the allDataArray
        // first the parent should be remove 
        main.innerHTML = "";
        
        allDataArray.map((element , index , originalArray) => {
            main.style = "display:block"
            main.innerHTML = main.innerHTML + `<div id="${element.productId}">
            <img src="${element.productImageURLs[0]}" alt="">
            <h4>${element.name}</h4>
            <h3>${element.price}</h3>
            <h3>${element.rating}</h3>
            </div>`;
        })


    
    }
    
    pro();
}
catch(error){
    console.log(error);
}
