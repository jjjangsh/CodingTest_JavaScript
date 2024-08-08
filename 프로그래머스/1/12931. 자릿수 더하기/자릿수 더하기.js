function solution(n) {
    let sum = 0;
    n.toString().split('').forEach((num) => {
        sum += Number(num);
    })
    return sum;
}