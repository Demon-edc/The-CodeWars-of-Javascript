/**
 * 题目描述：
 * There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
替换对应的字符串
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
 */

function correctPolishLetters(string) {
    //your code
    let PolString = {
        "ą": "a",
        "ć": 'c',
        "ę": 'e',
        "ł": 'l',
        "ń": 'n',
        "ó": "o",
        "ś": 's',
        "ź": 'z',
        "ż": 'z'
    }

    const strKeysArr = Object.keys(PolString);
    const strArr = string.split('');
    for (let i = 0; i < strKeysArr.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[j] === strKeysArr[i]) {
                strArr[j] = PolString[strKeysArr[i]];
            }
        }
    }
    return strArr.join('');
}

console.log(this.correctPolishLetters('Jędrzej Błądziński'));
//大佬解法
function correctPolishLetters(text) {
    return text.split('').map(c => mapping[c] || c).join('');
}