function solution(slice, n) {
    result = 1;
    
    while(true) {
        if(slice * result >= n) {
            break;
        } else {
            result++;
        }
    }
    return result;
}