
// ++++++++++++++ if - else statement +++++++++++++++

let age = 20  

if (age > 34) { // only works when the condition inside the if statement is ture
 
    console.log("your age is greater than 34")

}

else{
    console.log("your age is smaller than 34")
}


// ++++++++++++++ implicite declaration ++++++++++++++++ // don't need {} and use ,

let balance = 500

if (balance > 400) console.log("rupees is greater then 400") ,
console.log("profit hua hai")


// ++++++++++++++ if - else ladder (if - else if ) +++++++++++++++++++
// if any block is executed than next block will not get executes.


const myBalance = 680

if (myBalance < 500) {

    console.log("less than 500")
}
    else if (myBalance < 600){

        console.log("less than 600")
    }

    else if(myBalance < 700){

        console.log("less than 700")
    }

    else {
        console.log("less than 1000")
    }

// Use of logic operators

const userLoggedIn = true
const debitCard = true
const panCard = false

// 1}
if (userLoggedIn && debitCard){ // and is used

    console.log("valid user")
}

// 2}
if (userLoggedIn || panCard ){ // or is used

    console.log("valid user")
}



// ++++++++++++++ Switch Statement ++++++++++
const month = 2 

switch (month){

    case 1 :
        console.log("january")
        break;

    case 2 : 
        console.log("february")
        break;
 
    case 3 : 
        console.log("march")
        break;

    default :
       console.log("not the starting three months of the year")
}

// if we dont apply break in switch statement then all the below statement will get printed except default


// NOTE
const cash = 250 

switch (cash){

    case (cash < 300) :
        console.log("less then 300")
        break;

    case (cash < 400) : 
        console.log("less than 400")
        break;
 
    case (cash < 500) : 
        console.log("less than 500")
        break;

    case (cash < 600) : 
        console.log("less than 600")
        break;

    default :
       console.log("good amount")
}

// NOTE : Use if - else - if for range or condition-based checks. as switch creates problem and works differently in JS.


// +++++++++++++++ Terniary Operator ++++++++++++++

// condition  ?  true : false 

const num = 5

num > 2  ? console.log("you are good") : console.log("you are bad")