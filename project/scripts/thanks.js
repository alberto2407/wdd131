document.addEventListener("DOMContentLoaded", () => {
    // Get the counter value from localStorage
    let submissionCount = localStorage.getItem('submissionCount');
    if (submissionCount === null) {
        submissionCount = 0;
    }
    else {
        submissionCount = parseInt(submissionCount);
    }

    // Increment and update counter
    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount);

    // Show the updated counter
    const counterElement = document.getElementById('submissionCount');
    if (counterElement) {
        counterElement.textContent = submissionCount;
    }

    console.log(`Total messages sent: ${submissionCount}`);
});