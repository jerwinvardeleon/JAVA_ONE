// SIMPLE USE OF OBJECTS
// ===================================================================

let user = {
    email: "example@gmail.com",
    password: "test1234",
    name: "John",
    discord: "exampledisc",
    subscription: "VIP+",
    lessonCompleted: [1, 2, 3]
}

// below works if there is only one object
console.log(user.email) // to get the email property
console.log(user.password) // to get the passowrd property
console.log(user.name[0]) // to get the first letter of name



// USE MULTIPLE OBJECTS
// ==============================================================

let users = [
    {
        email: "example@gmail.com",
        password: "test1234",
        name: "John",
        discord: "exampledisc",
        subscription: "VIP+",
        lessonCompleted: [1, 2, 3]
    },
    {
        email: "example2@gmail.com",
        password: "test1234",
        name: "Jane",
        discord: "exampledisc",
        subscription: "VIP++",
        lessonCompleted: [4, 5, 6]
    }
]

// if there are multiple objects
console.log(users[0].lessonCompleted)

// changing value of an object
console.log(users[0].lessonCompleted.map(element => element * 3))



// EXAMPLE
// create a function that accepts parameters and push it onto the object above

function signUp(email, pass, name, discord, subsc, lesson) {
    let userA = {
        email: email,
        password: pass,
        name: name,
        discord: discord,
        subscription: subsc,
        lessonC: lesson
    }
    users.push(userA)
}
signUp("johnsmith@gmail.com","test123","Johnn Smith","JohnDisc","VIP",[1,2]);

console.log(users)