function threeSum(nums:number[]):number[][] {
    let result: number[][] = [];
    nums = nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let s = i + 1;
        let e = nums.length - 1;
        let target = -nums[i];

        while (s < e) {
            let current = nums[s] + nums[e];

            if (current === target) {
                result.push([nums[i], nums[s], nums[e]]);

                while (s < e && nums[s] === nums[s + 1]) s++;
                while (s < e && nums[e] === nums[e - 1]) e--;

                s++;
                e--;
            } else if (current < target) {
                s++;
            } else {
                e--;
            }
        }
    }

    return result;
}

let numb: number[] = [0,0,0,0];
console.log(threeSum(numb));
