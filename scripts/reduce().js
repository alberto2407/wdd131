//
//Reduce() Method //
//

import { students } from "./arrays.js";

// const totalAge = students.reduce((acumulator, student) => {
//     return acumulator + student.age
// },0)

const totalAge = students.reduce((acumulator, student) => acumulator + student.age, 0);
console.log(totalAge);
console.log(students);

import { developers } from "./arrays.js";

const result = developers.reduce((allSkills, student) => new Set([...allSkills, ...student.skills]), []);

console.log(developers);
console.log(result);

const numbers = [3, 10, 20, 50];
// let total = numbers.reduce((acumulator, number)=>{
//      return acumulator + number;
//  },0);

// let total = numbers.reduce((acumulator, number) => acumulator + number, 0); //Short way

const acumulate = (acumulator, number) => number + acumulator;
const total = numbers.reduce(acumulate, 0);

console.log(total);
//////////////////////////////////////////////////////////////////////////////////////////////

const arrayNumbers = [71, 41, 19, 88, 3, 65];
//  const acumulateDoubles = (acumulator, number) => {
//      acumulator.push(number * 2);
//      return acumulator;
//  };

const acumulateDoubles = (acumulator, number) => [...acumulator, number * 2];
const reduceDoubles = arrayNumbers.reduce(acumulateDoubles, []);

console.log(reduceDoubles);
///////////////////////////////////////////////////////////////////////////////////////

import { names } from "./arrays.js";
let averageName = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(averageName);

/////////////////////////////////////////////////////////////////////////////////////////

const computeWindChill = function(windSpeed, temperature) {
    // Fahrenheit Only
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  };
  
console.log(computeWindChill(10, 50));

computeWindChill(10, 50);