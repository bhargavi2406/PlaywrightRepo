function isPalindrome(num) {

    if (num < 0) return false; // Negative numbers are not palindrome

    let original = num;
    let reversed = 0;

    while (num > 0) {

        let lastDigit = num % 10;     
        reversed = (reversed * 10) + lastDigit;  
        num = Math.floor(num / 10);   
    }

    return original === reversed;
}

console.log(isPalindrome(121));   // true
console.log(isPalindrome(123));   // false
console.log(isPalindrome(1331));  // true