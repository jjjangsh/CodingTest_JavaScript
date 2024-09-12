function solution(s) {
    const lastIndex = {};
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        if (lastIndex[s[i]] !== undefined) {
            answer.push(i - lastIndex[s[i]]);
        } else {
            answer.push(-1);
        }
        lastIndex[s[i]] = i;
    }

    return answer;
}