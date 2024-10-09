function dailyTemperatures(temperatures) {
    var stack = [];
    var result = [];
    for (var i = 0; i < temperatures.length; i++) {
        var t = temperatures[i];
        while (stack.length > 0 && stack[stack.length - 1][0] < t) {
            var index = stack[stack.length - 1][1];
            result[index] = i - index;
            stack.pop();
        }
        stack.push([t, i]);
    }
    while (stack.length > 0) {
        var index = stack[stack.length - 1][1];
        result[index] = 0;
        stack.pop();
    }
    return result;
}
var temperatures = [30, 38, 30, 36, 35, 40, 28];
console.log(dailyTemperatures(temperatures));
