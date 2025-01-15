let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
};

function checkCountValue() {
    if (count === 10) {
        alert("your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
};

function resetCount() {
    count = 0; // Reset the count variable to 0
    displayCount(); // Update the HTML to reflect the reset count
    alert("Counter has been reset!");
}