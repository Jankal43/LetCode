class MinStack {
    stack: any;
    constructor() {
        this.stack = []
    }
    push(val:number) {
    this.stack.push(val)
    }
    pop() {
        this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        let min = this.stack[0];
        for(let i=0; i <= this.stack.length-1; i++){
            if(min>this.stack[i]){
                min=this.stack[i]
            }
        }
        return min
    }
}

let minStack = new MinStack()
minStack.push(5);
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())    // return 2
console.log(minStack.getMin()); // return 1