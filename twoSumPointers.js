function twoSum(numbers, target) {
    var sum;
    var i = 0;
    var j = numbers.length - 1;
    while (true) {
        if ((numbers[i] + numbers[j]) === target) {
            return [numbers[i], numbers[j]];
        }
        if ((numbers[i] + numbers[j]) > target) {
            j--;
        }
        else {
            i++;
        }
    }
}
var numbers = [1, 2, 3, 4], target = 3;
console.log(twoSum(numbers, target));
