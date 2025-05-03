function solution(numbers, direction) {
    if(direction === "right") {
        const lastNum = numbers.pop();
        numbers.unshift(lastNum);
    } else {
        const firstNum = numbers.shift();
        numbers.push(firstNum);
    }
    
    return numbers;
}