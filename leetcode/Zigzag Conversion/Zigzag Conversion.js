var convert = function(s, numRows) {
    const n = s.length, r = numRows;
    if (r == 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const arr = [];
    for (let i = 0; i < r; i++) {
        for (let p = 0; p < n; p += t) {
            arr.push(s[p + i]);
            if (0 < i && i < r - 1 && p + t - i < n) {
                arr.push(s[p + t - i]);
            }
        }
    }
    return arr.join('');
};
convert("ABCDEFGHIJKLMNO", 4);

// var convert = function(s, numRows) {

// };

//比如要求的是分为4行.那么每一行除了第一列对于每一位字符所排列的位置对应字符串的位置的关系是.2n-2, n=numRows
/* 
    *比如s.length = 15; numRows = 4;
    *s[i] 0 <= i >= s.length
    0     6      12   i % (2 * n - 2) = 0   6 % (2 * 1 - 2) = 6,  12 % (2 * 1 - 2) = 12
    1   5 7   11 13   i % (2 * n - 2) = 1   5 % (2 * 2 - 2) = 1,  7 % (2 * 2 - 2) = 1
    2 4   8 10   14   i % (2 * n - 2) = 2   4 % (2 * 3 - 2) = 0,  8 % (2 * 3 - 2) = 0, 10 % (2 * 3 - 2) = 2, 14 % (2 * 4 - 2) = 2
    3     9      15   i % (2 * n - 2) = 3   9 % (2 * 4 - 2) = 3,  15 % (2 * 6 - 2) = 3
*/

/* 
    * 假设numRows=4时
    * 第一行为 0   6   12  每一个间隔始终为6
    * 第三行为 1   5   7   每一个间隔在4和2之间变换
    * 第三行为 2   4   8   每一个间隔在2和4之间变换
    * 第四行为 3   9   15  每一个间隔始终为6
    * 设size=2*numRows-2
    * 第0行等于size
    * 第1行等于size-2或者size-4
    * 第2行等于size-4或者size-2
    * 第3行等于size
    * 则第0行和numRows-1行始终为size
    * 中间行为size-2或者size-4
    * 
    * 假设numRows=5时
    * 0       8         16
    * 1     7 9      15 17
    * 2   6   10   14   18
    * 3 5     11 13     19
    * 4       12        20
    * 则size=2*numRows-2=8
    * 第0行等于size
    * 第1行等于size-6或者size-2
    * 第2行等于size-4
    * 第3行等于size-2或者size-6
    * 第4行等于size 
*/

// var convert = function(s, numRows) {
//     // 定义变量
//     const n = s.length, r = numRows;
//     // 判断边界以外直接返回
//     if (r === 1 || r >= n) {
//         return s;
//     }
//     // 定义每一组有多少个字符
//     const t = r * 2 - 2;
//     // 定义保存字符的数组
//     const ans = [];
//     // 遍历循环,以每列长度为准
//     for (let i = 0; i < r; i++) { // 枚举矩阵的行
//         for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
//             ans.push(s[j + i]); // 当前周期的第一个字符
//             // 第一行和最后一行没有斜边的字符,且第j+每一组的长度-i不应超过字符串总长度
//             if (0 < i && i < r - 1 && j + t - i < n) {
//                 ans.push(s[j + t - i]); // 当前周期的第二个字符
//             }
//         }
//     }
//     return ans.join('');
// };
// console.log(convert("ABCDEjshdajkghvjkdsahgFGH", 4));

