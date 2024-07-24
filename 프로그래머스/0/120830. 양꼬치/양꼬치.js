function solution(n, k) {
    let dish = n * 12000;
    let drink = k * 2000;
    let disCount = parseInt(n / 10) * 2000;
    
    return dish + drink - disCount;
}