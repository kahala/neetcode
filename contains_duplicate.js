// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Link: https://neetcode.io/problems/duplicate-integer


console.log("hello")    

function contains_duplicate(nums){
console.log(nums);
}

nums = [1,2,3,3]
contains_duplicate(nums)
// Input: nums = [1, 2, 3, 3]
// Output: true

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}