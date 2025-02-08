//
//Filter() Method//
//

import { students } from "./arrays.js";

const webDevelopment = students.filter(student => student.course !== 'Web Development');
console.log(webDevelopment);

const ageStudent = students.filter(student => student.age < 20);
console.log(ageStudent);

/////////////////////////////////////////////////////////////////

import { products } from "./arrays.js";
// const cheapProducts = products.filter(function(product){
//     return product.price < 100;
// });

//const cheapProducts = products.filter(product => product.price < 100);

const isCheap = product => product.price < 100;
const isExpensive = product => !isCheap(product);

const cheapProducts = products.filter(isCheap);
const expensiveProducts = products.filter(isExpensive);

console.log(cheapProducts);
console.log(expensiveProducts);

///////////////////////////////////////////////////////////////////////

const arrayNums = [1, 2, 3, 4, 3, 1];

const numbersUnique = arrayNums.filter((num, position, arrayNums) => {
    return position === arrayNums.indexOf(num);
});

console.log(numbersUnique);

//////////////////////////////////////////////////////////////

import { names } from "./arrays.js";

//let namesWithB = names.filter(name => name.includes('B'));

let namesWithB = names.filter(name => name.charAt(0) === 'B');

console.log(namesWithB);

/////////////////////////////////////////////////////////////////////

