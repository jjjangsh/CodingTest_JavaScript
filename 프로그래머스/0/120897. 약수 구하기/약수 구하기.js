function solution(n) {
    let resultArr = [];
    
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) resultArr.push(i);
    }
    
    return resultArr;
}