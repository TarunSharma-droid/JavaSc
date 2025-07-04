let score = "33"

console.log(typeof score) 
console.log(typeof(score)) //2nd way

// Conversion method for string having number into the number
let abc = Number(score)
console.log(typeof abc) // now the abc will have the number value 

// DRAWBACK of JS 
// it also converts proper string into the number which is not vallidly ture

let marks = "33abc"
console.log(typeof marks)

let newMarks = Number(marks)
console.log(typeof newMarks)
console.log(newMarks) 
/* Actually newMarks will show the type 'number' as we have defined it as number 
but when we ask to print its value then terminal will give "NaN" that means not a 
number */

let rbc = null
console.log(typeof rbc)
let kbc = Number(rbc) // the varaible given null value will get 0 on converting it into number
console.log(kbc)

let bbb
console.log(typeof bbb)
let zzz = Number(bbb) // the varaible which is undefined will give NaN on converting it into number
console.log(zzz)


let black = true
let blue = Number(black) // will give the 1 value for the true value and 0 for the false and vice-versa
console.log(blue)

let isLoggedIn = 1
let permit = Boolean(isLoggedIn)
console.log(permit) // will give the true as the result

// Coversion of the empty string and string into the boolean
let car = ""
let gy = Boolean(car)
console.log(gy) // will give the false as the answer 

let uuu = "gyub"
let hhh = Boolean(uuu)
console.log(hhh) // will give the true value for the non empty string

// a number could also be converted as the string