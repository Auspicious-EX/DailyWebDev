
// 10. The Coffee Machine:
// Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const type = "Latte";
new Promise(resolve => {
    const delay = Math.floor(Math.random() * 2000);
    setTimeout(() => resolve(`${type} coffee is ready!`), delay);
}).then(message => console.log(message));
