const accountId = 134  // Constant : value given cannot be changed again
let accountEmail = "tarunsharma.com" //  follows scope of variable principle
var accountPassword = "123444555" //  does not follow scope of varible principle .. i.e. value of the function can be changed anywhere in any function.
account_City = "ajmer"

let accountState

/* Prefered no to use var for declaring the variable because of issue in functional scope and
block scope  */

accountEmail = "rahul@ra.com"
account_City = "jaipur"
accountPassword = "3456"
// accountId = 456 // give the run time error as const can't be changed

console.log(accountId); 
console.table([accountId, accountEmail, accountPassword, account_City, accountState])

/* In JS the varaible does not given any value will remain undefined during the runtime */