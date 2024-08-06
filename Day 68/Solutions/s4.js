
// 4. The Password Validator:
// Create a function that checks if a given password meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one digit

const password = "Password123";
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasDigit = /\d/.test(password);
const isValid = password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit;
console.log(isValid);
