function solution(i, j, k) {
    let resultCnt = 0;
    
    for (let n = i; n <= j; n++) {
        resultCnt += String(n)
            .split('')
            .filter(char => char === String(k))
            .length;
    }
    
    return resultCnt;
}
