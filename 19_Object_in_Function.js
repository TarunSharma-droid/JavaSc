
const user =  {
 
    name : "Tarun",
    age : 22,
    passion : "drama"

}

function information(takeObject){
   
    console.log( `Username is ${takeObject.name} and his age is ${takeObject.age}` )

}

information(user) // object is passed in the function


// Alternate method in which it is not necessary to make the object separatelly

function info(take){
   
    console.log( `Username is ${take.name} and his age is ${take.age}` )

}

information({
 name : "Rahul",
 age : 20
})