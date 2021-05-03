import Calculator, { getCommand } from "./Calculator.js";

const result = document.querySelector(".results")
const form = document.querySelector("#calc-form");
const undoBtn = document.querySelector("#undo-btn");
const resetBtn = document.querySelector("#reset-btn");

const initValue = 0;
const calculator = new Calculator(initValue);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = Number(formData.get("valueToOperate"));
    const oper = formData.get("operations")

    calculator.execute(getCommand(oper, value));

    result.innerText = calculator.value;
});

undoBtn.addEventListener("click", () => {
    try {
        calculator.undo();
    }
    catch (error) {
        alert(error);
    }
    result.innerText = calculator.value;
});

resetBtn.addEventListener("click", () => {
    calculator.reset();
    form.reset();
    result.innerText = initValue;
});