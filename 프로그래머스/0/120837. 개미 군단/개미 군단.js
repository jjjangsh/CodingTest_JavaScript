function solution(hp) {
    let a = parseInt(hp / 5);
    let b = parseInt((hp % 5) / 3);
    let c = (hp % 5) % 3;
    
    return a + b + c;
    
}