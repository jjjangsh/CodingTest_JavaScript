function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
    if(maxW < sizes[i][0]) {
        maxW = sizes[i][0]
    }
    if(maxH < sizes[i][1]) {
        maxH = sizes[i][1]
    }
} else {
    if(maxW < sizes[i][1]) {
        maxW = sizes[i][1]
    }
    if(maxH < sizes[i][0]) {
        maxH = sizes[i][0]
    }
}
    }
    return maxW * maxH;
}
