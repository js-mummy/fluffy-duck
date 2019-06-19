function isEven(data) {
  function nMinusDva(schet) {
    if ((Math.abs(data) - schet) == 0) return true;
    else if ((Math.abs(data) - schet) == 1) return false;
    else
        console.log(schet);
        return nMinusDva(schet+2);
  }
  return nMinusDva(0);
}
console.log(isEven(10));