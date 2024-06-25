// !Promises Notes 
/**
 * *Promises : 
 * *            promise is the object that represent the eventual complition or failure of Asynchronous Operations 
 * 
 * ! there are 3 states in promise : 
 * * pending 
 * *             it is the initial state of the promise (it is niether resolved not rejected)
 * 
 * 
 * * resolved / fullfilled :
 * *                   if promise is satisfying the condition it will resolved 
 * 
 * 
 * * rejected : 
 * *             if promise is not satisfying then it will be rejected 
 * 
 * !creating the promise is synchronous only but , handling the promise is Asynchronous 
 * 
 * ^we can handle the promise using below methods :
 *                                  1)then()
 *                                  2)catch()
 *                                  3)finally()
 * 
 * *1)then() : if promise is get resolved then wil be executed 
 * *2)catch() : if the promise get reject catch will be executed
 * *3)finally() : no matter what finally will be executed 
 * 
 * 
 * !async AND await : 
 * 
 * 
 *^   1)async : 
  **            async keyword used to create the Asynchronous functions 

*^    2)await : 
 **             await keyword used to handle the promises 

* !Note : if async keyword then await keyword will not work 



*!------------------------------------- JSON -------------------------

*^  JSON : it is the one file in javascript 
    
*?  we have some inbuilt methods for JSON for javascript 
   
  **1)JSON.stringyfy() : it will convert the javascript object to string in original format
  
  **2)JSON.parse() : it will convert the string to javascript objects 
  **                  it is synchronous operation 

  **3)json() : this will convert string to javascript objects 
  **           differance is it is Asynchronous operation 
  **            it will return promise 




*!======================web storage ============================





*!  web storage :  
 **           it allows us to store the data in local device 
 **             it will give storage of 5 to 10 mb for each host 
 **             host means for that particular folder 


//  !types of storage :

*^    1)local storage 
**                  here the data will be permanent unless we delete it mannually 
**                  

*^    2)session storage 
**                  here the data is not permanent once we close the tab or window all the data will be erased 





 */