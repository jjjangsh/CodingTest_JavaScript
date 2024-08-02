function solution(s) {
    const centerIndex = Math.floor(s.length / 2);
    
    if(s.length % 2 === 1) {
        return s[centerIndex];
    } else {
        return s[centerIndex - 1] + s[centerIndex];;
    }
}