

// let a = 10;
// let b = 50;

// console.log(a) ; //10


// setInterval(() => {
//         console.log("Hi I am Learning Asynchornous Programming");
// } , 2000);


// console.log(b);


// !setTimeout(call-back , time dealy)

console.log(1);
console.log(2);

setTimeout(()=>{
        console.log("Hi I am setTimeout");
} , 5000);                                    //*after the delay of the 5 seconds it will get executed


//! setInterval(call-back , and interval time )
// setInterval(() => {
//         console.log("I am Interval");
// } , 2000);                            //*after the 2 seconds interval this code will get executed repeateadlly


console.log(5);

// & setInterval will send the copy of the function in the Macrotask Queue 


// Notes : 
/**
 * ! 1) Asynchronous  programming :
 * *                       javascript is single threaded language that means it will handle one task at a Time 
 * *                       to handle time consuming code without affecting main thread we need to use Asynchronous programming 
 * ?                       we can Achieve Asynchronous in 3 ways  : 
 * !                                         1)call-backs 
 * !                                         2) promise 
 * !                                         3) Async and Await 
 * 
 * 
 * ! How Asynchronous Code Work : 
 * 
 *&  call-stack :
 **             we have one call-stack , if call-stack encountered any Asynchornous Operation that part of the code will pushed to web API 
 **             till Event Complition  the call-back function will wait in web API 
 **             After that call-back function will push to call-back Queue 
 **             In CallBack-Queue there are two memeory Spaces 
 *^                             i)MicroTask - Queue 
 **                                                 it will handle promise call-back functions 
 *^                             ii) MacroTask - Queue 
 **                                                 it will handle time call-back functions and DOM call-back functions 




 * & Web-Api = (code related DOM , Timers , Fetch will go in the web api because it will only understand that code )








 * & CallBack - Queue :





 * & MicroTask - Queue : (Handle promises call-backs)





 * & MacroTask - Queue :  (Handle Time Call-Backs)




 * & Event loop : 
 **                Event loop will keep on check Call-Stack is empty or Not 
 **                if it is Empty it will take the call-back function from call-back Queue and assign to call-stack
 *! preferance Order : 
 **                       1) first even-loop will prefer Microtask Queue call back Functions 
 **                       2) then it will take the functions from Macrotask Queue 

 *! Ways to achieve the Asynchronous Programming 

 *& call-back function : 
 **                     it the function is passed as the argument to the another function that is known as call - back function 
 **                     All call-back functions are not Asynchronous 

 *!            Synchrnous  Example : Array iterating methods call-back functions are Synchronous 

 *!             Asynchronous Example : 
                                **SetTimeout call-back function 
                               ** promise  call-back function 
                               ** DOM call-back functions

 */


//!   Call-Back Hell Concept : 
/**
 * *    if you are creating the multiple call back function one inside Another that is known as call-back Hell
 * *    it is also known as Pyramid of doom
 * *    Below code is the Example of the Call-Back Hell   
 * *    for animation purpose it is usefull to give differant differant colors           
 */


setTimeout(() => {
        console.log("I am going for having lunch");

        setTimeout(() => {
                console.log("I will order biryani");

                setTimeout(() => { 
                        console.log("Biryani Came");

                        setTimeout(() => {
                                console.log("paid the Bill");
                        } , 1000);

                } , 5000);


        } , 2000);                                          //* totally it will take the 3 seconds because first outer will get execute 

} , 1000);



// learned about the Asynchronous programming using the call-backs 



// ! Second Way 