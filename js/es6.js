const marks = [50, 40, 70, 80, 85, 90, 99];
const student = {
    name: 'Shakib Khan',
    age: 35,
    movies: ['King Khan', 'Dhakar Mastan']
};


//1. Template String
        const about = `Hero Name is: ${student.name} Hero age is ${student.age} Her Movie is ${student.movies[0]} Her marks is ${marks[3]}`;
        // console.log(about);
 
        

//2. Arrow Function 

const isEven = num => num % 2 == 0 ;
// console.log(isEven(22));
const doSum = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// console.log(doSum(20, 30));
//3. Spread Operator 
const numbers = [10, 20, 30, 40, 50, 15, 25, 35, 45, 55];
const spreadNumber = [5, ...numbers, 100];
// console.log(numbers);
// console.log(spreadNumber);