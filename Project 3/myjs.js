function first(x, callback) {
  
  console.log((x*100)/200*30+20-70+35);

    callback();
}

function second(a,b) {
  console.log(a*b);
}

first(1000, function(){
  second(5,6);
});