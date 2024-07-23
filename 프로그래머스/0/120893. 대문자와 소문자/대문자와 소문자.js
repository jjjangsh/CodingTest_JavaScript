function solution(my_string) {
    let result = '';

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}