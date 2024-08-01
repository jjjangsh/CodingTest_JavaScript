function solution(n) {
  let sum = 0;
  let str = n.toString().split('');
  for(let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
  }
  return sum;
}