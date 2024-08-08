function solution(n) {
    const sqrtOfN = Math.sqrt(n);
    
    if(sqrtOfN % 1 !== 0) {
        return -1;
    } else {
        return (sqrtOfN + 1)**2;
    }
}