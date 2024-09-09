function solution(array, commands) {
    const answer = [];

    commands.forEach(([i, j, k]) => {
        const sliceArray = array.slice(i-1, j).sort((a, b) => a - b);
        const pointer = sliceArray[k-1];
        answer.push(pointer);
    })
    return answer;
}