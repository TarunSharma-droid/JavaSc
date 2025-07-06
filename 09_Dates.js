// <<<<<<< DATES >>>>>

let myDate = new Date() // defining an object myDate in which date will be stored
console.log(myDate)
console.log(typeof myDate)

// coverting mydate into string but type will remain object

console.log(myDate.toString())
console.log(typeof myDate) // still the type will be object only

console.log(myDate.toDateString()) // gives day and date
console.log(myDate.toISOString())  // acoording to intenational standards
console.log(myDate.toLocaleString())      // gives date and time according to locale standard
console.log(myDate.toLocaleDateString())  // gives only locale date.
console.log(myDate.toLocaleTimeString())  // gives only locale time.
console.log(myDate.toJSON()) 

// Declaring a Date
let myCreatedDate = new Date(2025,10,13) // months are started from zero in JS so nov. is represented by 10
console.log(myCreatedDate.toLocaleDateString()) 

// Alternate method : 
// but when decalre in formate like YY-MM-DD or MM-DD-YY than months are started from 1

let newDate = new Date("2025-08-15")
console.log(newDate)
                                             

// <<<<<< TIME STAMPS >>>>>>
let myTimeStamp = Date.now()
console.log(myTimeStamp) // this will give the millisecond value of today from 1/1/1970


// getting the millisecond value of any inserted date
console.log(newDate.getTime()) 
/* now through this we can compare the millisecond value of any date to millisecond value 
 of todays date */

// To convert the today's timestamp in seconds

let fff = Date.now()
console.log(Math.floor (fff / 1000) )   


let Date1 = new Date();
console.log(Date1.getMonth() + 1)  // +1 because months starts from zero
console.log(Date1.getDay()) // get the day of the week




let Date2 = new Date()
console.log(Date2.toLocaleString())

Date2.toLocaleString('default' ,{
    weekday : "long" //use ctrl + space to see other properties also
})    
console.log(Date2)

