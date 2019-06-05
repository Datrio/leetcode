/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let count = nums.length;
    let potentialCount = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (!isNaN(nums[i+1]) && nums[i] === nums[i+1]) {
            potentialCount++;
        } else if (!isNaN(nums[i+1]) && nums[i] < nums[i+1]) {
            if (potentialCount > 0) {
                count += potentialCount;
                potentialCount = 0;
            }
            
            count--;
        } else if (!isNaN(nums[i+1])) {
            if (potentialCount > 0) {
                count += potentialCount - 1;
                count--;
                potentialCount = 0;
            }

            for (let j = nums.length - 1; j >= 0 ; j--) {
                if (!isNaN(nums[j-1]) && nums[j] === nums[j-1]) {
                    potentialCount++;
                } else if (!isNaN(nums[j-1]) && nums[j] > nums[j-1]) {
                    if (potentialCount > 0) {
                        count += potentialCount;
                        potentialCount = 0;
                    }

                    count--;
                } else {
                    if (potentialCount > 0) {
                        count += potentialCount - 1;
                        count--;
                        potentialCount = 0;
                    }

                    return count;
                }
            }
        }
    }
    
    return 0;
};
