// created a Calculator class with methods for diverse operations with numbers which are bound with the class context
// with validation for the number values
class Calculator {
    constructor(number1, number2) {
        if (typeof number1 === 'number' && typeof number2 === 'number') {
            this.number1 = number1;
            this.number2 = number2;
        } else {
            throw new Error ('Both of the entered values should be numbers!'); 
        }
    }
    
    setX(number1) {
        if (typeof number1 === 'number') {
            this.number1 = number1;
        } else {
            throw new Error('The entered value should be a number!');
        }
    }

    setY(number2) {
        if (typeof number2 === 'number') {
            this.number2 = number2;
        } else {
            throw new Error('The entered value should be a number!');
        }
    }

    logSum = (() => {
        console.log (this.number1 + this.number2);
    }).bind(this);
    
    logMul = (() => {
        console.log (this.number1 * this.number2);
    }).bind(this);
    
    logSub = (() => {
        console.log (this.number1 - this.number2);
    }).bind(this);
    
    logDiv = (() => {
        if (this.number2 === 0) {
            throw new Error ('Dividing by 0 is prohibited!');
        } else {
            console.log (this.number1 / this.number2);
        }
    }).bind(this);
}

// example of usage
const calculator = new Calculator(10, 5);
calculator.logSum(); // Output: 15
calculator.logMul(); // Output: 50

calculator.setX(20);
calculator.setY(4);
calculator.logSub(); // Output: 16
calculator.logDiv(); // Output: 5

const logSumRef = calculator.logSum;
console.log(logSumRef()); // Output: 24