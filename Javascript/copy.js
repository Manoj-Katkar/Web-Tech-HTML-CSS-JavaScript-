// !we can copy the array in the 2 ways 
// value copy and referance copy 
// value copy : means it will copy the value not the address 
// referance copy : opy the address then it is referance copy 



// !value copy 

let a = 10;

let b = a;

// ^ now i am changing the value of the a but it will not afftect the b 
// ^that is only the value copy 

a = 50;

console.log(b);
console.log(a);



//! referance copy


let obj1 = {
    x : 100,
    y : 200,

    // *for the below object we will get the problem in the shallow copy also because it will share the same address 
    problemInShallowForObj : {
        a : 500,
        b : 600
    }
}

// assingning the all properties as it is 

let obj2 = obj1;    //*here just address is copied hence it is referance copy 

// ^now if I will do the changes for the obj1 then it will get affected to the obj2 also 
// ^because they are sharing the same address 

console.log(obj2.x);

// update the x value for the x from obj1 

obj1.x = 8000;

console.log(obj1.x);     //here I made the changes 
console.log(obj2.x);     //but it got changes for the obj2 also 



// !so to overcome to the changes that I am making for one object getting the updating for the next object also 
// ^so to overcome above problem we can use the shallow copy 
// ^shallow copy create the new address for that object 

let obj3 = {...obj1};

console.log(obj1);

console.log(obj3);

// now les update the any property value of the object 1 and see it will not affect the obj3 

obj1.x = 54000;

console.log(obj1.x);    //*54000
console.log(obj3.x);   //* it will not get changes because it is having the differant address in the heap 




// !In the shallow copy when we will face the problem lets see 
// ^ is we will have the some key as the one more object then it will share the same address only s
// ^so it will affected from one to another 

// !now lets do some changes for object problemInShallowForObj

obj1.problemInShallowForObj.a = 45000;

console.log(obj1.problemInShallowForObj.a);  //45000

// but mow here it got updated for the obj3 also 

console.log(obj3.problemInShallowForObj.a);  //45000


// !shallow copy is getting updated because it will restrict the one first level property of the object to not getting updated 
// !but second level property are getting updated 

// !So to overCome the above issue use deep copy 
// ^Deep copy will solve the above issue 

// for that we have to use the JSON for that 
let strobj = JSON.stringify(obj1);

let deepObject = JSON.parse(strobj);


console.log(deepObject);



















// learned the rest opearator , value copy , referance copy , shallow copy , deep copy  also done with promises and web storage notes 

