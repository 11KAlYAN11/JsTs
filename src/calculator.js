/**
 * Calculator Module
 */

const Calculator = {
    /**
     * Adds two numbers
     * @param {number} a - The first number
     * @param {number} b - The second number
     * @returns {number} The sum of the a and b
     */
    add(a,b) {
        return a+b;
    },
    subtract(a,b) {
        return a-b;
    },
    multiply(a,b) {
        return a*b;
    },
    divide(a,b) {
        return a/b;
    },
    
};
module.exports = Calculator;