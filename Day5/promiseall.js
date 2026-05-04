let p1=Promise.resolve("order placed");
let p2=Promise.resolve("payment done");
let p3=Promise.resolve("email sent");

Promise.all([p1,p2,p3])
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);

});
