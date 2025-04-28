function solution(my_string) {
    let sum = 0;
    
    return my_string
    .split("")
    .filter((str) => !isNaN(str))
    .map((str) => sum += Number(str))
    .pop()
}