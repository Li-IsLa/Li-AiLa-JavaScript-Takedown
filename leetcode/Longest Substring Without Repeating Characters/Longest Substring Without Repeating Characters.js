// 自己第一种写法, 逻辑没问题但运行超时.
// 使用的是逐个字符遍历
var lengthOfLongestSubstring = function(s) {
    //保存每一个符合条件的字符串
    let Str_obj = [];
    //用于储存每一种字符串中的字符
    let r = '';
    //用于储存最长字串的长度
    let Str_length = 0;
    let c = 0;
    if (s.length == 1) {
        return 1;
    }
    for (let i = 0; i < s.length; i++) {
        for (let p = i; p < s.length; p++) {
            c++;
            if (r.indexOf(s[p]) == -1) {
                r += s[p];
            } else {
                Str_obj.push(r);
                r = '';
            }
        }
        Str_obj.push(r);
        r = '';
    }
    for (let i = 0; i < Str_obj.length; i++) {
        c++;
        if (Str_obj[i].length > Str_length) {
            Str_length = Str_obj[i].length;
        }
    }
    console.log(c);
    return [Str_length, Str_obj];
};


// 自己第二种写法 80ms, 45.8Mb
// 使用set保存当前最长字符串
var lengthOfLongestSubstring = function(s) {
    let j = 0, maxLength = 0;
    let set = new Set();
    if (s.length == 0) {
        return 0;
    } else if (s.length == 1) {
        return 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
        } else {
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
        maxLength = Math.max(maxLength, set.size);
    }
    return [maxLength, set];
}
console.log(lengthOfLongestSubstring("nfpdmpi"));


// LeetCode官方写法
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let max = 0;
    let str = '';
    while (end < s.length) {
        // 第一次start=0.end=0, str=s[0]
        str = s.slice(start,end);
        // 查询str字符串中是否包含s.charAt(end)字符,有返回位置,没有返回-1
        const index = str.indexOf(s.charAt(end));
        // 若有
        if(index> -1) {
            // start自加在str中与目标字符重复的位置
            start += index + 1;
            // 退出这一次循环
            continue;
        }else {
            // 末尾指针自增
            end++;
        }
        // max与end-start比较取大
        max = Math.max(max,end - start);
    }
    return max;
};