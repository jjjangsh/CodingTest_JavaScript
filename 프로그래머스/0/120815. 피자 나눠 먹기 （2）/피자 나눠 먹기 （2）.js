function solution(n) {
    result = 1;
    
    while(true) {
        if(result * 6 % n == 0) {
            break;
        } else {
            result++;
        }
    }
    return result;
}