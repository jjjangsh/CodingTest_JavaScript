function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let i = 0; i < num.length; i++) {
        s = s.split(num[i]).join(i);
    }
    
    return Number(s);
}