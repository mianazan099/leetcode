/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numMap.has(diff)) return [numMap.get(diff), i]; else numMap.set(nums[i], i);
    }

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j <= nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }
};