const User = {
  name : "Tarun",  
  age : 23 ,                       
  location : "Ajmer",                
  email : "tarunshama@gmail.com",     
  isLoggedIn : false,            
}

notation = function(getvalue){
    console.log("Good Human being")
    console.log(`Your name is ${getvalue.name}`)
}

console.log(notation(User))

// undefined appearing in terminal :  will be resolved later


// We can also use the "this" keyword

notation = function(getvalue){
    console.log("Good Human being")
    console.log(`Your name is ${this.name}`)
}

console.log(notation(User))