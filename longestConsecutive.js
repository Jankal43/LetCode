function longestConsecutive(nums) {
    var set = new Set(nums);
    var result = 0;
    set.forEach(function (number) {
        var streak = 0;
        if (!(set.has(number - 1))) {
            while (set.has(number)) {
                streak++;
                number++;
            }
            if (streak > result) {
                result = streak;
            }
        }
    });
    return result;
}
var nums = [2, 20, 4, 10, 3, 4, 5];
console.log(longestConsecutive(nums));
