function encode(str) {
    var result = "";
    str.forEach(function (word) {
        result += word.length;
        result += "#";
        result += word;
    });
    console.log(result);
    return result;
}
function decode(str) {
    var result = [];
    var i = 0;
    while (str[i]) {
        var word = "";
        var numberString = "";
        while (str[i] != "#") {
            numberString += str[i];
            i++;
        }
        var k = parseInt(numberString);
        for (var j = 0; j < k; j++) {
            word += str[i + 1];
            i++;
        }
        result.push(word);
        i++;
    }
    return result;
}
var str = ["we", "say", ":", "yes", "!@#$%^&*()"];
console.log("length ", str[4].length);
console.log(decode(encode(str)));
