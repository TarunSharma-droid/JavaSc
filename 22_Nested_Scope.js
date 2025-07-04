// 1}
function one(){

    const username = "tarun"

    function two(){

        const website = "youtube"
        console.log(username)
    }
     
    two() // function two is called but its parent is not called so give no result.
}

// 2}
function three(){

    const username = "tarun"

    function four(){

        const website = "youtube"
        console.log(username) // gives result as username is defined in the heigher scope.
    }
     
    //console.log(website) // will give error because website is defined inside the four and its scope is only till the four.

    four() 
}

three() // parent is also called so gives result

// CONCLUSION ::::
// Child function parent function ki values ko excessed kr sakta hai 
// But parent function child function ki values ko excessed nhi kr sakta

// 3} similarly

if (true){

    const name = "Mr. Tarun"

    if(true){

        const name2 = "Lakshita"
        console.log(name)
    }

  //   console.log(name2)  // will not run

}

//     console.log(name)  // will not run

