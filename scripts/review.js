const reviews = document.querySelector("#review");

let reviewers = Number(window.localStorage.getItem("reviewers-ls")) || 0;

reviews.textContent = reviewers;
reviewers++;

localStorage.setItem("reviewers-ls", reviewers);