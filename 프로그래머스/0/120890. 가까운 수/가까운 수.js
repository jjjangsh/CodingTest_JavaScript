function solution(array, n) {
    let result = 0;
    let min = Infinity;

    for(let i = 0; i < array.length; i++) {
        const diff = Math.abs(n - array[i]);
        if (diff < min || (diff === min && array[i] < result)) {
            min = diff;
            result = array[i];
        }
    }

    return result;
}
