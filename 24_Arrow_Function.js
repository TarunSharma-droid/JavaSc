
function chai() {

    let username = "tarun"
    console.log(this.username)
}

chai()


const bread = function(){

    let companyName = "amul"
    console.log(this.companyName)
}

bread()  // gives the same result for both type pf function declaration.

// ++++++++++++ ARROW FUNCTION +++++++++++++++++

const cokkies = () => {  // Arrow function :  remove the function keyword with =>

    let companyName = "sugarfree"
    console.log(this.companyName)

}

cokkies()


// 1}  Basics : Explicite return : return keyword and {} is used.

const addTwo = (num1 , num2) => {

        return num1 + num2
}

console.log(addTwo(5,75))



// 2}  Implicite return  :  curely braket and return is not used and function is defined in only one line

const addThree = (num1, num2, num3) => ( num1 + num2 + num3 )

console.log(addThree(5,75,60))

// {} use kiya to return keyword likhna he padega. varna jarurat nhi hai.



// 3} Note : 

const combine = (num1, num2) => ( {username : "tarun"}) // fucntion is returning an object here

console.log(combine(5,75))  // kuch bhi vakue de do no matter because function to object return kr raha hai.

