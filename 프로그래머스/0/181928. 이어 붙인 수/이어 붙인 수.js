function solution(num_list) {
    return Number(num_list.filter((num) => num % 2 === 0).join('')) + Number(num_list.filter((num) => num % 2 === 1).join(''));
}