## leetcode Question 6
### Zigzag Conversion
> 所有内容只针对本题解题所需

相关代码[Code](./Zigzag%20Conversion.js)

### 算法及基本思想
代码中两个循环.外层用于遍历行,内层遍历列.以`2*(numRows-1)`为一组.及内层循环会添加两个值(详细见Code第26行至31行图(一次遍历添加0-5所有字符)).
- 详细解释(new bing)
- ![详细解释](./Zigzag%20Conversion.png)

相关函数方法
- `arr.push()`向数组末端添加一个元素.
- `arr.join('')`将数组转换为字符串.