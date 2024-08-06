
// 11. The Array Filterer:
// Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const products = [
    { name: "Product1", category: "Electronics" },
    { name: "Product2", category: "Clothing" }
];
const criterion = "Electronics";
const filteredProducts = products.filter(product => product.category === criterion);
console.log(filteredProducts);
