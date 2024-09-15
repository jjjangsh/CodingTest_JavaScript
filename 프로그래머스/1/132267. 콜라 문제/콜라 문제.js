function solution(a, b, n) {
    let test = 0;
    
    while(n >= a) {
        test += parseInt(n / a) * b;
        n = (n % a) + (parseInt(n / a) * b);
    }
    
    return test;
}