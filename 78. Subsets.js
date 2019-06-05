/**
 * https://leetcode.com/problems/subsets/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    for(let i = 0; i < Math.pow(2, nums.length); i++) {
        let flags = i.toString(2).padStart(nums.length, '0');
        let retArr = [];

        for (let i = 0; i < flags.length; i++) {
            if (flags[i] === '1') {
                retArr.push(nums[i]);
            }
        }

        res.push(retArr);
    }

    return res;
};
