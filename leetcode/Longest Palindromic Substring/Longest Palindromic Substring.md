## leetcode Question 5
### Longest Palindromic Substring
> 所有内容只针对本题解题所需

相关代码[Code](Longest%20Palindromic%20Substring.js "LeekCode Question  5")

对于这题使用一个`expandAroundCenter`算法思想.相关算法[expandAroundCenter](https://cn.bing.com/search?q=expandAroundCenter&form=CHRDEF&sp=-1&lq=0&pq=expandaroundcenter&sc=2-18&qs=n&sk=&cvid=B20901E8185D49FDB0C36AA5D219597D&ghsh=0&ghacc=0&ghpl=)

### 描述

- 若是`aba`类型,遍历字符串的每一位,设这一位为`s[i]`.判断`s[i-1]`是否等于`s[i+1]`.若等于则可以确定这一个字符串是一个回文字符串.若不等于则可以确定这一个字符串不是一个回文字符串.
- 若是`bb`类型,遍历字符串每一位,设这一位为`s[i]`.判断`s[i]`是否等于`s[i+1]`.若等于可以确定这一个字符串是一个回文字符串.

> 判断一个字符串是否为回文字符串必须满足以下两点.
1. `s[i-1]`和`s[i+1]`不能越界及不能超过字符串的长度
   - `s[i-1]>=s.length`
   - `s[i+1]<s.length`
2. `s[i-1]==s[i+1]`或`s[i]==s[i+1]`

Code
``` javascript
    function expandAroundCenter(left, rigth) {
        // 判断是否满足以上两点
        while (left >= 0 && rigth < s.length && s[left] == s[rigth]) {
            // 判断现在所找到的回文字符串的长度是否大于现有的长度
            if (rigth - left + 1 > maxLength) {
                maxLength = rigth - left + 1;
                origin = left;
            }
            left--;
            rigth++;
        }
    }
```
---
## 函数
- Function: `String.substring(Number1, Number2)`
> 对字符串进行切片

### 个人告诫
- 不要一味的借鉴别人的代码和算法缺少个人思考.在不是很理解别人的代码的时候很容易出现一些很低级的错误.例如
> `return s.substring(origin, maxLength + origin);`
- 这里的一个+写错成一个-号这样的低级错误都找了将近15分钟.