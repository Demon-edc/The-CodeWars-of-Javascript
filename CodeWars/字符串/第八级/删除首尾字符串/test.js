/**
 * It's pretty straightforward. 
 * Your goal is to create a function that removes the first and last characters of a string. 
 * You're given one parameter, the original string.
 *  You don't have to worry with strings with less than two characters. 
 */
//删除首尾字符串
function removeChar(str) {
    let strArr = str.split('');
    strArr.splice(0, 1);
    strArr.splice(strArr.length - 1, 1);
    return strArr.join('')
};
//
function removeChar(str) {
    return str.slice(1, -1);
};
console.log(this.removeChar('woshinidie'));

