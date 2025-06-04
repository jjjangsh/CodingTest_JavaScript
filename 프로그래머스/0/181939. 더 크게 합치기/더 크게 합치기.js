function solution(a, b) {
    const abSum = Number(a.toString() + b.toString());
    const baSum = Number(b.toString() + a.toString());
    
    return abSum > baSum ? abSum : baSum;
}