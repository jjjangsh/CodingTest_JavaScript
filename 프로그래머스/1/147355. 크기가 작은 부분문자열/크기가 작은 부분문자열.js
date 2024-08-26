function solution(t, p) {
    let cnt = 0;

    for(let i = 0; i <= t.length - p.length; i++) {
        if(Number(t.slice(i, i + p.length)) <= Number(p)) {
            cnt++;
        }
    }
    return cnt;
}
