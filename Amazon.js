// 1. Recursion
function sum(n) {
  if (n === 0) return 0
  return n + sum(n - 1)
}
const sums = sum(10000)
// console.log(sums)

// 2. Search
function search(n, array) {
  if (array.includes(n)) return true
  return false
}
let arr = [1, 5, 8, 9, 11, 13, 15, 19, 21]
// console.log(search(2, arr))

// 3. Fibonacci
function fibonacci(n) {
  if (n === 0) return 0
  else if (n === 1) return 1
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
      let arr2 = stringNumber.slice(
        stringNumber.length / 2,
        stringNumber.length
      )
      let arr2Reverse = arr2.split("").reverse().join("")
      return arr2Reverse === arr1
    }
    if (stringNumber.length % 2 !== 0) {
      let arr1 = stringNumber.slice(0, stringNumber.length / 2)
      let arr2 = stringNumber.slice(
        stringNumber.length / 2 + 1,
        stringNumber.length
      )
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
    M: 1000,
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
function longestCommonPrefix(strs) {
  // Longest common prefix string
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
  for (let i = 0; i < minimumLength; i++) {
    // Get the current character from first string
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
function minimalHeaviestSetA(arr) {
    // Write your code here
    let A = [];
    let B = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2===0){
            A.push(arr[i])
            B.push(arr[i])
        }

    }
}

//
function isPrime(input) {
  if(input < 2){
    return false
  }
    else if(input === 2){
      return true
    }
  else{
    for (let i = 2; i <= input - 1; i++){
      if (input % i === 0) {
        return false;
      }
    return true;
  }
  }
}

const respo = isPrime(1)
console.log(respo)