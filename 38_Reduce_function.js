const mynums = [ 5 ,6,7,8,9]

// Syntax :
/* mynums.reduce( (accumulator , currentvalue , inital value of accumulator) => accumulator + currentvalue) 

initially accumultor have intial value which is defined by the user.
1} accumultor =  0 current value = 5  gives 0 + 5 = 5 again in accumultor
2} accumulator = 5 current value = 6  gives 5 + 6 = 11 again in accumulatot .. so on

and in the end final value will get return.
*/

// Basic declaration
const myTotal = mynums.reduce( function (acc,current){

    console.log(`accumulator : ${acc} and current value : ${current}`)
    return acc + current // this return will again get stored in accumulator.

} ,0)  // this 0 tells accumulator will initally have 0 value

console.log(myTotal)

// Arrow function declaration
const myTotal2 = mynums.reduce( (acc,current) => acc + current , 0)

console.log(myTotal2)


// Example :: shopping

const cart = [
    {
        item : "butter",
        price : 120
    },
    {
        item : "namkeen",
        price : 60
    },
    {
        item : "soap",
        price : 25
    },
    {
        item : "tomato",
        price : 40
    }

]

const bill = cart.reduce((acc,current) => acc + current.price ,0 ) // current will excess the object of iteam.

console.log(`Your bill is : ${bill}`)