

// !Reverse the Given String 

function reverseString(firstName){
    let reversedString = "";

    // *using the loops 
    
    for(let i = firstName.length - 1 ; i >= 0 ; i--){
        // get the character 
        let char = firstName.charAt(i);
    
        reversedString = reversedString + char;
    }
    
    // console.log(reversedString);
    return reversedString;
}

let reversedString = reverseString("Manoj");

console.log(reversedString);





// *Vowels 

function countVowels(str){
    let count = 0;

    let length = str.length;

    for(let i = length - 1 ; i >= 0 ; i--){
        // get the character 
        let char = str.charAt(i);
        if(char === "a" || char === "e" char === "i" char === "a" char === "a" char === "a" char === "a" char === "a" char === "a" char === "a")
    }


}

countVowels("hi hello bye");



