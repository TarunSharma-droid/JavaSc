// Object Destructure : done to excess the long keys by short name and eaily

const course = {

    coursename : "Js in Hindi",
    Duration : 70,
    price : 999,
    courseTeacher : "tarun"
}

console.log(course.coursename) 

const{coursename} = course // this line is telling extract coursename from course.
// this is object destructure

// after object destruct we can directly print the coursename that means we dont need dot notation
console.log(coursename)

// Also if the key name is too long then in that case we can do

const{courseTeacher : Sir} = course // object destructre (courseTeacher is given short name Sir)
console.log(Sir) 