// (DOM) DOCUMENT OBJECT METHOD
// 1st METHOD targeting
document.querySelector("#heading1") //targeting an element from html

// 2nd METHOD targeting
document.getElementById("heading1") 

// changing element value
document.querySelector("#heading1").innerHTML = "NEW VALUE"

// adding content from the element
document.querySelector("#heading1").innerHTML += "NEW VALUE"

// change CSS
document.querySelector("h1").style.color = "Red"

function changButtonToGreen(){
    document.querySelector("#buttons").style.color = "white";
    document.querySelector("#buttons").style.background = "blue"
}

// change class name
function toggleSideBar(){
    document.querySelector("body").classList.toggle("open")
}