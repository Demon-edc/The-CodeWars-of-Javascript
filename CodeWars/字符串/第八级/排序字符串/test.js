/**
 * 题目描述：
 * Write a function that rearranges an integer into its largest possible value.
 *
排序对应字符串
superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
 */
function superSize(num) {
    return +num.toString().split('').sort((a, b) => b - a).join('');
}
console.log(superSize(123456789))

