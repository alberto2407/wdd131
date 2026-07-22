let firstName = 'Antonia';
let lastName = 'Francesca';

//* FUNCTION DECLARATION *//

// Define a function
function fullName(first, last) {
    return `${first} ${last}`;
}

// Call the function and store the result in a variable
let name1 = fullName(firstName, lastName);
console.log(name1); // "Antonia Francesca"


//* FUNCTION EXPRESSION *//

// Assign the function to a variable
const fullName2 = function(first, last) {
    return `${first} ${last}`;
};

// Call the function and store the result in a variable
let name2 = fullName2(firstName, lastName);
console.log(name2); // "Antonia Francesca"


//* ARROW FUNCTION *//

// Assign the function to a variable
const fullName3 = (first, last) => `${first} ${last}`;

// Call the function and store the result in a variable
let name3 = fullName3(firstName, lastName);
console.log(name3); // "Antonia Francesca"

// Assign the result of the function to the textContent of an HTML element
document.querySelector('#fullName').textContent = fullName(firstName, lastName);
// Result: "Antonia Francesca" appears in the HTML element with the id "fullName"