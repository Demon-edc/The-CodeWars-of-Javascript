// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine" 
//  "Politician"	"Your tax dollars" 
//  "Rapper"	"Cristal" 
//  *anything else*	"Beer" 
/**example */
// Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
//题目描述：输入一个名字输出对应的字符串 但是输入的名字大小写不分 
//思路就是转成小写 然后将对应情况输出
function getDrinkByProfession(param) {
    //这里是没必要遍历转成小写的  因为字符串可以直接转成小写字符串
    let match = ''
    let arr = (param.split('').map(ele=>ele.toLowerCase())).join('');
    switch (arr) {
        case 'jabroni':
            match = "Patron Tequila";
            break;
        case 'school counselor':
            match = "Anything with Alcohol";
            break;
        case 'programmer':
            match = "Hipster Craft Beer";
            break;
        case 'bike gang member':
            match = "Moonshine";
            break;
        case 'politician':
            match = "Your tax dollars";
            break;
        case 'rapper':
            match = "Cristal";
            break;
        default:
            match = "Beer";
    }
    return match;
}
console.log(this.getDrinkByProfession('jabrOni'))
// console.log(this.getDrinkByProfession('School Counselor'))
// console.log(this.getDrinkByProfession('Programmer'))
// console.log(this.getDrinkByProfession('Bike Gang Member'))
// console.log(this.getDrinkByProfession('Politician'))
// console.log(this.getDrinkByProfession('Rapper'))
// console.log(this.getDrinkByProfession('checong'))
