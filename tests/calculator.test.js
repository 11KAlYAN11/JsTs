const chai = require('cahi');
const expect = chai.expect;
const Calculator = require('../src/calculator');
describe("Calculator Module",() => {
    it('should return the sum of two numbers',() => {
        const result = Calculator.add(1,2);
        expect(result).to.equal(3);
    });
    it("Should return the difference of two numbers",() => {
        const result = Calculator.subtract(10,5);
        expect(result).to.equal(5);
    })
    it("Should return the product of two numbers",() => {
        const result = Calculator.multiply(5,5);
        expect(result).to.equal(25);
    })
    it("Should return the division og two numbers",() => {
        const result = Calculator.divide(10,2);
        expect(result).to.equal(5);
    })
});