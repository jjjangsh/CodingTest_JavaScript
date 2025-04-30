function solution(arr) {
  let result = [];

  for (let num of arr) {
    for (let i = 0; i < num; i++) {
      result.push(num);
    }
  }

  return result;
}
