function solution(s) {
    let result = [];
    
    const splitS = s.split(" ")
    
    for ( let i = 0; i < splitS.length; i++) {
        let alternateUpperCase = '';
    
        for(let j = 0; j < splitS[i].length; j++) {
            if (j % 2 === 0) {
                alternateUpperCase += splitS[i][j].toUpperCase()
            } else {
                alternateUpperCase += splitS[i][j].toLowerCase()
            }
        }
        result.push(alternateUpperCase)
    }
    return result.join(' ')
}
