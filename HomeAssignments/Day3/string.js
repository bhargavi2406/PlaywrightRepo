/*let str = "Hello World";

function lastWordLength() {
    let words = str.trim().split(" ");
    let lastWord = words[words.length - 1];

    console.log(lastWord.length);
}

lastWordLength();


let str = "   fly me   to   the moon   ";

function lastWordLength() {
    let words = str.trim().split(/\s+/);
    let lastWord = words[words.length - 1];

    console.log(lastWord.length);
}

lastWordLength();
*/
let str1 = "listen";
let str2 = "silent";

function isAnagram() {
    let word1 = str1.toLowerCase().split("").sort().join("");
    let word2 = str2.toLowerCase().split("").sort().join("");

    console.log(word1 === word2);
}

isAnagram();