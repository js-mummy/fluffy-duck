let easyNumArr = [];
let maxNumForArray;

function makeAnArray(maxNumForArray) {

  for(let l = 2; l < maxNumForArray; l++) {
    if(l % 2 === 1) {
    easyNumArr.push(l);
    }
  }
  easyNumArr.unshift(2);

  for (let j = maxNumForArray; j >= 0; j--) {
        for (let k = maxNumForArray; k >= 0; k--) {
         if (easyNumArr[j] % easyNumArr[k] == 0 && easyNumArr[j] != easyNumArr[k]) {
          easyNumArr.splice(j, 1);
        }
      }
    }
    let sum = 0;
    for(let m = 0; m < easyNumArr.length; m++) {
      sum +=easyNumArr[m]; 
    }
    console.log(sum);
  return easyNumArr;
}

let d1 = makeAnArray(100);
console.log(d1);
/*
// шаг 1
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true;
}

// шаг 2
var p = 2;

do {
  // шаг 3
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  // шаг 4
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) {break;}
  }

  p = i;
} while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert( sum );*/
/*'use strict';

function getSumOfNumbers(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i])) result += arr[i];
  }
  return result;
}

function getPrimeNumbersBeforeN(n) {
  var p = 2;
  var arr = [];
  for (var i = p; i < n; i++) {
    arr.push(i);
  }
  while (p * p < n) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != p && arr[i] % p == 0) {
        delete arr[i];
      }
    }
    for (i = arr.indexOf(p); i < arr.length; i++) {
      if (arr[i + 1]) {
        p = arr[i + 1];
        break;
      }
    }
  }
  console.log(arr);
  return arr;
}

t = getPrimeNumbersBeforeN(100);
getSumOfNumbers(t);*/