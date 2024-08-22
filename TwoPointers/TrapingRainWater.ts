function trap(height:number[]):number {
    let L:number = 0;
    let R:number = height.length-1;
    let result = 0;
    let  maxHeightL = height[L]
    let maxHeightR = height[R]

    let i = 0;

    while (L <= R) {
        let sum;
        if(maxHeightL > maxHeightR){

            console.log("maxR:"+maxHeightR+" maxL"+maxHeightL+" i"+heights[i]);
            sum = maxHeightR-height[R]


        }else{

            console.log("maxR:"+maxHeightR+" maxL"+maxHeightL+" i"+heights[i]);
            sum = maxHeightL-height[L]
        }
        if(sum>0)
        {
            result +=sum;
        }
        console.log(sum)

        if(maxHeightL>maxHeightR){
            if(maxHeightR<height[R]){
                maxHeightR = height[R];
            }
            R--;

        }else
        {
            if(maxHeightL<height[L]){
                maxHeightL = height[L];
            }
            L++;

        }
        i++
    }

    return result
}

let heights = [5,4,1,2]

console.log(trap(heights));
console.log("Output");