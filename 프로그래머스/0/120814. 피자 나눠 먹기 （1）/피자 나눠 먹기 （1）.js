function solution(n) {
    let pizza = 1;
    
   for(let i = 1; i <= 100; i++) {
       if(i * 7 / n >= 1) {
        pizza = i;
           break;
       }
   }
    return pizza;
}