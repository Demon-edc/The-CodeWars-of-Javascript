function capitalizeWord(word) {
    let arr = word.split("");
    arr.splice(1, 0, word[0].toUpperCase())
    arr.splice(0, 1);
    return arr.join('');
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}