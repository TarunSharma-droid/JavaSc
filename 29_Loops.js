// Loops are also known as iterations  or iterators . 

// 1} for loop 

const branch = 10

for ( let index = 0 ; index <= branch ; index++){

    console.log(index)
}

// 2} nested loop  : loop inside the loop

const myheroes = ["shaktima" , " nagraj " , "hanuman" , "flash ", "superman"]

for ( let i = 0 ; i < myheroes.length ; i++){

    for ( let j = 0 ; j < 3 ; j++){

        console.log(myheroes[i])
    }
}

// 3} break and continue statements 

for ( let i = 1 ; i <= 10 ; i++){

    if ( i == 5){
        break
    }
    console.log(`and the value of i is ${i}`)

}


for ( let i = 1 ; i <= 10 ; i++){

    if ( i == 5){  // at i == 5 the loops will get continue to the next iteration without any execution
        continue
    }
    console.log(`value of i is ${i}`)
}

// 4} while loop 

let i = 0             // agar let ki jagah const declare krenge to nhi chalega because fir i ki value constant (not changable) ho jaygi
while ( i < 5){

    console.log("Hello, Tarun")
    
    i++
}

// 5} do while loop --> atleast runs once

let j = 1

do{
    console.log("Hello World")
    j++

}while( j < 5 )


