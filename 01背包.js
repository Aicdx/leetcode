const testWeightBagProblem = (weight, value, size)=>{
    // 定义 dp 数组
    // dp[i][j] 为价值
    // i 为物品个数 j 为重量
    const len = weight.length,
          dp = Array(len).fill().map(() => Array(size + 1).fill(0));
    // 初始化
    for(let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }
    // weight 数组的长度len 就是物品个数
    for(let i = 1; i < len; i++) { // 遍历物品
        for(let j = 0; j <= size; j++) { // 遍历背包容量
            if(j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }
    console.table(dp)

    return dp[len - 1][size];
}
function testWeightBagProblem1(wight, value, size) {
    const weightLen = wight.length
    const dp = new Array(size+1).fill(0)
    // 遍历物品
    for(let i = 0;i<weightLen;i++){
        // 遍历容量，当背包容量大于物品重量时，才进入循环
        for(let j=size;j>=wight[i];j--){
            dp[j] = Math.max(dp[j],dp[j-wight[i]] + value[i])
        }
    }
    return dp[size]
}
function test () {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
    console.log(testWeightBagProblem1([1, 3, 4, 5], [15, 20, 30, 55], 6));

}

test();