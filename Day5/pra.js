function fetchuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("users loaded");
        },2000);

        });
    }
    function fecthproducts(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("products loaded");
        },3000);

        });
    }
    function fetchorders(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("orders loaded");
        },1000);

        });
    }

    /*async function loadseq(){
        console.log("seq starts");
        let users=await fetchuser();
        console.log(users);
        let products=await fecthproducts();
        console.log(products);
        let orders=await fetchorders();
        console.log(orders);
    }
    loadseq();
    */
   async function loadpara(){
        console.log("parallel starts");
        let result=await Promise.all([fetchorders(),fecthproducts(),fetchorders()]);
        console.log(result);}

    loadpara();
    
