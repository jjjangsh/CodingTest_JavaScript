function solution(s) {
    resultArr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s.lastIndexOf(s[i]) === i) {
            resultArr.push(-1);
        } else {
            resultArr.push(s.lastIndexOf(s[i]) - i);
        }
    }
    return resultArr;
}