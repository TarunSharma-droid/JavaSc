/* In javascript the non primitive data types are 
saved as reference in heap memory but the primitive data
types are saved as copy of value in stack memory only */

let userOne = { // object = nonprimitive datatype
    Name : " tarun",
    age : 18
}

let userTwo = userOne
console.log(userTwo)

/* Change is made in userTwo , but visible in both the user as both
are referencing to the same value in the heap memeory */ 

userTwo.age = 29

console.log(userOne)
console.log(userTwo)

// <<<< Primtive data type >>>>>>>

let a = 4
let b = a
console.log(b)

b = 7

console.log(a) // value of a will not be changed as the copy of its value is transfered to the b and not the original value.
console.log(b)