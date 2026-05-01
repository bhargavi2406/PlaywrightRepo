const browserName = "Chrome"; // Global variable

function getBrowserName() {

    if (browserName === "Chrome") {
        var browser = "Inside if block using var";
    }

    console.log(browser); // With var → works here
}

getBrowserName();