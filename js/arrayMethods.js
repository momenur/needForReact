// Map Concept 
const accessory = [
    {name: 'Laptop', band: 'Asus', price: 62000, color: 'Silver'},
    {name: 'Mobile', band: 'Redmi', price: 14500, color: 'Black'},
    {name: 'Watch', band: 'Titan', price: 2000, color: 'Yellow'},
    {name: 'Power Bank', band: 'MI', price: 2200, color: 'Gry'},
    {name: 'Sunglass', band: 'Redux', price: 6000, color: 'Pink'}
];
const bands = accessory.map(item => item.band);
// console.log(bands);

// forEach Concept 
accessory.forEach(product => {
    const price = product.price;
    const newPrice = price + 50000 ;
    // console.log(newPrice);
});