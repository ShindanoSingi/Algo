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
     let res = n / m
     if (Number.isInteger(res))
          return false;



     return true;
}

const respo = isPrime(2017)
// console.log(respo)

// Structy
const maxValue = (nums) => {
     nums.sort((a, b) => a - b)
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
// console.log(maxValue(nums))

// Amazon hackerrank
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function jumpingOnClouds(c) {
     let countJump = 0;
     let cLen = c.length
     for (let i = 0; i < c.length + 1; i += 1) {
          if (((c[i] === 0) && (c[i + 1] === 0)) || ((c[i] === 0) && (c[i + 1] === 1))) {
               countJump++;
          }
          if (((c[i] === 0) && (c[i + 1] === 0) && (c[i + 2] === 0))) {
               countJump--;
          }
          if ((c[i] === 1) && (c[i + 1] === 0)) {
               countJump += 0;
          }
     }
     return countJump
}

let c = [
     0,
     0,
     1,
     0,
     0,
     1,
     0
]
// console.log(jumpingOnClouds(c))

// Amazon hackerrank
https : // www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n) {
     let count = 0
     for (let i = 0; i < s.length; i++) {
          if (s.charAt(i) === "a") {
               count++;
          }
     }

     count = Math.floor(n / s.length) * count;

     for (let j = 0; j < n % s.length; j++) {
          if (s.charAt(j) === 'a') {
               count++;
          }
     }
     return count
}

// ================================================================
let count = [
     2,
     8,
     60,
     6,
     400
]
// console.log(Math.max.apply(Math, count));

let ar = [
     [
          1,
          1,
          1,
          0,
          0,
          0
     ],
     [
          0,
          1,
          0,
          0,
          0,
          0
     ],
     [
          1,
          1,
          1,
          0,
          0,
          0
     ],
     [
          0,
          0,
          2,
          4,
          4,
          0
     ],
     [
          0,
          0,
          0,
          2,
          0,
          0
     ],
     [
          0,
          0,
          1,
          2,
          4,
          0
     ]
]

function hourglassSum(arr) {
     let max = -63
     for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
               let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
               let middle = arr[i + 1][j + 1]
               let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
               let currentSum = top + middle + bottom
               max = Math.max(max, currentSum)
          }
     }
     return max
}

// console.log(hourglassSum(ar));
var isValid = function (s) {
     let originalStringToArray = Array.from(s).reverse();
     let flippedS = originalStringToArray.reverse();
     if (s.length < 2)
          return false;



     if (s.length === 2) {
          // console.log(s.length)
          // console.log(originalStringToArray);
          // console.log(flippedS.reverse());
          if (((s.charAt(0) === flippedS[0]) && (s.charAt(1) === flippedS[1])) && originalStringToArray === flippedS.reverse()) {
               return true;
          } else {
               return false;
          }
     }
     let arr = [];
     if (s.length > 2) {
          for (let i = 0; i < originalStringToArray.length - 1; i++) {
               let counter = 0;
               if (originalStringToArray[i] === flippedS[i]) {
                    counter = 1;
                    arr.push(counter);
               } else {
                    counter = 0;
                    arr.push(counter);
               }
          }
          // console.log(arr)
          // console.log(originalStringToArray);
          // console.log(flippedS);
          return arr.includes(1);
     }
};

