function solution(n, m) {
    let gdc = 1;
    let lcm = 1;
    let gdcAndLcm = [];
    
    for(let i = 2; i <= Math.min(n, m); i++) {
        if(n % i === 0 && m % i === 0) {
            gdc = i;
        }
    }
    
    while(true) {
        if(lcm % n === 0 && lcm % m === 0) {
            break;
        }
        lcm++;
    }
    
    gdcAndLcm.push(gdc, lcm);
    return gdcAndLcm;
}