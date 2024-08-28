function search(nums, target) {
    var i = 0;
    var j = nums.length - 1;

    while (i <= j) {
        var m = i + Math.floor((j-i) / 2);
        if (nums[m] > target) {
            j = m;
        }
        else if (nums[m] < target) {
            i = m
        }
        else {
            return m
        }
    }
   return -1
}
var nums = [-1, 0, 2, 4, 6, 8], target = 6;
console.log(search(nums, target));
