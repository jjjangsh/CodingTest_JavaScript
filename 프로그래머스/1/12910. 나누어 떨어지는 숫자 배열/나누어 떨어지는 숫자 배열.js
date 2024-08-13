function solution(arr, divisor) {
    const emptyCase = [-1];
    
    const filterdArr = arr.filter((num) => {
       return num % divisor === 0;
    }).sort((a, b) => {return a - b});
    
    return filterdArr.length <= 0 ? emptyCase : filterdArr;
}