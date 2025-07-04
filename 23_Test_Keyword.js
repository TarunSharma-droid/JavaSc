
// 1}
const user ={
    username : "Tarun",
    age : 22,

    welcomeMessage : function(abc) {

       console.log(`${abc.username} , welcome to my world`) 
    } 
}

user.welcomeMessage(user)
user.username = "Alferd"
user.welcomeMessage(user)

// 2} // "this"   is used to excess the username inside the function without taking it as a parameter. 

const info ={
    username : "Tarun",
    age : 22,

    welcomeMessage : function() {

       console.log(`${this.username} , welcome to my world`) 

    } 
}

info.welcomeMessage()

info.username = "Sam" 
info.welcomeMessage()

// 3} // "this"  will be holding the object only in which it is defined. without taking it is as parameter
const info2 ={
    username : "Tarun",
    age : 22,

    welcomeMessage : function() {

       console.log(`${this.username} , welcome to my world`) 

       console.log(this)

    } 
}

info2.welcomeMessage()


// NOTE ::::

// 1}
console.log(this) // gives {} as value in the node environment but "window object" in browser.

// 2}
function chai() {

console.log(this) // gives many values in the node environment when this is printed inside a function . 
}

chai()

// 3}

function chaiWithMe() {

let username = "tarun"
console.log(this.username) // undefined :: this type of syntax only works inside the objects and not in the functions.
}

chaiWithMe()



