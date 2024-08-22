function longestConsecutive(nums) {
    const set = new Set(nums);
    const result = []
    set.forEach((number: number)=>{
        let sequence = []
        if(!(set.has(number-1))){
            while (set.has(number)) {
                console.log(number)
                sequence.push(number);
                number++;
            }
            if(sequence.length > result.length){
                result = sequence;
            }
        }
    })
    return result;
}


let nums = [2,20,4,10,3,4,5]


console.log(longestConsecutive(nums));