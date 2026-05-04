let x= new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("login");
    }
    else{
        reject("failed");
    }
    });
    x.then((result)=>{
        console.log(result);
    })
.catch((error)=>{
    console.log(error);
});




