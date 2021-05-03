+// https://www.youtube.com/watch?v=GQzfF5EMD7o\

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



// current value
// reset button, dropdown (add, sub, mul, div), value text, submit button
const result = document.querySelector(".results")
const form = document.querySelector("#calc-form");
const resetBtn = document.querySelector("#reset-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let calc = new Calculator(0);

    const formData = new FormData(e.target);
   // calculator.execute(new AddCommand(10));

    console.log(formData.get("valueToOperate"));
    console.log(formData.get("operations"));
    console.log(result.textContent);
    result.innerText = formData.get("valueToOperate");
});

resetBtn.addEventListener("click", (e) => {
    result.innerText = "0";
});