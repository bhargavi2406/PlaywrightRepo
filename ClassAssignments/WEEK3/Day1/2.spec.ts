import{test} from "@playwright/test";
test(`class ass`, async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator('//input[@id="username"]').fill("democsr2");
await page.locator('//input[contains(@id,"passw")]').fill("crmsfa");
await page.locator('//input[@class="decorativeSubmit"]').click();
await page.locator('//a[contains(text(),"CRM")]').click();
await page.locator('//a[text()="Leads"]').click();
await page.locator('//a[text()="Create Lead"]').click();
await page.locator('//input[@id="createLeadForm_companyName"]').fill("capgemini");
await page.locator('//input[@id="createLeadForm_firstName"]').fill("bhargavi");
await page.locator('//input[@id="createLeadForm_lastName"]').fill("k");
await page.locator('//input[@class="smallSubmit"]').click();



    await page.waitForTimeout(3000); // For demo purpse

})