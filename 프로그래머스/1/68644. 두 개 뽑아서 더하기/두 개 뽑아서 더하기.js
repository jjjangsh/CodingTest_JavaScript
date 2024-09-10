function solution(numbers) {
    let resultSet = new Set();
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            resultSet.add(numbers[i] + numbers[j]);
        }
    }
    
    const resultArr = [...resultSet];
    return resultArr.sort((a, b) => a - b )
}