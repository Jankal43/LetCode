function  twoSum(numbers: number[], target: number): number[] {
    let sum;
    let i =0;
    let j = numbers.length - 1;
    while (true) {
        if((numbers[i]+numbers[j])===target){
            return [i+1,j+1];
        }

        if((numbers[i]+numbers[j])>target){
            j--;
        }
        else {
            i++;
        }
    }
}
let numbers = [1,2,3,4], target = 3

console.log(twoSum(numbers,target))


