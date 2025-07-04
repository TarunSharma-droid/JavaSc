console.log(2>1)
console.log(2<1)     
console.log(2==1)
console.log(2<=1)
console.log(2>=1)

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* The reason is that an equality check == operator and the 
comparison operators that is < > >= <= works differently .

These  comparison operators converts the null to a Number, treating it as 0
That's why (3) null >= 0 is true  and (1) null > 0 is false . \
But the equality operator == does not makes null to 0  */

console.log( undefined == 0 )  // false
console.log( undefined <= 0 )  // fasle
console.log( undefined >= 0 )  // fasle



// For the simple oprators, string is converted into the simple number in JS
console.log( "2" > 1 )    // true
console.log( "2" > 3 )    // false
console.log( "2" == 2 )   // true

// ******* Strict check  ( === ) *******
console.log( "2" === 2 )  // False : strict check checks the data type of both the operands also in JS
