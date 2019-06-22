// Map array
let testArray = [1, 20, 'Test', true];
testArray[6] = 18;

let d = testArray.map(function(x){
  return x*5;
})

console.log(d);

let tempArray = [];
let c = '';

for (let i = 10; i >= 0; i--) {
  if (i % 2 !== 0) continue;
  tempArray.push(i);
}

console.log(tempArray);