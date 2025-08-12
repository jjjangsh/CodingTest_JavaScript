function solution(food) {
    let result = '';
    
    for(let i = 1; i < food.length; i++) {
        result += i.toString().repeat(parseInt(food[i] / 2));
    }
    
    const reverseResult = result.split('').reverse().join('');
    
    return `${result}0${reverseResult}`;   
}