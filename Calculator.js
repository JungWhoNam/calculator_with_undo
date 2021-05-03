
export default class Calculator {
    constructor(value = 0) {
        this.initValue = value;
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
        else {
            throw "The history is empty.";
        }
    }

    reset() {
        this.value = this.initValue;
        this.history = [];
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

export function getCommand(type, value) {
    switch (type) {
        case 'add':
            return new AddCommand(value);
        case 'substract':
            return new SubstractCommand(value);
        case 'multiply':
            return new MultiplyCommand(value);
        case 'divide':
            return new DivideCommand(value);
    }
    return null;
}