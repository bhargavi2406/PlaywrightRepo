import{test} from "@playwright/test";
test(`learn css from salesforcepage`,async({page})  =>{
await page.goto("https://login.salesforce.com/?locale=in");
//await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");
await page.locator('[class="input r4 wide mb16 mt8 username"]').fill("dilipkumar.rajendran@testleaf.com");

//await page.locator('[id="password"]').fill("TestLeaf@2025");
await page.locator('[class="input r4 wide mb16 mt8 password"]').fill("TestLeaf@2025");
//await page.locator('[id="Login"]').click();
await page.locator('[class="button r4 wide primary"]').nth(0).click();
    await page.waitForTimeout(3000); // For demo purpse
 


})