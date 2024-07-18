function solution(price) {
    if(price >= 100000 && price < 300000) {
        price -= price * 0.05;
    }
    if(price >= 300000 && price < 500000) {
        price -= price * 0.1;
    }
    if(price >= 500000) {
        price -= price * 0.2;
    }
    
    return Math.floor(price);
}