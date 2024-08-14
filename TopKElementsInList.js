function topKFrequent(nums, k) {
    let dict = {};
    let result = [];
    let array = [[]];

    for(let i = 0;i<nums.length;i++){
        array.push([])
        if(dict[nums[i]]){
            dict[nums[i]] = dict[nums[i]] +1
        }
        else{
            dict[nums[i]] = 1
        }
    }
    for(let key in dict){
        array[dict[key]].push(key)
    }



    for(let i = array.length - 1; i >= 0 && result.length < k; i--) {
        if (array[i].length > 0) {
            for(let j=0; j<array[i].length; j++) {
                result.push(array[i][j])
                if(result.length == k){
                    break
                }
            }
        }
    }
    return result

}



let nums = [7,7], k = 1
let nums2 = [1,3,3,3,4,7,7];

console.log(topKFrequent(nums, k));

console.log(topKFrequent(nums2, 2));
