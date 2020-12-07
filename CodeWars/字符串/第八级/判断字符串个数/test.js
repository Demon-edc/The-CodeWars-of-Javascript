/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
 If there are no good ideas, as is often the case, return 'Fail!'.
*/
// function well(x) {
//     let goodNum = 0;
//     x.forEach(element => {
//         if (element === "good") goodNum++;
//     });
//     return goodNum === 0 ? 'Fail' : (goodNum > 2 ? 'I smell a series!' : 'Publish!')
// }


//过滤数组
function well(x) {
    const num = x.filter(x => x === 'good').length;
    return num < 1 ? 'Fail!' :
    num < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(well(['good', 'good', 'good', 'bad']))
