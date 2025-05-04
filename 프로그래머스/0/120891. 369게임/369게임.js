function solution(order) {
    const clapNums = [3, 6, 9];
    
    return order
        .toString()
        .split('')
        .filter((num) => clapNums.includes(Number(num)))
        .length;
}