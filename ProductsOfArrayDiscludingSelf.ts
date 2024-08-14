function productExceptSelf(nums: number[]): number[] {

    let result: number[] = [];
    let postfix = 1
    let prefix = 1

    for (let i = 0; i < nums.length; i++) {
        result.push(prefix)
        prefix = nums[i]*prefix
    }
    console.log(result);
    for(let i = result.length-1; i >= 0; i--){
        result[i] = result[i]*postfix
        postfix = postfix * nums[i]
    }



    return result;
}

let nums: number[] = [-1,0,1,2,3]

console.log(productExceptSelf(nums));

