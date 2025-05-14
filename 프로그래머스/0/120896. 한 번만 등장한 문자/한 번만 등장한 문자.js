function solution(s) {
    const arr = [...s];
    return arr.filter(a => arr.indexOf(a) == arr.lastIndexOf(a))
              .sort()
              .join('');
}