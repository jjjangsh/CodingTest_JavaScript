function solution(s) {
    const minAndMax = s.split(' ');
    
    const min = Math.min(...minAndMax);
    const max = Math.max(...minAndMax);
    
    return `${min} ${max}`;
}