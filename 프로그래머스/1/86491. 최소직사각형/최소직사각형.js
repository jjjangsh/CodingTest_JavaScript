function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach((size) => {
        const [w, h] = size[0] > size[1] ? [size[0],size[1]] : [size[1],size[0]];
        maxW = maxW < w ? w : maxW;
        maxH = maxH < h ? h : maxH;
    })
    return maxW * maxH;
}
// if(sizes[i][0] > sizes[i][1]) {
//     if(maxW < sizes[i][0]) {
//         maxW = sizes[i][0]
//     }
//     if(maxH < sizes[i][1]) {
//         maxH = sizes[i][1]
//     }
// } else {
//     if(maxW < sizes[i][1]) {
//         maxW = sizes[i][1]
//     }
//     if(maxH < sizes[i][0]) {
//         maxH = sizes[i][0]
//     }
// }