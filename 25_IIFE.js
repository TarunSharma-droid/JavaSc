// Immediately Invoked Function Expression ( IFEE )

/* Somtime global varaibles { globsl scope} creates problem (pollution )
in the function .

To overcome that pollution IFEE are used . These are the function 
declared with different syntax where we write the function inside a 
() and also dont need to call the function by the name infact we only 
need () in the end and compulary to put the ; after the IFEE because once 
IFEE are called they dont know when to stop so we need to end then by
putting the semicolon ; . 

IFEE are the function which are executed just after their creation */


( function chai(){
   
    console.log("Kuch kuch hota hai")

}) (); // this () tells the function execution 



// IFEE decaled as a arrow function

// 1} named IFEE because function name is present
(  pani = () => ( console.log("Pyaar hua") )

) ();



// 2} unnamed IFEE because function name is not present. {here a arrow function is used without a name}
(   () => ( console.log("Diwana hua badal") )

) ();



// When arrgument is passed

(  death = (duration) => ( console.log( `Death is after ${duration}`) )

) ("seventy years"); // value is passed when fucntion is called