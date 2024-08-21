function maxArea(heights:number[]):number {
    let MaxArea:number = 0;
    let i=0
    let j = heights.length-1

    while (i < j) {
        let height;
        if(heights[i]>heights[j]){
            height = heights[j]
        }
        else {
            height = heights[i]
        }
        let width = j-i;
        let currentArea = height*width
        if(currentArea > MaxArea){
            MaxArea = currentArea
        }
        if(heights[i]>heights[j]){
            j--;
        }
        else {
            i++;
        }
    }

    return MaxArea
}

let height = [2,2,2]
console.log(maxArea(height));