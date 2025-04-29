function solution(cipher, code) {
    const cipherArr = [...cipher];
    let resultArr = [];
    
    for(let i = 1; i <= cipherArr.length; i++) {
        resultArr.push(cipherArr[code * i - 1]);
    }
    
    return resultArr.join('');
}