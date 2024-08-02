function solution(sides) {
    let sum = 0;
    const maxNum = Math.max(...sides);
    const maxNumIndex = sides.indexOf(maxNum);
    
    sides.splice(maxNumIndex, 1);
    
    for(let i = 0; i < sides.length; i++) {
        sum += sides[i];
    }
    
    if(sum > maxNum) {
        return 1;
    } else {
        return 2;
    }
}