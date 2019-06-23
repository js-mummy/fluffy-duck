// Map array
/*let testArray = [1, 20, 'Test', true];
testArray[6] = 18;

let d = testArray.map(function(x){
  return x*5;
});

console.log(d);*/
/*

// Push and Shift for arrays
let tempArray = [];

for (let i = 10; i >= 0; i--) {
  if (i % 2 == 0) { continue; }
  tempArray.push(i);
}

console.log(tempArray);


var fruits = []; // создать массив

fruits.age = 25; // свойство со строковым именем
fruits[99999] = 5; // присвоить свойство с любым номером
console.log(fruits);
fruits.length = 0; // Очищаем массив
console.log(fruits);

let arr = [9999,3,{face:'beauty'}];

arr.push("My");
console.log(arr.length);
console.log(arr);
console.log(typeof(arr[4]));*/





var matrix = [
   [1, 2, 3, 0, 0],
   [4, 5, 6, 0, 0],
   [7, 8, 9, 0, 0],
   [10, 11, 12, 0, 0]
 ];
 console.log(matrix[0].length);
 console.log(matrix[0].length);

 let s = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      s += matrix[i][k];
    }
    //console.log(s);
}

console.log(s);