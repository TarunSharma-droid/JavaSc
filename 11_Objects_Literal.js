// <<<<<< OBJECTS >>>>>>>
/*
  Can be define by two methods : 

1} Constructor method : in which singleton is made
   syntax --> object.create
2} Literal method : in this singleton is not made 
   syntax --> const obj = {} can be empty or cannot be also.
   
*/

// Object literals

const JsUser = {   // object of literal type

  name : "Tarun",                          // name is key and tarun is value
  age : 23 ,                               
  location : "Ajmer",                  
  email : "tarunshama@gmail.com",          
  isLoggedIn : false,                     
  lastLoggedIn : ["Monday" , "Friday"  ],  

  "myClass" : 14, 
  12 : "rat", 
}

console.log(JsUser)
console.log(typeof name)
console.log(typeof age)
console.log(typeof location)
console.log(typeof isLoggedIn)
console.log(typeof lastLoggedIn)

/* All name, age, location,isLoggedIn, lastLoggedIn are object properties (normal identifier-style key.
these keys doesn’t have spaces or special characters.), not the independent variables.

When we do console.log(typeof name) JavaScript looks for a variable called name, not the name property of JsUser(object defined). 
Since you didn’t declare a variable named name, it's type will be undefined same with the other keys also.

We can only excess these properties througt the name of the object. like
JsUser.name
JsUser["name"]

*/ 
console.log(typeof JsUser.name)         // type of the value will be string
console.log(typeof JsUser.age)          // type of the value will be number
console.log(typeof JsUser.location)     // type of the value will be string
console.log(typeof JsUser.isLoggedIn)   // type of the value will be boolean
console.log(typeof JsUser.lastLoggedIn) // type is the value is array and array type is itself object.


/* We will see console.log(type of "myClass") is working here .
Because "myclass" is a string (or string literal) already. Similarly 12 is number. */

console.log(typeof "myClass") // since we have defined it as string so type of "myClass" is string.
console.log(typeof 12) // similarly we have defined it as number so type of 12 will be number.



/* NOTE --> the keys which are alredy defined as "string or number etc" already, we cannot checks the type
of its value by the simple method .

We have to use the different method for to check the type of their values. 

console.log(typeof JsUser."myclass") --> this will not work here {gives error} have to use the differnet method */

console.log(typeof JsUser["myClass"]) // type of the value given to "myClass" is number here
console.log(typeof JsUser[12]) // type of the value given to 12 is string here


/* Similarly we also cannot excess the value of keys predefined as string or number by the simple method .. we have to 
use the different method to excess their values

e.g. console.log(JsUser.name) --> will not gives error but
     console.log(JsUser."myClass") --> will give the error */

console.log(JsUser.name)
console.log(JsUser["myClass"]) // special method use to type its value
console.log(JsUser[12])        // special method use to type its value
 
// Now if we want to add a new string key to the object than also have to usee the bracket method not dot method

JsUser["GameCode"] = 20 // that means we cannot do like  JsUser."GameCode"= 20

// Similarly
JsUser[20] = "terminator" // we cannot do like JsUser.20 = "terminator"

console.log(JsUser)


// ++++++++++++++++++++++++++++++++++++++ Some basics +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1= {
  email : "hat_Ja_na_@gmail.com",
  num : 23,
}

// 1} element access 
console.log(obj1.email)

// 2} value change
obj1.num = 34
console.log(obj1.num)

// 3} adding key to the object
obj1.class = 14               // added a new key name class to the object
console.log(obj1)


// 4} we can also add function in object

obj1.greetings = function(){  //  added a new key name greetings which is a function to the object
  console.log("Hello Tarun")
}
console.log(obj1)
//console.log() in many environments (like Node.js or browser) doesn’t try to display the entire contents of a function.
// It just shows it as a Function placeholder.

console.log(obj1.greetings)   // tells [Function (anonymous)] as greetings is a function.
console.log(obj1.greetings()) // since greeting is a function so we have to use () with it to get the result.


// 5} Freez : after using it no changes will be made in the object
Object.freeze(obj1)

obj1.num = 77
console.log(obj1.num)