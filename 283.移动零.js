/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // for (let i = 0, j = 0; i < nums.length; i++) {
    //     if (nums[j] === 0) {
    //         nums.splice(j, 1);
    //         nums.push(0);
    //     } else {
    //         j++;
    //     }
    // }
    if (nums.length <= 1) return;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // j向后寻找非零
            let j = i;
            while (j < nums.length) {
                if (nums[j] !== 0) {
                    break;
                }
                j++;
            }
            // 交换位置
            if (j < nums.length) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                break;
            }
        }
    }
};
// @lc code=end

// const arr = [0, 1, 0, 3, 12];
// moveZeroes(arr);
// console.log(arr);
