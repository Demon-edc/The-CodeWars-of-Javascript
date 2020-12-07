// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
//sort直接根据ascii码排序  原本是想自己写递归的....想多了
function twoSort(s) {
    let arr = [...s].sort();
    return arr[0].split('').join('***');
}
console.log(this.twoSort(['are', 'bcc','abc', 'abd', 'abb']))
