function solution(numbers) {
    let max = Math.max(...numbers);
    
    let index = numbers.indexOf(max);
    
    numbers.splice(index, 1);
    
    return max * Math.max(...numbers);
}