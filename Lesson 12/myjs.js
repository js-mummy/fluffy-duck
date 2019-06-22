let testArray = [1, 20, 'Test', true];
testArray[6] = 18;

let d = testArray.map(function(x){
  return x*5;
})

console.log(d);