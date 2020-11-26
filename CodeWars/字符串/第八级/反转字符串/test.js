/**
 * 题目描述：Complete the solution so that it reverses all of the words within the string passed in.
 * 输入一个字符串 反转字符串 
 * 答：第一想法是可以遍历字符串遇见空格就停止截取 然后将截取的字符串存储到数组里 然后将字符串拼接
 * 优化：可以用split(' ')方法将 字符串去除空格的部分存储在数组里 然后将数组反转 然后再加入空格
 * 
 * 
 */
function reverseWords(str) {

    let newStr = '';
    let strPos = str.length;
    for (let i = str.length; i >= 0; i--) {
        if (str[i] === ' ') {
            newStr += str.substring(i + 1, strPos);
            newStr += ' ';
            strPos = i;
        } else if (i === 0) {
            newStr += (str.substring(i, strPos))
        }
    }
    return newStr;
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}