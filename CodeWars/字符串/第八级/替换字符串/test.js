/**
 * 题目描述：
 Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
 */

function fakeBin(x) {
    return ((x.split('')).map(element => element < 5 ? element = 0 : element = 1)).join('')
}
console.log(this.fakeBin('55555'))