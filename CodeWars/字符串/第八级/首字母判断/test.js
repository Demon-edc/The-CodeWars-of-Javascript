/**
 * 题目描述：
 Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
 * 传入一个字符串 判断首字母是否是R或r 根据对应的条件输出对应的情况
 *初始想法就是判断是否是R或者是r然后根据三目运算法输出
 *优化就是截取字符串的首字母 然后可以转变大写或者小写去判断是否是R 然后三目运算符输出
 */

function areYouPlayingBanjo(name) {
    return (name[0] === 'R' || name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

//other solutions
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}