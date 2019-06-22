function first(x, z) {
  
  console.log((x*100)/200*30+20-70+35);

    z();
}

function second(a,b) {
  console.log(a*b);
}



first(1000, function(){
  second(5,6)});