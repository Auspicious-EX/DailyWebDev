
// 13. The Shopping Cart Totalizer:
// Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
];
const total = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
console.log(total);
