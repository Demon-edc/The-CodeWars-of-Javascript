/**
 * 题目描述：
 Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
 */

//只需要把字符串转换成数组 然后替代数组的元素 然后拼接起来就好了

function fakeBin(x) {
    return ((x.split('')).map(element => element < 5 ? element = 0 : element = 1)).join('')
}