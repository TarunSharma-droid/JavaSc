// <<<<<<<<<<<<<<< FUNCTIONS >>>>>>>>>>>>>>>>

// Method 1 to define : Known as "EXPRESSION" : where a varaible is holding an function

const Data1 = function(){
 console.log("the name is tarun")
 console.log("age is 22 years")
 console.log("learning web development")
}

Data1() // function call

// Method 2 to define 

function Data2(){
 console.log("the name is Aron")
 console.log("age is 32 years")
 console.log("learning music")
}

Data2()



// Adding two numbers by function

// method 1
function addTwoNum1(num1 , num2){ // num1 , num2 are parameters and value obtained by them are argumnets.

    return (num1 + num2)
}

addTwoNum1(2,3) // return to ho gyi value pr print nhi hui kyo ki na to function mai print ka function hai or na he yaha


// method 2
function addTwoNum2(num1 , num2){ 

    console.log(num1+ num2)
}

addTwoNum2(2,3) // value print hogi kyo ki function mai print ka functiuon used hai

// method 3
function addTwoNum3(num1 , num2){ 
    
   return (num1 + num2)
}

console.log(addTwoNum3(2,3)) // value print hogi kyo ki yaha print ka function use hua hai

// Important NOTE : 

function addTwoNum4(num1 , num2){ 
    
    console.log(num1+ num2)
}

const result = addTwoNum4(2,3) 
console.log("answer : " , result)                // gives the undefined result 
// kyo ki result mai value store he nhi ho rhi hai kyo ki function value return nhi kr raha hai.
// function kr raha hai bas printing .

function addTwoNum5(num1 , num2){ 
    
    return (num1 + num2)
}

const Result = addTwoNum5(2,3)  // return hoke ayi jo value vo store hui yaha
console.log("answer : " , Result)             // or yaha pr hamne print karva di ( to result aa gya five)

// NOTE : anything written below retun will never be executed .


function loginUserMessage(username){

   return  `${username} just logged in `

}

console.log(loginUserMessage("tarun"))

// if no arrgument is passed in the () than we get undefined
console.log(loginUserMessage())

// Checking weather argument is given or not ( by the help of if - else)


function loginUserMessage2(username){

   if(username === undefined){
    console.log("please enter valid argument")
   }

   else
   return  `${username} just logged in `

}

console.log(loginUserMessage2())

// IMPORTANT NOTE : when we dont now how many parameters can be present in the function <<<< REST operator >>>>

function calculateCartPrice(...num){ // rest operator is used
 
    return num  // now kitne bhi arrguments aye ye num sab ko return kr dega array ki form mai
}

console.log(calculateCartPrice(200,400,600,56)) // sari value aa jayngui array ki form mai

// Note : 

function calculateCartPrice2(val1,val2, ...num){ 
 
    return num  
}

console.log(calculateCartPrice2(200,400,600,56,7878))
// here val1 have value 200 val2 have value 400 and rest all the values are controlled by num.


// ++++++++++++++++++++++ INTERESTING ++++++++++++++++


// 1}
console.log(one(6))

function one(num){

    return num + 1
}

// 2}

console.log(two(6))

const two = function(num){

    return num + 1
}

// this last code will give error because when function is defined in the 
// EXPRESSION way then we cannot accesss before its itialization.