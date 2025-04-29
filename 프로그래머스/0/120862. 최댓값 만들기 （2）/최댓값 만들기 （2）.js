function solution(numbers) {
    const numbersLength = numbers.length;
    
    numbers.sort((a, b) => b - a);
    
    const largestPair = numbers[0] * numbers[1];
    const smallestPair = numbers[numbersLength-1] * numbers[numbersLength-2];
    
    return Math.max(largestPair, smallestPair);
}