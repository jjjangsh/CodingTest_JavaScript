function solution(a, b) {
    let gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let gcdValue = gcd(a, b); // 최대공약수
    let lcmValue = (a * b) / gcdValue; // 최소공배수

    return [gcdValue, lcmValue];
}