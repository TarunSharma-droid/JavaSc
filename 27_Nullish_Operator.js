// Nullish Coalescing Operator (??) : null undefined

let val1 

val1 = 15 ?? 10

console.log(val1) // will take the first value ( as both value are number)

val1 = null ?? 10

console.log(val1) // will take the value 10 ( if 10 was not presnet then null value will be taken)

val1 = undefined ?? 20

console.log(val1) // will take the value 20 ( if 20 was not presnet then undefined value will be taken)

val1 = undefined ?? 13 ?? 43

console.log(val1)