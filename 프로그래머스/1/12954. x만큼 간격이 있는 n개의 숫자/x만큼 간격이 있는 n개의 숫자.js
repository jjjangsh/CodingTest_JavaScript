function solution(x, n) {
    let sum = 0;
    let sumArr = [];
    for(let i = 0; i < n; i++) {
        sum += x;
        sumArr.push(sum);
    }
    return sumArr;
}