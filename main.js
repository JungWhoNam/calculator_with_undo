// https://www.youtube.com/watch?v=GQzfF5EMD7o


class Calculator {
    constructor(value = 0) {
        this.value = value;
        this.history = [];
    }

    execute(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            this.value = command.undo(this.value);
        }
    }
}

class AddCommand {
    constructor(valueToOperate) {
        this.valueToOperate = valueToOperate;
    }

    execute(currVal) {
        return currVal + this.valueToOperate;
    }

    undo(currVal) {
        return currVal - this.valueToOperate;
    }
}

class SubstractCommand {
    constructor(valueToOperate) {
        this.valueToOperate = valueToOperate;
    }

    execute(currVal) {
        return currVal - this.valueToOperate;
    }

    undo(currVal) {
        return currVal + this.valueToOperate;
    }
}

class MultiplyCommand {
    constructor(valueToOperate) {
        this.valueToOperate = valueToOperate;
    }

    execute(currVal) {
        return currVal * this.valueToOperate;
    }

    undo(currVal) {
        return currVal / this.valueToOperate;
    }
}

class DivideCommand {
    constructor(valueToOperate) {
        this.valueToOperate = valueToOperate;
    }

    execute(currVal) {
        return currVal / this.valueToOperate;
    }

    undo(currVal) {
        return currVal * this.valueToOperate;
    }
}

const calculator = new Calculator();
console.log(calculator.value);


calculator.execute(new AddCommand(3));
console.log(calculator.value);

calculator.execute(new MultiplyCommand(0));
console.log(calculator.value);

// calculator.execute(new DivideCommand(0));
// console.log(calculator.value);

calculator.undo();
console.log(calculator.value);

calculator.undo();
console.log(calculator.value);

calculator.undo();
console.log(calculator.value);

// current value
// reset button, dropdown (add, sub, mul, div), value text, submit button