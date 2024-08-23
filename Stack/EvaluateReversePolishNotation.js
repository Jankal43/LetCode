function evalRPN(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        // Jeśli token jest liczbą, dodaj ją do stosu
        if (!isNaN(token)) {
            stack.push(parseInt(token));
        }
        else {
            // Jeśli token jest operatorem, wyciągnij dwie ostatnie liczby ze stosu
            var b = stack.pop();
            var a = stack.pop();
            var result = void 0;
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
                    result = Math.trunc(a / b); // Truncate the result towards zero
                    break;
                default:
                    throw new Error("Nieznany operator: " + token);
            }
            // Włóż wynik z powrotem na stos
            stack.push(result);
        }
    }
    // Na końcu stos powinien zawierać tylko wynik
    return stack.pop();
}
var tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens)); // Powinno zwrócić 22
