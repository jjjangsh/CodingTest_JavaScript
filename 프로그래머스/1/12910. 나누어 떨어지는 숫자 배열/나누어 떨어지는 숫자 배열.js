function solution(arr, divisor) {
    const resultArr = [-1];
    const filterdArr = arr.sort((a, b) => a - b).filter((n) => n % divisor === 0);
    
    return filterdArr.length ? filterdArr : resultArr;
}