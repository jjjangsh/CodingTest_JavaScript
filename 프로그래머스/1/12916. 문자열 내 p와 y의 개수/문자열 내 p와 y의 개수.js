function solution(str){
    let pCnt = 0;
    let yCnt = 0;
    
   const lowercaseStr = str.toLowerCase();
    lowercaseStr.split('').forEach((lowercaseChar) => {
        if(lowercaseChar === 'p')
            pCnt++;
        if(lowercaseChar === 'y')
            yCnt++;
    })
    return pCnt === yCnt ? true : false;
}