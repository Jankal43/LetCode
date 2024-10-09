function dailyTemperatures(temperatures) {
    let stack = [];
    let result:number[] = [];
    for(let i=0; i<temperatures.length; i++){
        let t =temperatures[i];
        while (stack.length > 0 && stack[stack.length-1][0] < t){
            let index = stack[stack.length-1][1];
            result[index] = i - index;
            stack.pop();
        }

        stack.push([t,i]);

    }
    while(stack.length > 0){
        let index = stack[stack.length-1][1]
        result[index] = 0;
        stack.pop();
    }
    return result;
}

let temperatures = [30,38,30,36,35,40,28]
console.log(dailyTemperatures(temperatures))
