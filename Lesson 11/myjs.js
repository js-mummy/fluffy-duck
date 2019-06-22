let testArray = [1, 20, 'Test', true];
let out = document.getElementById('out');
let str = '';

for (let i = 0; i < testArray.length; i++) {
  if(i !== undefined) {
    str += testArray[i] + '</br>';
  }
}

out.innerHTML = str;