import{test} from "@playwright/test";
test(`learn xpath `, async({page})=>{
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
//await page.selectOption('//select [@id="createLeadForm_dataSourceId"]',{value:'LEAD_EMPLOYEE'})
//await page.selectOption('//select [@id="createLeadForm_dataSourceId"]',{label:'Partner'})
await page.selectOption('//select [@id="createLeadForm_dataSourceId"]',{index:7})

const alldropdownvalues= page.locator('//select [@id="createLeadForm_dataSourceId"]/option');
    const dropDownCount = await alldropdownvalues.count(); // alldropDownValues is holding 13 locator objects

console.log(`the drop down count is ${dropDownCount}`);
 console.log(await alldropdownvalues.nth(0).innerText()); // blank
    console.log(await alldropdownvalues.nth(1).innerText()); //Cold Call
    console.log(await alldropdownvalues.nth(2).innerText()); //Conference
    // alldropDownValues.nth(3);//Direct Mail



for(let index=0;index<dropDownCount; index++){
            console.log(await alldropdownvalues.nth(index).innerText());

}
await page.locator('//input[@class="smallSubmit"]').click();



    await page.waitForTimeout(3000); // For demo purpse

})