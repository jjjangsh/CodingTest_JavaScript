function solution(s) {
    const splitString = [...s];
    
    if(splitString.length === 4 || splitString.length === 6) {
        for(let i = 0; i < splitString.length; i++) {
            if(isNaN(s[i])) {
               return false; 
            }
            
        }
        return true;
    } else {
        return false;
    }
    
}