function evalRPN(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (!isNaN(token)) {
            stack.push(parseInt(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            let result;
            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b);
                    break;
                default:
                    throw new Error("Nieznany operator: " + token);
            }


            stack.push(result);
        }
    }
    return stack.pop();
}

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

console.log(evalRPN(tokens));
