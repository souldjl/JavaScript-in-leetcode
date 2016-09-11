###  Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### 思路

仔细想想，这题其实就是一个斐波拉契数列。 若想到达第n层楼梯，反向来思考，当你到达第n-1层时，只有一种走法，那就是走一步。
在第n-2层，也只有一种走法，那就是走两步,因此 若想到达第n层，实际上就是第n-1层的走法加上第n-2层的走法。