/**
 * 题目描述：
 *Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
 */
// const litres = n => Math.floor(n * 0.5);
//会丢弃小数部分 所以和math.floor是一样的效果 同样返回number类型
const litres = n => parseInt(n * 0.5);
console.log(litres(11.8))