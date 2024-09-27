function solution(arr) {
    var stack = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        }
    }
    
    return stack;
}
