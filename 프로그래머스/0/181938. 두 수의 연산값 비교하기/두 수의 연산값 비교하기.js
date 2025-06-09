function solution(a, b) {
    const ab = Number(String(a) + String(b));
    const twoAB = 2 * a * b;
    
    return ab >= twoAB ? ab : twoAB;
}
