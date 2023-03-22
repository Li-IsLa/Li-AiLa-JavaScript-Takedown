var longestPalindrome = function(s) {
    let origin = 0;
    let maxLength = 1;
    if (s.length < 2) {
        return s;
    }
    function expandAroundCenter(left, rigth) {
        while (left >= 0 && rigth < s.length && s[left] == s[rigth]) {
            if (rigth - left + 1 > maxLength) {
                maxLength = Math.max(maxLength, rigth - left + 1);
                origin = left;
            }
            left--;
            rigth++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);
        expandAroundCenter(i, i + 1);
    }
    return s.substring(origin, maxLength + origin);
    //个人告诫,一味的借鉴别人的代码缺少个人思考以至于把+写成-都找了15分钟.
};

console.log(longestPalindrome("abacccc"));