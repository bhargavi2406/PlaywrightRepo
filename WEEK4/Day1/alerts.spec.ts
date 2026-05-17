import{test,expect} from "@playwright/test";
test('alerts',async({page})=>{
await page.goto("https://leafground.com/alert.xhtml");
page.on("dialog",async (alert) => {
    console.log(`the type of alert is ${alert.type()}`)
        console.log(`the message  inside the alert is ${alert.message()}`)
        if(alert.type()==='confirm'){

            await alert.accept()
        } else if(alert.type()==='prompt'){
            await alert.accept("testleaf")


        } else 
        {
            await alert.dismiss()
        }

})
await page.locator('//span[text()="Show"]').first().click();
await page.waitForTimeout(3000)

await page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"}).locator('//span[text()="Show"]').click();
await page.waitForTimeout(3000)

await page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"}).locator('//span[text()="Show"]').click();

await page.waitForTimeout(3000)

})