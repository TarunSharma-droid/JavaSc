// Chaining


// 1}
const nums = [12,56,92,49,12,7]

const hold = nums.map((i) => i * 10 ).map((i) => i + 5)

console.log(hold)


// 2}

const nums2 = [12,56,92,49,12,7]

const hold2 = nums2.map((i) => i * 10 ).map((i) => i + 5).filter((i) => i >200)

console.log(hold2)

// it means we can do multiple chaining .
// in each function i will hold the new value .