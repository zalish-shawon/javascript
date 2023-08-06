function minNumber(num) {
  let minNum = num[0];
  for(let i = 0; i < num.length; i++) {
    if(num[i] < minNum) {
        minNum = num[i];
    }
  }
  return minNum;
}

const number = [12,58,69,78,3,33,1,45,10,113,996,785,1000,1250,2023,0, -56565];
console.log(minNumber(number));