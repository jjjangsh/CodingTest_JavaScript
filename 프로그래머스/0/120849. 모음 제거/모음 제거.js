function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    
    vowel.forEach(vowel => {my_string = my_string.replaceAll(vowel, '')});
    return my_string;
}