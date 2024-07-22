function solution(array) {
  let arr = [];
  let max = 1;
  let index = 0;
  
  for(let i = 0; i < array.length; i++) {
      if(array[i] > max) {
          max = array[i];
      }
  }
  index = array.indexOf(max);
  arr.push(max, index);
  return arr;
}