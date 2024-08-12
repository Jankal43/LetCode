function encode(str: string[]): string{
    let result: string = "";
    str.forEach((word)=>{
        result += word.length;
        result += "#";
        result += word;
    })
    return result;
}

function decode(str: string){
    let result:string [] = [];
    let i: number=0;

    while (str[i]){
        let word = "";
        let numberString: string = "";
        while(str[i] != "#"){
            numberString+=str[i];
            i++;
        }
        let k:number = parseInt(numberString);
        for(let j:number=0; j<k; j++){
            word+=str[i+1]
            i++;
        }
        result.push(word);
        i++;
    }
    return result;
}



let str: string[] = ["we","say",":","yes","!@#$%^&*()"];

console.log("length ", str[4].length);

console.log(decode(encode(str)));