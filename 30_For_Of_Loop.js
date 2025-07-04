// for-of loop  ( array / string / Map specific loop)

// on array
const newArray = [11,22,33,44,55]

for( const i of newArray){ // variable declaration and on which array the loop is applied

     console.log(i) 
}

// NOTE: for array : when for-of loop is defined with only single varaible (i) then it will takes the value of each index of the array.

// on string
const compliment = "Good-Boy"

for( const i of compliment){

    console.log(i)
}

// NOTE : for string : when for-of loop is defined with only single varaible (i) then it will again only takes the value of each index of the string