## leetcode Question 2
#### Longest Substring Without Repeating Characters
---
### Ideas for solving problems
> 所有内容只针对本题解题所需

1. `Set`使用

    > 生成一个set `let set = new Set();`
    > 查找set中是否包含指定的值 `set.has(index);`
    > 删除set中指定的值 `set.delete(index);`
    > 向set中添加指定的值 `set.add(index);`
2. Function: `Math.max(Number0, Number1);`

    > 比较两个数,取大.
3. Function: `String.slice(Number0, Number1)`

    > 对字符串进行切片.
4. Function: `String.indexOf(index)`

    > 查找字符串中是否包含指定的字符,若有则返回字符**位置**,若没有返回 **-1**.
5. Function: `String.charAt(Number)`

    > 返回指定位置的字符.

[Code](Longest%20Substring%20Without%20Repeating%20Characters.js)
