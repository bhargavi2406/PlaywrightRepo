let x= new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("login");
    }
    else{
        reject("failed");
    }
    });
    console.log(x);
    

