function solution(a, b) {
    let sum = 0;
    let last = 0;
    
    for(let i = 0; i < a.length-1; i++) {
        sum += a[i] * b[i];
    }
    
    last = a[a.length -1] * b[a.length -1];
    
    return sum + last;
}