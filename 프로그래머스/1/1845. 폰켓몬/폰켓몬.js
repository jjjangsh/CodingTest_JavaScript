function solution(nums) {
    const set = new Set(nums);
    
    if(set.size <= nums.length / 2) {
        return set.size;
    } else {
        return nums.length /2;
    }
}