"use strict"; // treat all the JS code written in this file according to newer version of JS by the engine.

// alert (3+3) // we are using nodejs , not browser

let Name = "tarun"    // string data type
let age = 18          // number data type 
let isVergin = false  // boolean
let Wifes = null
let score
let Id = Symbol("123")
let anotherID = Symbol("123")

// According to the how data is stored in the memory data types are of two types.
//********** "PREMITIVE DATA TYPES"*************
// number { 2 to the power 53}
// bigint
// string => ""
// boolean = true/ false
// null => repesentation of empty value.
// undefined => value not assigned yet.
// symbol => unique

console.log(typeof Name )
console.log(typeof age)
console.log(typeof isVergin)
console.log(typeof Wifes) // type of variable defined as null will be object
console.log(typeof score) // type of varaible which is not defined will remain undefined
console.log(Id)
console.log(typeof Id)

// two symbol data types having the same vaslue will never be equal
console.log( Id == anotherID )

//<<<<<<<<<<NON PRIMITIVE DATA TYPES>>>>>>>>> 
// Array
// Functions
// Objects

