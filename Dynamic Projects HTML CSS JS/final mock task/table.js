// !Now here I have to first get the data from the local storage 

let allusersDataArray = JSON.parse(localStorage.getItem("AllUsersData"));

console.log(allusersDataArray);

// Access the table body now 

let tableBody = document.querySelector("#table-body");



// !Now iterate over the allUsersDataArray because it is the Array of the objects 

allusersDataArray.map((currentObject , currentIndex) => {

    // Now I have to append the each time one table row in the above tableBody 

    tableBody.innerHTML += `
                            <tr>
                            <td>${currentObject.firstN}</td>
                            <td>${currentObject.lastN}</td>
                            <td>${currentObject.email}</td>
                            <td>${currentObject.phoneNum}</td>
                            <td>${currentObject.pass}</td>
                        </tr>
                    `

                 
});




