function solution(arr) {
    if(arr.length <= 1) {
        return [-1];
    } else {
        return arr.filter((num) => {
           return num !== Math.min(...arr);
        });
    }
}