/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // let prefix = "";

    // const getCommonPrefix = (left, right) => {
    //     const len = left.length <= right.length ? left.length : right.length;
    //     let prefix = "";
    //     for (let i = 0; i < len; i++) {
    //         if (left[i] !== right[i]) break;
    //         prefix += left[i];
    //     }
    //     return prefix;
    // }

    // for (let i = 0; i < strs.length; i++) {
    //     const str = strs[i];
    //     if (i === 0) {
    //         prefix = str;
    //     } else {
    //         prefix = getCommonPrefix(prefix, str);
    //     }
    // }

    // return prefix;
    
    // 找到str中最小长度
    const n = strs.map(str => str.length).sort()[0];
    let prefix = "";
    for (let i = 0; i < n; i++) {
        prefix += strs[0][i];
        // 判断是否都是以prefix开头
        if (strs.some(str => !str.startsWith(prefix))) {
            return strs[0].slice(0, i);
        }
    }
    return prefix;
};
// @lc code=end

