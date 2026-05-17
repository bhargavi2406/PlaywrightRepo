import{test,expect} from "@playwright/test";
test('iframe locator',async({page})=>{
await page.goto("https://leafground.com/frame.xhtml");

const frame2ref= page.frameLocator('[src="nested.xhtml"]')

const buttontext=await frame2ref.locator("#Click").innerText();
console.log(buttontext);
await page.waitForTimeout(3000)


})

test.only('nested iframes',async({page})=>{

await page.goto("https://leafground.com/frame.xhtml");

const outerframeref= page.frameLocator('[src="page.xhtml"]')

const innerframeref=outerframeref.frameLocator('[src="framebutton.xhtml"]')
await innerframeref.locator("#Click").click();
console.log(await innerframeref.locator("#Click").innerText());


await page.waitForTimeout(3000)

})