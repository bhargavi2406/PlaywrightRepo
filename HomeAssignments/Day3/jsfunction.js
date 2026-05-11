function userProfile(name) {
  console.log("Hello, " + name + "!");
}

// Example call
userProfile("John"); // Hello, John!

//Arrow function
const double = (num) => num * 2;

// Example call
console.log(double(5)); // 10

//Anonymous
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);


//callback
function getUserData(callback) {
  // Simulate fetching data (3 seconds delay)
  setTimeout(function () {
    callback();
  }, 3000);
}

// Call the function with a callback
getUserData(function () {
  console.log("Call Back Function");
});