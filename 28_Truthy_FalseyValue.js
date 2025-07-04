/* 
   Falsy value : false he man liya jata hai 
   
   false , 0 , -0 ,BigInt 0n , ""(empty string " without space") , null , undefined , NaN 
   
   Truthy values : true he man liya jata hai  : rest everything are considered as true

   like --> "0" (0 is written inside the string here) ,
            "false" 
            [] (empty array)
            " " ( with space) 
            {} (empty object)
            function(){} (empty function)

*/


const userEmail = "tarunsharma@gmail.com"
 
if(userEmail){
    console.log("Got the user email")

}
else {

    console.log("Dont have user email")
}



if ( "" ){ // does not run "" is considered false and if statement does not run false condition

    console.log("falsy value")
}


// To check the object is empty

const abc = {} //empty object

if ( Object.keys(abc).length === 0 ){
 
    console.log("the object is empty")
}
/* Object.keys(abc) --> this function will retun all the keys of the object in from of array.
   Since here object is empty so the key array will also be empty [].
   Now since the length of the empty array is 0 .
   So Object.keys(abc).length will retun 0.

*/