// 异或方法
var singleNumber = function(nums) {
    let a = 0;
    for (let i of nums) {
        a ^= i;
    }
    return a;
};
singleNumber([1,2,3,2,1,4,5,5,4]);

// 使用indexOf方法
var singleNumber = function(nums) {
    let s = '';
    for (let i = 0; i < nums.length; i++) {
        s = nums[i];
        nums[i] = '';
        if (nums.indexOf(s) == -1) {
            return s;
        } else {
            nums[i] = s;
        }
    }
};
console.log(singleNumber([1,2,3,2,1,4,5,5,4,3,5,5,6]));