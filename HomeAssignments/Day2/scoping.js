let genderType = "female";   // Global variable

function printGender() {

    let color = "brown";   // Function scope

    if (genderType.startsWith("female")) {

        var age = 30;      // Function scoped
        let color = "pink"; // Block scoped

        console.log("Inside block color:", color);
    }

    console.log("Outside block color:", color);
    console.log("Age:", age);
}

// Function call
printGender();

// Global variable
console.log("Gender:", genderType);