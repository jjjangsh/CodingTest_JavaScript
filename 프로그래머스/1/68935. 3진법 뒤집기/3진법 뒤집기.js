function solution(n) {
    const ternaryN = n.toString(3);
    const ternaryNReverse = ternaryN.split('').reverse().join('');
    
    return parseInt(ternaryNReverse, 3);
}