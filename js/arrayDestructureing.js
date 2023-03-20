// Array Destructuring 
const desNumbers = [42, 62];
const a = desNumbers[0];
const b = desNumbers[1];
console.log(a, b);

const [x, y] = desNumbers;
console.log(x, y);



// Object Destructuring 
const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'mac',
    language: ['HTML', 'CSS', 'Java Script'],
    specification: {
        height: 65,
        weight: 70,
        address: 'Dhaka',
        drink: 'Water',
        watch:{
            color: 'Black',
            band: 'Casio'
        }
    }
}

const {ide, machine} = employee;
console.log(ide, machine);
const {color, band} = employee?.specification?.watch;
console.log(color, band);