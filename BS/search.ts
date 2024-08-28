function search(nums:number[], target:number) {

    var i = 0;
    var j = nums.length - 1;

    while (i <= j) {
        var m = i+Math.floor((j - i) / 2);
        if (nums[m] > target) {
            j = m - 1;
        }
        else if (nums[m] < target) {
            i = m + 1;
        }
        else {
            return m
        }
    }
    return -1
}
let nums:number[] = [-1,0,2,4,6,8], target:number = 6


console.log(search(nums,target))