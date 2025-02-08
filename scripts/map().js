//
//Map() Method//
//

import { students } from "./arrays.js";
const studentNames = students.map(student => {
    return {
        ...student,
        course: 'Programing'
        // fullname: student.name + ' ' + student.lastname,
        // age: student.age,
        // course: student.course,
        // title : `${student.name} - ${student.course}`,
        // message: `${student.name} is ${student.age} years old and studies ${student.course}`
    }
});
console.log(studentNames);
console.log(students);

const array_Numbers = [3, 10, 20, 50];
// const doubles = array_Numbers.map(function(number){
//     return number * 2;
// });
const doubles = array_Numbers.map(number => number * 2);
console.log(doubles);

//////////////////////////////////////////////////////////////////
import { products } from "./arrays.js";
const productWhithDiscount = products.map(function (product) {
    if (product.price < 100) return product;

    return {
        ...product,
        price: product.price * 0.9
    };

});

console.log(productWhithDiscount);

// const idProducts = products.map(function(product){
//     return product.id;
// });
// const idProducts = products.map(product => product.id); //A way to do the same but shortening the code
const idProducts = products.map(({ id }) => id); // Another way more short
console.log(idProducts);

//////////////////////////////////////////////////////////////////////

import { names } from "./arrays.js";
let arrayNames = names.map(name => name.length);
console.log(arrayNames);
