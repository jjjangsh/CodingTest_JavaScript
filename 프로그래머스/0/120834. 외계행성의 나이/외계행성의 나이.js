function solution(age) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    const ageIndex = age.toString().split('');
    
    return ageIndex.map((index) => alphabet[index]).join('');
}