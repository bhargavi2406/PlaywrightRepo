/* let name="madam"


function palindrome() {
    let reverse = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reverse = reverse + name.charAt(i)
    }


    console.log(reverse);
}
palindrome()

 

*/

let name = "hello";

function palindrome() {
    let reverse = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reverse = reverse + name.charAt(i);
    }

    if (name === reverse) {
        console.log("madam" + "\n"+ " Palindrome ");
    } else {
        console.log("hello" +  "\n"+ " Not Palindrome ");
    }
}

palindrome();
