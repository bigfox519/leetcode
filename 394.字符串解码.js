/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // let str = "";
    // const stack = [];
    // let num = 0;
    
    // const isNumberLike = (value) => typeof value === "number" || !Number.isNaN(Number(value));

    // // 遍历字符串
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     if (isNumberLike(char)) {
    //         num = num * 10 + Number(char);
    //     } else if (char === '[') {
    //         // num入栈
    //         stack.push(num);
    //         num = 0;
    //     } else if (char === ']') {
    //         // 出栈，直到数字出栈
    //         let c = stack.pop(),
    //             part = "";
    //         while (!isNumberLike(c)) {
    //             part = `${c}${part}`;
    //             c = stack.pop();
    //         }
    //         part = part.repeat(c);
    //         stack.push(part);
    //     } else {
    //         stack.push(char);
    //     }
    // }

    // while(stack.length > 0) {
    //     const char = stack.pop();
    //     if (isNumberLike(char)) {
    //         str = str.repeat(char);
    //     } else {
    //         str = `${char}${str}`;
    //     }
    // }

    // return str;

    const regex = /(\d+)\[([a-zA-Z]*)\]/g
    while (s.includes('[')) {
        s = s.replace(regex, (match, p1, p2) => p2.repeat(p1));
    }
    return s;
};
// @lc code=end


// decodeString("3[a2[c]]");
