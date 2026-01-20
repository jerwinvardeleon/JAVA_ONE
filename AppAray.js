//begginer method
let item1 = "apples"
let item2 = "eggs"
let item3 = "banana"
let item4 = "guava"

// instead of listing each above, use below...
let array = ["apples","bananas","eggs","guava"]
console.log(array[0])

// get the last element
console.log(array[array.length-1])

// ADD element, at the end.
array.push("milk")

// FILTER, using call back function
array.filter((item) => {
    console.log(item);
})