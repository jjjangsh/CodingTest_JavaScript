function solution(my_string, n) {
    let arr = [];
    let temp = 0;
   my_string.split('').map((str) => {
       temp = n;
       while(true) {
           arr.push(str);
           temp--;
           if(temp <= 0) {
               break;
           }
       }
   })
    return arr.join('');
}