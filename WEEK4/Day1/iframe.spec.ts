import{test,expect} from "@playwright/test";
test('iframe',async({page})=>{

await page.goto("https://developer.servicenow.com/dev.do");
const allframes= page.frames()

console.log(allframes.length)

for(let index=0;index < allframes.length;index++){

    const title=await allframes[index].title()
    console.log(`the title of the frames are ${title}`);

}
//console.log(await allframes[0].title())

await page.waitForTimeout(3000)

})