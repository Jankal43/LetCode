function threeSum(nums) {
    var result = [];
    nums = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        var s = i + 1;
        var e = nums.length - 1;
        var target = -nums[i];
        while (s < e) {
            var current = nums[s] + nums[e];
            if (current === target) {
                result.push([nums[i], nums[s], nums[e]]);
                while (s < e && nums[s] === nums[s + 1])
                    s++;
                while (s < e && nums[e] === nums[e - 1])
                    e--;
                s++;
                e--;
            }
            else if (current < target) {
                s++;
            }
            else {
                e--;
            }
        }
    }
    return result;
}
var numb = [0, 0, 0, 0];
console.log(threeSum(numb));
