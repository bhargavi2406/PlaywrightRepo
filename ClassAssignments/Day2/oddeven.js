function isOddOrEven(number)
{
    if(number%2===0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
    }

let result=isOddOrEven(6);
console.log(result);


function   isOddorEven(number)
{
    let result;
    if(number %2===0)
    {
        result="Even";

    }
    else{
        result="Odd";

    }
    return result;
}
console.log("the number is 6:",isOddorEven(6));
console.log("the number is 3:",isOddorEven(3));
console.log("the number is 18:",isOddorEven(18));
console.log("the number is 1:",isOddorEven(1));


function GetOddValue()
{
  for (let i=1 ;i<=25; i++)
  {
    let value = i%2
    if(value!=0)
    {
      console.log("Oddnumber: ",i)
    }
  }
}
GetOddValue()

