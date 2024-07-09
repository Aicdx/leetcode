/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0,ten =0,twenty = 0;
    for(let i =0;i<bills.length;i++){
        if(bills[i] === 5){
            five++
            continue;
        }
        if(bills[i]===10){
            if(!five) return false;
            ten++
            five--
            continue;
        }
        if(bills[i]===20){
            //先找10，再找5
            if(five && ten){
                ten--
                five--
                continue;
            }
            if(five >=3){
                five -= 3
                twenty++
                continue;
            }
            return false
        }
    }
    return true
};
// @lc code=end

