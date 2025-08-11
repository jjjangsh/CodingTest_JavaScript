function solution(my_string, index_list) {
    resultStr = '';
    
    index_list.forEach((index) => resultStr += my_string[index]);
    return resultStr;
}