function solution(array) {
    let cnt = 0;
    
    array.forEach((item) => {
        let arrayItem = String(item).split('');
        
        arrayItem.forEach((item) => {
            if(+item === 7) cnt++;
        })
    });
    
    return cnt;
}