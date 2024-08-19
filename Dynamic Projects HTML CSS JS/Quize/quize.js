let storage = [
    {
        questionId : 1,
        actualQuestion : "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
        options : ["3.6" ,  "7.2" ,  "8.4" , "10"],
        correctAns : "7.2",
        userAns : null,
        visited : false
    } ,

    {
        questionId : 2,
        actualQuestion : "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
        options : ["300 kmph" ,  "360 kmph"  , "600 kmph"  , "720 kmph"],
        correctAns : "720 kmph",
        userAns : null,
        visited : false
    } ,


    {
        questionId : 3,
        actualQuestion : "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        options : [ "50 km" , "56 km" ,  "70 km" ,  "80 km"],
        correctAns : "50 km",
        userAns : null,
        visited : false
    } ,


    {
        questionId : 4,
        actualQuestion : "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        options : ["100 kmph",  "110 kmph" , "120 kmph" , "130 kmph"],
        correctAns : "120 kmph",
        userAns : null,
        visited : false
    } ,


    {
        questionId : 5,
        actualQuestion : "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        options : ["9" ,  "10"  , "12"  , "20"],
        correctAns : "10",
        userAns : null,
        visited : false
    } ,


    {
        questionId : 6,
        actualQuestion : `In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:`,
        options : ["1 hour" , "2 hours" ,"3 hours" ,"4 hours"],
        correctAns : "1 hour",
        userAns : null,
        visited : false
    } ,

    {
        questionId : 7,
        actualQuestion : "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        options : ["9" ,  "10"  , "12"  , "20"],
        correctAns : "10",
        userAns : null,
        visited : false
    } ,

]


let actualQuetionContainer = document.querySelector("#actual-question");
let actualOptionsContainer = document.querySelector("#actual-options");
let actualButtonsContainer = document.querySelector("#actual-btn");

// !lets access the all buttons of the footer section 
let footerSection = document.querySelector("footer");

let previous = footerSection.querySelectorAll("button")[0];
let Revisit_Next = footerSection.querySelectorAll("button")[1];
let Save_Next = footerSection.querySelectorAll("button")[2];
let Submit_Quize = footerSection.querySelectorAll("button")[3];

// taking the index value for iterating on the storage array and s=display the actual question 
let index = 0 ;


// console.log(actualQuetionContainer);
// console.log(actualOptionsContainer);
// console.log(actualButtonsContainer);
// console.log(footerSection);
// console.log(previous);
// console.log(Revisit_Next);
// console.log(Save_Next);
// console.log(Submit_Quize);


//* creating buttons based on the total number of the questions 
function createBtn(){
    storage.forEach((currentElement) => {
        let newBtn = document.createElement("button");

        newBtn.id = currentElement.questionId;  //*for each button giving the same id as the question to navigate 

        newBtn.innerHTML = currentElement.questionId;

        // now append above button in the actualButtonsContainer
        actualButtonsContainer.append(newBtn);
    })
}

createBtn();

// creating the function to display the question 
// actualQuetionContainer

function display(){
    // make sure first it is cleared 
    actualOptionsContainer.innerHTML = "";


    actualQuetionContainer.innerHTML = storage[index].actualQuestion;
    
    // !Now I want to display the options under the same question under actualOptionsContainer

    storage[index].options.map((currentOption) => {
        //* how much is the length of the option array that much options should get created 

        let opdRadio = document.createElement("input");

        opdRadio.type = "radio";
        opdRadio.value = currentOption;
       

        

        //* every radio input button should be treated as the new for each option 
        opdRadio.name = "options";

        //* now above line computer understood only to select the one but for the user how to display for that below logic 
        let label = document.createElement("label");
        label.innerHTML = currentOption;

        actualOptionsContainer.append(opdRadio , label);

    })
}

display();


// logic for the next button 
Revisit_Next.addEventListener("click" , (event) => {
    index = (index + 1) % storage.length;
    
    display();
});

// 

// logic for the previous button 
previous.addEventListener("click" , (event) => {
    index = (index - 1 + storage.length) % storage.length;
    
    display();
});

// logic for Save_Next button 

Save_Next.addEventListener("click" , (event) => {
    index = (index + 1) % storage.length;
    
    display();
})