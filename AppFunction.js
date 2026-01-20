//Function Declaration
function greetings(name, surname){
    console.log("Hello, " + name + " " + surname);
}

// Calling the function
greetings("Jer","Vardeleon");
greetings("Kat","Banas");



//EXAMPLE 1
function sum(num1, num2){
  return num1 + num2
}
console.log(sum(2,4))


// EXAMPLE 2
function convert(USD){
    console.log("AUD is " + USD * 1.5);
}
convert(1000)
convert(500)
convert(200)


// EXAMPLE 3 - Arrow function
const convUSDtoAUD = (US) => {
    console.log("AUD is " + US * 1.5)
}
convUSDtoAUD(1000)