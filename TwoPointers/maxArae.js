function maxArea(heights) {
    var MaxArea = 0;
    var i = 0;
    var j = heights.length - 1;
    while (i < j) {
        var height_1 = void 0;
        if (heights[i] > heights[j]) {
            height_1 = heights[j];
        }
        else {
            height_1 = heights[i];
        }
        var width = j - i;
        var currentArea = height_1 * width;
        if (currentArea > MaxArea) {
            MaxArea = currentArea;
        }
        if (heights[i] > heights[j]) {
            j--;
        }
        else {
            i++;
        }
    }
    return MaxArea;
}
var height = [2, 2, 2];
console.log(maxArea(height));
