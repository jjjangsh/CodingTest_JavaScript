function solution(food) {
    let result = '';
    
    for(let i = 1; i < food.length; i++) {
         result += String(i).repeat(Math.trunc(food[i] / 2));
    }
    
    const reversedResult = result.split('').reverse().join('');
    result = result + "0";
    
    return result + reversedResult;
}
