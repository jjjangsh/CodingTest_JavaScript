function solution(str1, str2) {
    let indexOfStr2InStr1 = str1.indexOf(str2);
    return indexOfStr2InStr1 >= 0 ? 1 : 2;
}