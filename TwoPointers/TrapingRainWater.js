function trap(height) {
    var L = 0;
    var R = height.length - 1;
    var result = 0;
    var maxHeightL = height[L];
    var maxHeightR = height[R];
    while (L <= R) {
        var sum = void 0;
        if (maxHeightL > maxHeightR) {
            console.log("maxR:" + maxHeightR + " maxL:" + maxHeightL + " height[R]:" + height[R]);
            sum = maxHeightR - height[R];
            if (sum > 0) {
                result += sum;
            }
            if (maxHeightR < height[R]) {
                maxHeightR = height[R];
            }
            R--;
        }
        else {
            console.log("maxR:" + maxHeightR + " maxL:" + maxHeightL + " height[L]:" + height[L]);
            sum = maxHeightL - height[L];
            if (sum > 0) {
                result += sum;
            }
            if (maxHeightL < height[L]) {
                maxHeightL = height[L];
            }
            L++;
        }
    }
    return result;
}
var heights = [5, 4, 1, 2];
console.log(trap(heights));
console.log("Output");