let s = "(]"
     // console.log(isValid(s));

     // Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

     // Be sure to return the indices, not the elements themselves.

     // There is guaranteed to be one such pair that sums to the target.

     // 1. Ask clarifying questions
     // 2. Give an example
     // 3. Communicate your approach
     // 4. Start coding


     // pairSum([1,2,10,6,5], 7) => [1,4]
     // pariSum([11,2,5,4,9], 10)

     function pairSum(array, target) {
          for (let i = 0; i < array.length; i++) {
               for (let j = 1; j < array.length; j++) {
                    if (((array[i] + array[j]) === target) && (i !== j)) {
                         return [i, j]
                    }
               }
          }
     }

     // pairSum([3, 2, 5, 4, 1], 8);
     // hash={0:5, 1:6,  }
     [0, 2]
     //

     // let arr = [11,6,2,5,4,1,9];
     // let targ = 10;

     // console.log(pairSum(arr, targ))

     // solution
     // const pairSum = (numbers, targetSum) => {
     // //O(n) time | O(n) space
     // const hash = {};
     // for (let i = 0; i < numbers.length; i++){
     //     const potentialNum = targetSum - numbers[i];
     //     if (numbers[i] in hash) return [i, hash[numbers[i]]]
     //     else hash[potentialNum] = i
     // }
     // };

     // Complete the 'plusMinus' function below.
     function plusMinus(arr) { // Write your code here
          let countPos = 0;
          let countZero = 0;
          let countNeg = 0;
          let sum = arr.length;

          if (sum >= 10000) {
               return null
          }

          for (const num of arr) {
               if (num < 0) {
                    countNeg += 1;
               }
               if (num === 0) {
                    countZero += 1;
               }
               if (num > 0) {
                    countPos += 1;
               }
          }
          // console.log((countPos / sum).toFixed(6))
          // console.log((countNeg / sum).toFixed(6))

          // console.log((countZero / sum).toFixed(6))
     }

     // Complete the 'miniMaxSum' function below.
     function miniMaxSum(arr) { // Write your code here
          if (arr.length > 1000000000) {
               return null;
          }

          let max = Math.max(... arr);
          let min = Math.min(... arr);

          const newArr = arr.filter(num => num<max)
    const sumMin = newArr.reduce((a, b) => a + b, 0)

          const newArrMax = arr.filter(number => number > min)
          const sumMax = newArrMax.reduce((c, d) => c + d, 0)

          // console.log(sumMin + " " + sumMax)

     }

     // TwoNumber Sum
     function twoNumberSum(array, targetSum) {
          let hashSet = new Set();
          for (let num of array) {
               let difference = targetSum - num;
               if (hashSet.has(difference)) {
                    console.log(hashSet)
                    return [num, difference];
               }
               hashSet.add(num)
          }

          return []
     }

     array = [
          -7,
          -5,
          -3,
          -1,
          0,
          1,
          3,
          5,
          7
     ],
     targetSum = -5

     // console.log(twoNumberSum(array, targetSum))

     // Sorted Squared Array
     // Write your code here.
     // let arrayS = array.sort().map(value => {
     //     return value *= value
     // })
     // arrayS.sort(function(a,b){
     //     return a - b
     // })
     // return arrayS


     function miniMaxSum(arr) { // Write your code here


          if (arr.length > 1000000000 || arr.length < 1) {
               return null;
          } else {
               let min = 0
               let max = 0
               let sortedArr = arr.sort(function (a, b) {
                    return a - b
               })

               for (let i = 0; i < sortedArr.pop().length; i++) {
                    min += sortedArr.pop()[i]
               }

               for (let i = 0; i < sortedArr.shift().length; i++) {
                    max += sortedArr.shift()[i]
               }

               //     max = sortedArr.reduce((acc, curr)=>{
               //         acc + curr
               //     }, 0)

          }
     }

     let a = [
          1,
          2,
          3,
          4,
          5
     ]
// console.log(miniMaxSum(a))

// Subsequence
function isValidSubsequence(array, sequence) {
     let index = 0
     for (let i = 0; i < array.length; i++) {
          if (index === sequence.length) {
               break;
          }
          if (array[i] === sequence[index] && index < sequence.length) {
               index++;
          }
     }
     return index === sequence.length;
}

array = [
     5,
     1,
     22,
     25,
     6,
     -1,
     8,
     10
]
sequence = [
     5,
     1,
     22,
     25,
     6,
     -1,
     8,
     10
]

// console.log(isValidSubsequence(array, sequence))


var rob = function (nums) {
     let sum = 0

     if ((nums.length > 100) || (nums.length < 1)) {
          return null;
     } else if (nums.length === 2) {
          return Math.max(nums[0], nums[1])
     } else if (nums.length === 3) {
          return Math.max(nums[0], nums[1], nums[2])
     } else if ((nums.length === 3) && ((nums[0] === nums[1]) && (nums[0] === nums[2]))) {
          let sum = 0
          sum = nums[0] + nums[1]
          return sum
     } else {
          for (let i = 0; i < nums.length; i++) {
               if (i % 2 === 0) {
                    sum += nums[i]
               } else {
                    sum += 0
               }
          }
          return sum
     }
};
// console.log(rob([1, 5, 2, 4]))

// First non-repeating character
function firstNonRepeatingCharacter(string) {
     const hash = {};

     for (const char of string){
     if(!(char in hash))
       hash[char] = 0;

         hash[char]++

     }
     for (const char of string){
       if(hash[char] === 1){
         return string.indexOf(char)
       }
     }
     return -1
   }

   // Minimum coin solution
   function nonConstructibleChange(coins) {
     if(!coins.length) return 1
       coins.sort((a,b) => a-b)
       let minChange = 0;
       for (let i = 0; i < coins.length; i++) {
         if(coins[i] > minChange + 1) break
         minChange += coins[i]
       }
       return minChange +1;
     }

     function classPhotos(redShirtHeights, blueShirtHeights) {
          // Write your code here.
          redShirtHeights.sort((a,b) => a - b);
          blueShirtHeights.sort((a,b) => a - b);

          let blueBack = true;
          let redBack = true;

          for (let i = 0; redShirtHeights.length; i++) {
            if(!redShirtHeights && !blueShirtHeights) break;

            if(redShirtHeights[i] <= blueShirtHeights[i]){
              redBack= false
            }
             if(blueShirtHeights[i] <= redShirtHeights[i]){
              blueBack = false
            }
          }
          return blueBack || redBack;
        }

        // Do not edit the line below.
        exports.classPhotos = classPhotos;