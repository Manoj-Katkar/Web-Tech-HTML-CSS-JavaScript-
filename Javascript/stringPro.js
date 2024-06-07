

// !Reverse the Given String 

// function reverseString(firstName){
//     let reversedString = "";

//     // *using the loops 
    
//     for(let i = firstName.length - 1 ; i >= 0 ; i--){
//         // get the character 
//         let char = firstName.charAt(i);
    
//         reversedString = reversedString + char;
//     }
    
//     // console.log(reversedString);
//     return reversedString;
// }

// let reversedString = reverseString("Manoj");

// console.log(reversedString);





// *Vowels 

function countVowels(str){
    let count = 0;

    let strLength = str.length;
    let vowelString = "aeiou";

    for(let i = 0; i < strLength ; i++){
        // ^get the character and convert it into the lowercase each time so the uppercase characters will be also handeled 
        let char = str.charAt(i).toLowerCase();

        // *one way 
        // if(char === "a" || char === "e" || char === "i"  || char === "o"  || char === "u" || 
        //      char === "A"  || char === "E"  || char === "I"  || char === "O" ||  char === "U"){
        //         count++;
        // }

        // *Another Way 
        // ^ to check for the uppercase also simply we will convert the each character into the lower case and then check into the vowelString 
        if(vowelString.includes(char)){
            count++;
        }
    }

    return count;


}

let count = countVowels("hi hello byEE");
console.log(count);



// *Consonents Count

function consonentCount(str1){

    let Count = 0 ;

    let vowelsString = "aeiou";  //! all the errors will be handeled here 

    // get the length of the given String 
    let lengthStr1 = str1.length;

    // ^ Now run the loop to iterate over the All the characters 
    for(let i = 0 ; i < lengthStr1 ; i++){
        // *get the character and also handle the uppercase letters 

        let char = str1.charAt(i).toLowerCase();

        // !easy way 
        // if((vowelsString.includes(char))){   //*or using the not symbol also we can do in the if condition itself 
        //     continue;
        // }
        // else{
        //     Count++;
        // }

        // ! way using the inbuit methods 
        if( ( ! vowelsString.includes(char))  && (vowelsString.charAt(i) != " ")  && ( ! isFinite(vowelsString.charAt(i)))   ){   
            Count++;
        }


    }

    return  Count;
}

// call the function
let consonentCount1 =  consonentCount("Hi I am Manoj 1548451");

console.log("consonenet count = " + consonentCount1);



// ! Problem to convert the AM to PM (TimeZone)

function timeZone(time){
    // ^Approach 
    // ^I have to get the each hour , min  , seconds  and zone whether it is AM or PM 
    // ^ so to get the one by one use slice or the substring method 

    let hr = parseInt(time.slice(0 , 2));
    let min = parseInt(time.slice(3 , 5));
    let seconds = parseInt(time.slice(6 ,8));
    let zone = time.slice(9);

    console.log(hr);
    console.log(min);
    console.log(seconds);
    console.log(zone);

    let newTime24Zone = "";

    // * Now I have to write the condition 
    if(time.endsWith("PM") && hr != 12){
        hr = hr + 12;

        if(hr == 24){
            hr = 12;                    //! because 24 means 0 in the 24 hour clock 
        }

        return  (newTime24Zone + hr + ":" + min + ":" + seconds);  //*or using the bactics also I can do it
    }
    else{
        // ^ return the string by simply removing the AM

        return (newTime24Zone + hr + ":" + min + ":" + seconds);
    }
}

// *call the function 
let timeAfterConversion = timeZone("12:15:50:PM");

// let timeAfterConversion = timeZone("12:15:50:AM");

console.log("time After Conversion = " + timeAfterConversion);


// *Mock : 1) task , 2) 4 programs , 3) css theory Questions and this week entire


