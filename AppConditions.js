// Example 1
// --------------------------------------

let hasMembership = false;
let signedIn = true;

if (hasMembership === true){
    console.log ("User can Enter");
}

else if (signedIn === true){
    console.log("Get membership!")
}

else {
    console.log("User cant Enter");
}

// Example 2
// --------------------------------------

let age = 20

if (age > 20) {
    console.log("Enter")
}

else if (age === 20){
    console.log("Enter " + age)
}

else { 
    console.log("You can't. You're " + age)
}


// Example 3
// --------------------------------------
// Use && to check both side if true
// user || to check either side if true

let userAge = 18
let hasId = true

if (userAge >= 18 && hasId === true){
    console.log("Please Enter")
}

//TERNARY OPERATOR
//condition ? "show video" : "no video"

let isRaining = false

isRaining ? console.log("YES") : console.log("NO")