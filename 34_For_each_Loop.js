//  1 } for -each loop :::: for array 

const arr = [ 12,334,55,'data',56,7]

arr.forEach( function( i ){ // i is the element of the array

    console.log(`the value is ${i}`)
})  

arr.forEach( function( i ,j ){ // if we define tweo elements than i is the element of the array  and j is index

    console.log(`the value is ${i} and index is ${j}`)
})

arr.forEach( function( i , j ,k ){ // i is element , j is index , k is array list

    console.log(`the value is ${i} and index is ${j} and arrayList is ${k}`)
})

// 2} if we define function in the terms of the arrow function 

const brr = ["help", 30,404,true, 108]

brr.forEach( (i) => {

     console.log(`the value is ${i}`)
})

// 3} if we give predefined function as the argument in for-each loop.

const crr = [ 12,24,232,12333,443,89]

function print(iteam){

    console.log(iteam)
}

crr.forEach( print) // here we have not defined the function inside the for - each but outside.
// note write print not print() beacuse we are not calling the function but giving its reference only.


// 4} objects as the element of the array

const myCoding =[ // array

        { languageName : "Javascript",
            code : 3             
        },

        {languageName : "Java",
            code : 2             
        },

        {
        languageName : "C++",
            code : 7
        }  ]

myCoding.forEach( (item) => {

    console.log(item.languageName)
})
