import{test} from "@playwright/test";
test(`learn non select tag `, async({page})=>{
await page.goto("https://leafground.com/input.xhtml");
await page.locator('//label[text()="Select Country"]').click();
await page.locator('//li[text()="India"]').click();
    await page.waitForTimeout(3000); // For demo purpse


})
