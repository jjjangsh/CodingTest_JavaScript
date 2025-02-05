function solution(n) {
    for(let i = 2; i < n; i++){
        if(i * i === n) 
            return 1;
    }
    return 2;
}