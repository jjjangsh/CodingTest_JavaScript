function solution(my_string) {
    let sum = 0;
    
    const numArr = my_string.match(/\d+/g);
        
    if(numArr === null) return 0;
       
    numArr.map((item) => {
    sum += Number(item);
    });
    
    return sum;
}