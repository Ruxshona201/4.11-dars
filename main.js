// "use strict";

// // execution - har bitta kodni ishga tushirish, context -o'rganib chiqish;
// // 1.
// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 27,
//     getFullName: function () {
//         return user.firstName + " " + user.lastName;
//     },
// };

// const full = user.getFullName();
// console.log(full);

// // this - ota object ni qaytarib beradi.

// // hoisting


// let a = 5.434;

// console.log(a._proto_);


// uyga vazifa 
// 1.
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

// 2.
let sum = 0;

for(let i = 1; i <= 10; i++)
{
    sum += i;
}

console.log(sum);

// 3.
function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("hello world"));

// 4.
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("my name is ruxshona"));

// 5.
function getAllWords(str) {

    var array = [];
     for (var i = 0; i < str.length; i++) {
        array.push(str[i]);
      }
      return array;
      }
   
      console.log(getAllWords('mening ismim Ruxshona'));

//   6.
function getCharCodes(s){
    let charCodeArr = [];

    for(let i = 0; i < s.length; i++){
     let code = s.charCodeAt(i);
     charCodeArr.push(code);
  }

  return charCodeArr;
}

console.log(getCharCodes("Hello world"));

// 7.
function bubbleSort(arr, n)
{
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}
 
// Function to print an array 
function printArray(arr, size)
{
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}
 
// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);