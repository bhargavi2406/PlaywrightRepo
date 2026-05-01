/* function isValid(data) {
    if (data) {
        return true;
    }
}
*/


function isValid(data) {
    return data !== null &&
           data !== undefined &&
           data !== "";
}

console.log(isValid(0));     // true
console.log(isValid(10));    // true
console.log(isValid("Hi"));  // true
console.log(isValid(""));    // false
console.log(isValid(null));  // false
console.log(isValid(undefined)); // false