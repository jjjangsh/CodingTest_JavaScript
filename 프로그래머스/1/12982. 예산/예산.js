function solution(d, budget) {
    var answer = 0;
    var total = 0;

    d.sort((a, b) => a - b).forEach(price => {
        if(total + price <= budget) {
            total += price; 
            answer++;
        }
    });

    return answer;
}