
// 12. The Token Manager:
// Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

const token = "abc123";
const expiryMinutes = 30;
const expiryTime = new Date().getTime() + expiryMinutes * 60000;
localStorage.setItem('authToken', JSON.stringify({ token, expiryTime }));
console.log('Auth token saved with expiry');
