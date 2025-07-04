
if (true){
      
    let a = 10 // have scope only inside the if block only as declared here
    const b = 20 // have scope only inside the if block only
    var c = 30 

}


// console.log(a) not gives  the result because "let a" have scope inside the if only
// console.log(b) not gives  the result because "const b" have scope inside the if only
console.log(c)  // but gives the result. 

// var doesnt follow the scope.

// NOTE : 
let v = 45   // declared globally : can be excesssed inside everywhere have "GLOBAL SCOPE"

if (true) {

    let v = 99   // this v has only scoped inside the if  statement : "BLOCK SCOPE"
    console.log(v)  // will give the value of v declared inside the if statement
}

 console.log(v) // will give the value of v declared globally

// NOTE : 

let k = 77   // declared globally : can be excesssed inside everywhere

if (true) {

    k = 99   // since no k is defined inside the if so this k will be consided as the outer k only.
             // and  we have changed the value of the outer k.
    console.log(k) // gives 99
}

console.log(k) // again gives 99 because value of outer k has changed.


// CONCLUSION ::::
// variables delared globally can be excessed anywhere in the code 
// varaibles declared inside the block like function , if - else , have their scope till their only and cannot be excessed outside.