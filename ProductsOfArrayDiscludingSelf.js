function productExceptSelf(nums) {
    var result = [];
    var postfix = 1;
    var prefix = 1;
    for (var i = 0; i < nums.length; i++) {
        result.push(prefix);
        prefix = nums[i] * prefix;
    }
    console.log(result);
    for (var i = result.length - 1; i >= 0; i--) {
        result[i] = result[i] * postfix;
        postfix = postfix * nums[i];
    }
    return result;
}
var nums = [-1, 0, 1, 2, 3];
console.log(productExceptSelf(nums));
