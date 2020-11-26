/**
 * Your goal is to return multiplication table for number that is always an integer from 1 to 10.
 * For example, a multiplication table (string) for number == 5 looks like below:
 */
/**
 * 1 * 5 = 5
 * 2 * 5 = 10
 * 3 * 5 = 15
 * 4 * 5 = 20
 * 5 * 5 = 25
 * 6 * 5 = 30
 * 7 * 5 = 35
 * 8 * 5 = 40
 * 9 * 5 = 45
 * 10 * 5 = 50
 */
/**
 * 题目要求：输入一个数字要求返回如example所示的乘法表
 * 答：此题要求并不难 通过字符串拼接和模板字符串`${}`来解决此问题 还有一个隐藏的点就是乘法表最后一行并没有换行符 所以要删除最后一个字符
 */

//my solutions
function multiTable(number) {
    let str = '';
    let result = ''
    for (let i = 1; i <= 10; i++) {
        result = `${i} * ${number} = ${i * number}\n`;
        if (i === 10) {
            result = `${i} * ${number} = ${i * number}`
        }
        str += result
    }
    return str
}

// other solutions
function multiTable(n) {
    return [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${n * i + n}`).join('\n');

}

//other solutions
const multiTable = (number) => {
    let table = '';

    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }

    return table;
}
//other solutions
function multiTable(number) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}\n`
    }
    return table.slice(0, -1)//截取从第0个（包含）到倒数第一个元素（不包含）
}