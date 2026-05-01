const browserName = "Chrome"; // Global variable

function getBrowserName() {

    if (browserName === "Chrome") {
        let browser = "Inside if block using let";
    }

    console.log(browser); // With var → works here
}

getBrowserName();