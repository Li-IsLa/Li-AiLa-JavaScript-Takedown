## leetcode Question 7
### Reverse Integer
> 所有内容只针对本题解题所需

相关代码[Code](./Reverse%20Integer.js "leetcode Question 7")

### 方法
- `Array.from(String(x), (num) => Number(num))`或者`Array.from(String(x), Number);`
> `Array.from(x, () => Number())`第二个参数可以使用一个映射函数也可以使用一个`Number`.都可以将一个数字拆分为数组.(由于本题`x`为`Number`类型所有使用`String()`转换成该方法所需的`String`类型)
- Array.reverse()
> 将数组反转`[1,2,3]`反转为`[3,2,1]`
- Array.shift()
> 删除数组第一个元素,并返回该元素.
- Array.unshift(index)
> 向数组头部添加一个元素

### 思想
由于这题不允许保存64位整数.所以我们比较前`9`位的值是否超过边界(32位有符号整数不包括符号数字部分有10位).若大于则返回0,若等于则单独比较第十位.
> 注意处理好符号和边界即可