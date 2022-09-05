// 1. Recursion
function sum(n) {
  if (n === 0)
    return 0





  return n + sum(n - 1)
}
const sums = sum(10000)
// console.log(sums)

// 2. Search
function search(n, array) {
  if (array.includes(n))
    return true





  return false
}
let arr = [
  1,
  5,
  8,
  9,
  11,
  13,
  15,
  19,
  21
]
// console.log(search(2, arr))

// 3. Fibonacci
function fibonacci(n) {
  if (n === 0)
    return 0
   else if (n === 1)
    return 1





  return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(9))

// 4. Palindrome
function palindrome(n) {
  const stringNumber = n.toString()

  if (stringNumber.length === 1) {
    return true
  }

  if (stringNumber.length < 3) {
    if (stringNumber.charAt(0) === stringNumber.charAt(1)) {
      return true
    }
    return false
  } else {
    if (stringNumber.length % 2 === 0) {
      let arr1 = stringNumber.slice(0, stringNumber.length / 2)
      let arr2 = stringNumber.slice(stringNumber.length / 2, stringNumber.length)
      let arr2Reverse = arr2.split("").reverse().join("")
      return arr2Reverse === arr1
    }
    if (stringNumber.length % 2 !== 0) {
      let arr1 = stringNumber.slice(0, stringNumber.length / 2)
      let arr2 = stringNumber.slice(stringNumber.length / 2 + 1, stringNumber.length)
      let arr2Reverse = arr2.split("").reverse().join("")
      return arr2Reverse === arr1
    }
  }
}
// console.log(palindrome(10))

// 5. Roman to numbers
function romanToInt(rom) {
  let arrayStringRoman = rom.toUpperCase().split("")
  let accumulator = 0
  let arrHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (let i = 0; i < arrayStringRoman.length; i++) {
    if (arrayStringRoman[i] === "I" && arrayStringRoman[i + 1] === "V") {
      accumulator += 4
      i++
    } else if (arrayStringRoman[i] === "I" && arrayStringRoman[i + 1] === "X") {
      accumulator += 9
      i++
    } else if (arrayStringRoman[i] === "X" && arrayStringRoman[i + 1] === "L") {
      accumulator += 40
      i++
    } else if (arrayStringRoman[i] === "X" && arrayStringRoman[i + 1] === "C") {
      accumulator += 90
      i++
    } else if (arrayStringRoman[i] === "C" && arrayStringRoman[i + 1] === "D") {
      accumulator += 400
      i++
    } else if (arrayStringRoman[i] === "C" && arrayStringRoman[i + 1] === "M") {
      accumulator += 900
      i++
    } else {
      accumulator += arrHash[arrayStringRoman[i]]
    }
  }
  return accumulator
}
let str = "iiix"
// console.log(romanToInt(str))

// 6. Longest Common Prefix
function longestCommonPrefix(strs) { // Longest common prefix string
  let longestCommonPrefix = ""
  // Base condition
  if (strs == null || strs.length == 0) {
    return longestCommonPrefix
  }
  // Find the minimum length string from the array
  let minimumLength = strs[0].length
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length)
  }
  // Loop for the minimum length
  for (let i = 0; i < minimumLength; i++) { // Get the current character from first string
    let current = strs[0][i]
    // Check if this character is found in all other strings or not
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix
      }
    }
    longestCommonPrefix += current
  }
  return longestCommonPrefix
}

let strs = ["flower", "flow", "flight"]
// console.log(longestCommonPrefix(strs))


// Amazon
function minimalHeaviestSetA(arr) { // Write your code here
  let A = [];
  let B = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      A.push(arr[i])
      B.push(arr[i])
    }

  }
}

// isPrime
function isPrime(n) {
 let m = Math.ceil(Math.sqrt(n));
 let res = n/m
 if (Number.isInteger(res)) return false;
 return true;
}

const respo = isPrime(2017)
 //console.log(respo)

// Structy
const maxValue = (nums) => {
  nums.sort((a,b)=>a-b)
  if (nums.length === 1) {
    return nums[0];
  } else {
    let min = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
          max = nums[i + 1];
        } else {
          min = nums[i];
        }
      }
      return max;
    }
}

const nums = [5];
//console.log(maxValue(nums))

// Amazon hackerrank
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function jumpingOnClouds(c) {
  let countJump = 0;
  let cLen = c.length
  for(let i = 0; i < c.length + 1; i += 1){
      if (((c[i] === 0) && (c[i + 1] === 0)) || ((c[i] === 0) && (c[i + 1] === 1))){
          countJump++;
          }
      if (((c[i] === 0) && (c[i + 1] === 0) && (c[i + 2] === 0))){
          countJump--;
          }
      if ((c[i] === 1) && (c[i + 1] === 0)){
          countJump += 0;
          }
  }
  return countJump
}

let c = [0,0,1,0,0,1,0]
//console.log(jumpingOnClouds(c))

let s = "a"
let n = 10000000
let count = 0
for(let i = 0; i < n%s.length- 1; i++){
  s+="aba"
}

//count = n/s.length * count;

for(let j = 0; j < n%s.length; j++){
  if(s.charAt(j)==='a'){
    count++;
  }
}
console.log(s)
console.log(count)
