
const abc = Symbol() // defining an symbol key

const JsUser = {
  name : "Tarun",  
  age : 23 ,                       
  location : "Ajmer",                
  email : "tarunshama@gmail.com",     
  isLoggedIn : false,            
  "myClass" : 14, 
  12 : "rat", 
  [abc] : "hello" // predefinig the symbol key in the object only
}

console.log(JsUser)







