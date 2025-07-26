 // Object inside the object

const User = {
    UserId : 123,
    Fullname : {  
        FirstName : "Tarun",
        MiddleName : null ,
        LastName : "Sharma",
    }
}

console.log(User.UserId)
console.log(User.Fullname) 
console.log(User.Fullname.LastName)


// 1} adding two oobjects

const obj1 = {
    name : "Tarun"
}
const obj2 = {
    surname : "Sharma",
    age : 22
}
const obj3 ={
    category : "general"
}

// Method 1
const resultant = { obj1 , obj2}
console.log(resultant)

// Method 2  <<<<< ASSIGN keyword >>>>>
const target = Object.assign({},obj1, obj2,obj3)   // here {} is a target and all other are sources
console.log(target)

// Method 3 {Best Way}
const result = {...obj1,...obj2,...obj3}
console.log(result)


// 2} Object inside the array

const Users = [
    {
        id : 1,
        name : "tarun"
    },
    {
        id : 2,
        name : "sahil"
    },
    {
        id : 3,
        name : "mandy"
    }
]

console.log(Users[1])
console.log(Users[0].name)

// 3} Getting all the keys of the object .

console.log(Object.keys(User)) // all keys will apperas in the form of array.

// 4} Similarly getting only all the values of object.

console.log(Object.values(User))  // all values will also apperas in the form of array.


// 5} Getting all values and keys as separate array inside the array

console.log(Object.entries(User))

// 6} Checking for a key in object <<<<hasOwnProperty>>>

console.log(User.hasOwnProperty("isLoggedIn")) // give boolean result