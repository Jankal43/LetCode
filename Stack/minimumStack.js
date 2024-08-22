var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stack = [];
    }
    MinStack.prototype.push = function (val) {
        this.stack.push(val);
    };
    MinStack.prototype.pop = function () {
        this.stack.pop();
    };
    MinStack.prototype.top = function () {
        return this.stack[this.stack.length - 1];
    };
    MinStack.prototype.getMin = function () {
        var min = this.stack[0];
        for (var i = 0; i <= this.stack.length - 1; i++) {
            if (min > this.stack[i]) {
                min = this.stack[i];
            }
        }
        return min;
    };
    return MinStack;
}());
var minStack = new MinStack();
minStack.push(5);
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top()); // return 2
console.log(minStack.getMin()); // return 1
