function solution(x) {
    let sum = 0;
    const digits = x.toString().split('');
    digits.forEach((digit) => {
        sum += Number(digit);
    })
    return x % sum === 0 ? true : false;
}