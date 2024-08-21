function trap(height:number[]):number {
    let L:number = 0;
    let R:number = height.length-1;
    let result = 0;
    let maxHeightL = height[L]
    let maxHeightR = height[R]

    while (L <= R) {
        let sum;
        if(maxHeightL > maxHeightR){
            console.log("maxR:"+maxHeightR+" maxL:"+maxHeightL+" height[R]:"+height[R]);
            sum = maxHeightR - height[R];
            if(sum > 0) {
                result += sum;
            }
            if(maxHeightR < height[R]){
                maxHeightR = height[R];
            }
            R--;
        } else {
            console.log("maxR:"+maxHeightR+" maxL:"+maxHeightL+" height[L]:"+height[L]);
            sum = maxHeightL - height[L];
            if(sum > 0) {
                result += sum;
            }
            if(maxHeightL < height[L]){
                maxHeightL = height[L];
            }
            L++;
        }
    }

    return result;
}

let heights = [5,4,1,2]

console.log(trap(heights));
console.log("Output");
