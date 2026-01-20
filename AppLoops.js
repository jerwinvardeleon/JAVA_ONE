// Using FOR
//---------------------------------

for (let i =0; i < 5; i++ ){
    console.log(i)
}


// Using WHILE
//----------------------------------
let counter = 1

while (counter <= 20 ){
    console.log(counter)
    counter = counter + 1;
}

console.log("DONE")


// EXERCISE

for (let x = 1 ; x <= 15 ; x++){
    if (x % 5 === 0){
        console.log(x + " is Fivey")
    }
    else if (x % 2 != 0){
        console.log(x + " is ODD");
    }
    else{
        console.log(x + " is EVEN")
    }
}


// EXERCISE

let word = "ASAP FRONTEND";

for (let z = 0 ; z < word.length ; z++ ){
        console.log(word[z])
}
