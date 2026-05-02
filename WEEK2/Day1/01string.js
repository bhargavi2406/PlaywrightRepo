let cm='hi';
let fm='hi';

console.log(cm===fm);


let cm1= new String('hi');
let fm1= new String('hi');

console.log(cm1===fm1);

let testesc='it\s \ta \n regression'
console.log(testesc);

let testescdbl="hi  \n \"doublequote\"";
console.log(testescdbl);


let tc= "create a lead";
let tcno=123
let res=tc +" tcno " + tcno
console.log(res);

let result= tc.concat( " ", tcno );
console.log(result);


function timefun(x,y){
    console.log(`this is ${x} and  testcase ${y}`)
}

timefun("10","20")


let course="playwrighr"
console.log(`the length is ${course.length}`)
console.log(`the charat is ${course.charAt(3)}`)
console.log(`the index is ${course.indexOf("r")}`)
console.log(`the index is ${course.indexOf("r",9)}`)
console.log(`the substring is ${course.substring(4,10)}`)

let outputsub1=course.substring(5,10)
 console.log(outputsub1)

let outputsub2=course.substring(10,-5)
 console.log(outputsub2)


let fn="bhargavi.png"

let exte=fn.slice(-3)
console.log(exte);


let outputslice1=course.slice(4,10)
console.log(outputslice1);