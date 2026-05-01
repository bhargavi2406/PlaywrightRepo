function checkNumber(num) {
    let result;

    if (num > 0) {
        result = "Positive";
    } 
    else if (num < 0) {
        result = "Negative";
    } 
    else {
        result = "Zero";
    }

    return result;
}

// Calling the function
console.log(checkNumber(10));   // Positive
console.log(checkNumber(-5));   // Negative
console.log(checkNumber(0));    // Zero