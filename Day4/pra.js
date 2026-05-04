let shop={

    pname:"hari",
    age:28,
    brand:"samsung",
    category:"mobile",
    model:25

};


/* let{pname,age,brand,category,model}=shop;
console.log(pname);
console.log(age);
console.log(brand);
console.log(category);
console.log(model);
*/

let shipping={
    deliver:"2 days",
    location:"mumbai"
};
let proudct={...shop,...shipping
};
console.log(proudct);