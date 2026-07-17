// References to DOM elements
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

// List of Book of Mormon books
const bookOfMormonBooks = [
    '1 nephi', '2 nephi', 'jacob', 'enos', 'jarom', 'omni',
    'words of mormon', 'mosiah', 'alma', 'helaman', '3 nephi',
    '4 nephi', 'mormon', 'ether', 'moroni'
];

// Capitalize the first letter of each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Check if the chapter is from the Book of Mormon
function isValidBookOfMormon(inputValue) {
    const bookName = inputValue.split(/\d/)[0].trim().toLowerCase();
    return bookOfMormonBooks.includes(bookName);
}

// Add Chapter function
function addChapter() {
    const inputValue = input.value.trim();

    if (inputValue === '') {
        alert("You must enter a book name and chapter number");
        input.focus();
        return;
    }

    if (!isValidBookOfMormon(inputValue)) {
        alert("Please enter a valid Book of Mormon book name and chapter number");
        input.value = '';
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const capitalizedValue = capitalizeWords(inputValue);

    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-btn');
    deleteButton.setAttribute('aria-label', `Remove ${capitalizedValue}`);
    li.textContent = capitalizedValue;
    
    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
}

// Button "Add Chapter"
button.addEventListener('click', addChapter);

// Key "Enter" in the input
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addChapter();
    }
});