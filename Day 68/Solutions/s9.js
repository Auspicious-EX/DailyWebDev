
// 9. The Asynchronous Shopper:
// Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

new Promise(resolve => {
    const delay = Math.floor(Math.random() * 2000);
    setTimeout(() => resolve('Order placed successfully!'), delay);
}).then(message => console.log(message));
