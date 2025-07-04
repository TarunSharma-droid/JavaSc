// Applying for-of Loop on object.
const myMap = new Map()

myMap.set("IN" , "India")  
myMap.set("USA" , "United State of America")
myMap.set("Fr", "France")
myMap.set("IN", "India") 


for ( const i of myMap){

    console.log(i)
}
// NOTE : if we only declare one varaible then variable will automatically hold both key and its value in Map .
// this is different from the case of array and string ( it means their is no way to print only keys by for-of loop
// for map in any case it will print both keys and their values.)



// Now if we define separate variable for key and value then we can separately print them excess them.
for ( const [i,j] of myMap){

    console.log(`The key is ${i} and its value is => ${j}`) // i will takes the value of each key of Map.
}

// NOTE : for-of loop works on Map but not on its look-alike Object gives error.

/* NOTE : for-of loop gives
          
            values : for array
            characters : for string
            keys and values : for map
            
        */
         
// const obj = {

//     name : "tarun",
//     age :22 ,
//     email : "tarunshama@gmail.com",
//     CGPA : 7.77
// }

// for  (const i of obj){

//     console.log(i)
// }


// Note : their is separate loop to iterate on objects that is for in loop.