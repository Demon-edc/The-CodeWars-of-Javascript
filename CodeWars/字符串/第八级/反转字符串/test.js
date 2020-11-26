/**
 * 题目描述：
 Complete the solution so that it reverses all of the words within the string passed in.
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