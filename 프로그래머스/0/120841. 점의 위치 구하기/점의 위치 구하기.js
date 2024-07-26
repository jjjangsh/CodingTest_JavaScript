function solution(dot) {
    let answer = 0;

        let x = dot[0] > 0 ? 1 : 0;
        let y = dot[1] > 0 ? 1 : 0;


        if ( x === 1 && y === 1) {
            answer = 1;
        }
        else if ( x === 0 && y === 1) {
            answer = 2;
        }
        else if ( x === 0 && y === 0) {
            answer = 3;
        }
        else if ( x === 1 && y === 0) {
            answer = 4;
        }

        return answer;
    }