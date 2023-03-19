## 字符串修改函数
### 代码:
``` javascript
function StringRevise(s, n, n1, target) {
    let Str = '';
    //这个if判断作用于检查数据是否合法,可以删除
    if (!(target.length <= n + n1 - 1 && target.length <= n1 + 1) || !(n + n1 - 1 <= s.length && n1 + 1 <= s.length)) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (i >= n && i <= n1) {
            Str += target[i - n];
        } else {
            Str += s[i];
        }
    }
    return Str;
}
StringRevise("Li-AiLa", 1, 4, [111,222,333,'aaa']);
//console.log => L111222333aaaLa
```
### 函数形参类型
1. **s** typeof: **String**
2. **n/n1** typeof: **Number**
3. **target** typeof: **String/Array**
---
### n/n1形参说明
(**一个不恰当的描述**)n和n1分别是两个指针.n指向开头,n1指向末端.若只修改一位时,只需让两个指针指向同一个字符
1. 修改一位时,如
``` JavaScript
StringRevise("Li-AiLa", 1, 1, [111]);
//console.log => L111-AiLa
```
2. 修改多位时,如
``` JavaScript
StringRevise("Li-AiLa", 1, 3, [1,2,3]);
//console.log => L123iLa
```
> 注意当进行多位修改时**target**.length必须等于或大于修改位数否则会出现**undefined**,如
``` JavaScript
StringRevise("Li-AiLa", 1, 3, [1,2]);
//console.log => L12undefinediLa
```
---
### target形参说明
1. **target** typeof: **String**
>当target传入的类型是字符串时,如 
``` JavaScript
StringRevise("Li-AiLa", 1, 4, "1234");
//console.log => L1234La
```
2. **target** typeof: Array
>当target传入的类型是数组时,如
``` JavaScript
StringRevise("Li-AiLa", 1, 4, [111,222,333,'aaa']);
//console.log => L111222333aaaLa
```
