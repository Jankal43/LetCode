function isValid(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        }
        else {
            if (s[i] === ")" && stack[stack.length - 1] != "(") {
                return false;
            }
            else if (s[i] === "}" && stack[stack.length - 1] != "{") {
                return false;
            }
            else if (s[i] === "]" && stack[stack.length - 1] != "[") {
                return false;
            }
            else {
                stack.pop();
            }
        }
    }
    console.log(stack.length);
    if (stack.length != 0) {
        return false;
    }
    else {
        return true;
    }
}
var s = "[]";
console.log(isValid(s));
