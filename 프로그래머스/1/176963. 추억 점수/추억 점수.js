function solution(name, yearning, photo) {
    const answer = [];
    const hash = new Map();
    
    name.forEach((item, index) => {
        hash.set(item, yearning[index]);
    })
    
    for(let i = 0; i < photo.length; i++) {
        let count = 0;
        for(let j = 0; j < photo[i].length; j++) {
            const score = hash.get(photo[i][j]);
            if(!score) continue;
            count += score;
        }
        answer.push(count);
    }
    
    return answer;
}
