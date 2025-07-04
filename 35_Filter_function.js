const brr = ["help", 30,404,true, 108]

brr.forEach( (iteam) => {

    console.log(iteam)
})

// now if we try to store the values of brr

const values = brr.forEach( (iteam) => {

    return iteam
})

console.log(values) //  undefined : it mean for-each loop does not return any value.


// Now if we wants to store the values of array : use filter function not for-each LOOP

// Filter return an array 


// method 1)
const nextNums = [12,452,73,43,555,46,347,82]

const newNums = nextNums.filter ( (num) => { 

    return num > 50 // explicite return  :  here we use { } so have to use the return key word.
})

console.log(newNums)


// method 2) 
const anotherNums = nextNums.filter( (num) => num < 300 )  // implicite return

console.log(anotherNums)


// Now if we still wants to use the for-each loop only then we can d it like :

const numbers = [23,456,63,667,342,42,4,0,17,38,]
const answer = [] // have to define in which required things will get stroed

numbers.forEach( (num) => {  

    if (num > 100){

        answer.push(num) // answer mai push krdo num ko agar condition setisfy ho jaye to

    }
})
console.log(answer)


// if we do like  const answer = numbers.forEach ( (num) => {
// 
//                if (num > 100){

//                answer.push(num) 
//               }
//         } )

// this will not work beacuse for-each does not return array so we have to make the array first.
  

const books = [
    {
        name : "book1",
        price : 400,
        genre : "history"
    },
    {
        name : "book2",
        price : 700,
        genre : "science"
    },
    {
        name : "book3",
        price : 900,
        genre : "physics"
    },
    {
        name : "book4",
        price : 600,
        genre : "history"
    },
    {
        name : "book5",
        price : 400,
        genre : "science"
    }
]

let userBook = books.filter( (get) => get.genre === "science") // declare as let not const so that future changes are possible.

console.log(userBook)

userBook = books.filter( (get) => get.price > 400 && get.genre === "history")

console.log(userBook)

