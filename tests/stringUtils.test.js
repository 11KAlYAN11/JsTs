const stringUtils = require('../src/stringUtils');

describe('String Utilities', () => {
  describe('reverseString', () => {
    it('should reverse a given string', () => {
      expect(stringUtils.reverseString("hello")).toBe("olleh");
    });

    it('should return an empty string when input is empty', () => {
      expect(stringUtils.reverseString("")).toBe("");
    });

    it('should throw an error if input is not a string', () => {
      expect(() => stringUtils.reverseString(123)).toThrow("Input must be a string");
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
      expect(stringUtils.capitalizeFirstLetter("hello")).toBe("Hello");
    });

    it('should handle single-character strings correctly', () => {
      expect(stringUtils.capitalizeFirstLetter("a")).toBe("A");
    });

    it('should throw an error if input is not a string', () => {
      expect(() => stringUtils.capitalizeFirstLetter(null)).toThrow("Input must be a string");
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome string', () => {
      expect(stringUtils.isPalindrome("madam")).toBe(true);
    });

    it('should return false for a non-palindrome string', () => {
      expect(stringUtils.isPalindrome("hello")).toBe(false);
    });

    it('should handle empty strings correctly', () => {
      expect(stringUtils.isPalindrome("")).toBe(true);
    });

    it('should throw an error if input is not a string', () => {
      expect(() => stringUtils.isPalindrome(123)).toThrow("Input must be a string");
    });
  });
});
