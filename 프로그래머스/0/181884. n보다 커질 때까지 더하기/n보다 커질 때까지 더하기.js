function solution(numbers, n) {
    let sum = 0;
    
    for(let num of numbers) {
        sum += num;
        if(sum > n) return sum;
    }
    return sum;
}