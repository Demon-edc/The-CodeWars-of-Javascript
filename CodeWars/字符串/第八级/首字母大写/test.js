// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//一开始的想法是插入一个第一个字符串的大写形式 然后删除第一个字符串
//实际上可以采用字符串拼接的形式 只取第一个大写字母然后拼接之后的字符串
function capitalizeWord(word) {
    let arr = word.split("");
    arr.splice(1, 0, word[0].toUpperCase())
    arr.splice(0, 1);
    return arr.join('');
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}