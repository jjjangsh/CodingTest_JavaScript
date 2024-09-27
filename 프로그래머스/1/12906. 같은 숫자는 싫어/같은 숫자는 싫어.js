function solution(arr){
    var stackArr = [];
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
           stackArr.push(arr[i]);
        }        
    }
    return stackArr;
}