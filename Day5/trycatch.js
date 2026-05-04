function greet(){
    //return Promise.resolve("bhargavi");
        return Promise.reject("failed");

}
async function showuser() {
    try{
    let res= await greet();
    console.log(res);
    }
    catch(error){
            console.log(error);

    }

}
showuser();
