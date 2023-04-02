var reverse = function (x) {
    let arrNum = Array.from(String(x), Number);
    let Character = '';
    if (isNaN(arrNum[0])) {
        arrNum.shift();
        Character = '-';
    }
    arrNum.reverse();
    if (arrNum.length < 10) {
        return montage(arrNum, Character);
    } else if (arrNum.length > 10) {
        return 0;
    } else {
        if (contrast(arrNum, Character)) {
            return montage(arrNum, Character);
        } else {
            return 0;
        }
    }
    function montage(s, c) {
        if (c == '-') {
            s.unshift('-');
        }
        return s.join('');
    }
    function contrast(s, c) {
        let maxMinNumber = 214748364;
        let arrCompare = new Array();
        for (let i = 0; i < s.length - 1; i++) {
            arrCompare.push(s[i]);
        }
        arrCompare = arrCompare.join('');
        if (arrCompare == maxMinNumber) {
            if (c == '-') {
                if (s[s.length - 1] > 8) {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (s[s.length - 1] > 7) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (arrCompare < maxMinNumber) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(reverse(-2147483412))// -2143847214
// var reverse = function(x) {
//     const arr = Array.from(String(x), Number);
//     let Character = '';
//     let num = [];
//     let Int32 = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0 && arr[0] == NaN) {
//             console.log(arr[0])
//             Character = '-';
//             continue;
//         }
//         num.push(arr[arr.length - i-1]);
//     }
//     console.log(num)
//     if (num.length < Int32.length) {
//         if (Character == '-') {
//             num.unshift(Character);
//         }
//     } else if (num.length > Int32.length) {
//         return 0;
//     } else {
//         for (let i = 0; i < num.length; i++) {
//             if (num[i] > Int32[i]) {
//                 return 0;
//             }
//         }
//         if (Character == '-') {
//             num.unshift(Character);
//         }
//     }
//     return num;
// };
// console.log(reverse(8463847412))

// var reverse = function(x) {
//     let arrNum = Array.from(String(x), Number);
//     let Character = '';
//     if (isNaN(arrNum[0])) {
//         arrNum.shift();
//         Character = '-';
//     }
//     arrNum.reverse();
//     if (arrNum.length > 10) {
//         return 0;
//     } else if (arrNum.length == 10) {
//         if (contrast(arrNum, Character)) {
//             return montage(arrNum, Character);
//         } else {
//             return 0;
//         }
//     } else {
//         return montage(arrNum, Character);
//     }
//     function montage(s, c) {
//         if (c == '-') {
//             s.unshift('-');
//             return s.join('');
//         } else {
//             return s.join('');
//         }
//     }
//     function contrast(s, c) {
//         let minInt32 = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
//         let maxInt32 = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
//         if (c == '-') {
//             for (let i = 0; i < s.length; i++) {
//                 if (s[i] > minInt32[i]) {
//                     return false;
//                 }
//             }
//         } else {
//             for (let i = 0; i < s.length; i++) {
//                 if (s[i] > maxInt32[i]) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
// }
// console.log(reverse(-2147483412));

