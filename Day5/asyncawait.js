function greet(){
    return Promise.resolve("bhargavi");
}
async function showuser() {
    let res= await greet();

    

    console.log(res);
}
showuser();
