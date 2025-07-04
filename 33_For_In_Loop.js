// For-in loop is used to iterate on the object and arrays also.\

const obj = {

    name : "tarun",
    age :22 ,
    email : "tarunshama@gmail.com",
    CGPA : 7.77
}


for ( const i in obj){

    console.log(i)
}
// NOTE: if we declare only one varaible then variable will only holds keys of the object .
// But in for-of loop for map the single varaible use to store both keys and their values.
// And in case of array and string  a sinlge varaible gives the value of index/array when for-of was used.

// if we want both keys and their value then :

for ( const i in obj){

    console.log(`${i} => ${obj[i]}`)
}

// on array 

const arr = [23,454,2326,77,463,113,7,0,80]

for ( const i in arr){

//  console.log(i)  if we only take i then only get index of the elements
    console.log(`${i} => ${arr[i]}`)
}

