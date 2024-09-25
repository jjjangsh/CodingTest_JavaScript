function solution(k, scores) {
    let answer = [];
    let hallOfFame = [];
    
    for (let i = 0; i < scores.length; i++) {
        hallOfFame.push(scores[i]);
        hallOfFame.sort((a, b) => b - a);
        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }
        answer.push(hallOfFame[hallOfFame.length - 1]);
    }
    
    return answer;
}
