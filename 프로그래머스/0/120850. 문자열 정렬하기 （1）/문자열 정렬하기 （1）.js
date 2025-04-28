function solution(str) {
    let strArr = [...str];
    
    return strArr.filter((word) => !isNaN(word)).map((word) => +word).sort((a, b) => a - b);
}
