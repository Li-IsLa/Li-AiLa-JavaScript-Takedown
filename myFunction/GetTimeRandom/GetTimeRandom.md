### 基于时间戳的随机数生成
> 根据时间固定生成10位数.**没啥大用**

### 相关代码[Code](./GetTimeRandom.js)
``` JavaScript
function getTimeRandom() {
    let date = new Date();
    date = date.getTime(date.getMinutes(date.getMinutes() + date.getTimezoneOffset()));
    let random= Math.floor((99 - 11 + 1) * Math.random()) + 11;
    return parseInt(random * (date / 1000) * 0.23 / 4);
}
```
---
#### 描述
- 时间
- `Date()`获取当前时间.
- `Date.getMinutes()`获取当前时间的**分钟**.
- `Date.getTimezoneOffset()`获取当前时区与**世界时**的差距(**分钟**).
- `Date.getTime()`将时间转化为**秒**.
- 随机数
- `Math.random()`随机生成`0-1`的数字.有小概率为`0`但绝不会为`1`.
- 一个随意的算法
- `random * (date / 1000) * 0.23 / 4`

### 扩展函数
- 返回时间戳
``` JavaScript
function getTimeStamp() {
    let date = new Date();
    return date.getTime();
}
```
- 返回随机数
```JavaScript
function getRandom(max, min) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}
```
- `Math.floor()`向下取整