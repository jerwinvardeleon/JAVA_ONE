//begginer method
let item1 = "apples"
let item2 = "eggs"
let item3 = "banana"
let item4 = "guava"

// instead of listing each above, use below...
let array = ["apples", "bananas", "eggs", "guava"]
console.log(array[0])

// get the last element
console.log(array[array.length - 1])




// ARRAY .PUSH METHOD /////////////////////////////////////////
// ADD element, at the end.
array.push("milk")


// ARRAY .FILTER METHOD /////////////////////////////////////////
// FILTER, using call back function
// 

let filteredArray = array.filter(item => {
    console.log(item);
    return true
})
console.log(filteredArray)


// Example 2
// =========

let array2 = [20, 15, 10, 30]

let filteredArray2 = array2.filter(price => {
    console.log(price);
    if (price <= 15) {
        return true
    }
    // This can also be used instead of the IF statement
    // --- "return element <=15;"
    // since the formula is a boolean method that returns true or false
})
console.log(filteredArray2)


// Example 3
// =========

let people = [18, 20, 16, 15, 21]

let adults = people.filter(age => {
    console.log(age)
    if (age >= 18) {
        return true;
    }
})
console.log(adults)


//////// short version of Example 3
let people2 = [18, 20, 16, 15, 21]

let adults2 = people2.filter(age => age >= 18);

console.log(adults2)


//////// using FOR method
let peeps = [18, 20, 16, 15, 21]

for (let i = 0; i < peeps.length; i++) {
    if (peeps[i] >= 18) {
        console.log(peeps[i])
    }
}



// ARRAY .MAP METHOD /////////////////////////////////////////
// MAP FUNCTION changes each element to a new value assigned

let arrayX = [1, 2, 3, 4, 5]

let newArray = arrayX.map((element) => {
    return "wtf"
})
console.log(newArray)

// short hand version5
let newArray2 = arrayX.map(elementx => "wtf");
console.log(newArray2)

// exammple 1 - convert USD to AUD
let usDollars = [10, 20, 30, 40]

for (let j=0 ; j < usDollars.length ; j++){
    console.log(usDollars[j] * 1.5)
}

// example 1 - another solution using .map method
// let usDollars = usDollars.map(element) => element * 1.5)
// console.log(usDollars);