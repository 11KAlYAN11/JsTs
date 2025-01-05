// A utility module for string manipulations
const stringUtils = {
    reverseString(str) {
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      return str.split("").reverse().join("");
    },
  
    capitalizeFirstLetter(str) {
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    isPalindrome(str) {
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    },
  };
  
  module.exports = stringUtils;
  