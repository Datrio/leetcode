/**
 * https://leetcode.com/problems/4sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(n, target) {
  const nums = n.sort((a, b) => a - b);

  const answers = [];
  const answersHash = {};

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        for (var l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            const potentialAnswerHash = `${nums[i]}${nums[j]}${nums[k]}${nums[l]}`;

            if (!answersHash[potentialAnswerHash]) {
              answersHash[potentialAnswerHash] = true;
              answers.push([nums[i], nums[j], nums[k], nums[l]]);
            }
          }
        }
      }
    }
  }

  return answers;
}
