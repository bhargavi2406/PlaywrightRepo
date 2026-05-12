import{test,expect} from"@playwright/test";
test('create a new account salesforcepage',async({page})=>{
await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username", { exact: true }).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025")
await page.getByRole("button",{name:"Log In"}).click();
await expect(page).toHaveTitle(/Salesforce/);
  await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");

await page.locator(".slds-icon-waffle_container").click();
    await page.getByText("View All",{exact:true}).nth(2).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service");
await page.waitForTimeout(2000);
await page.getByText("Service").last().click();

await page.locator("a[title='Accounts']").click();
await page.getByRole("button", { name: "New" }).click();
 await page.getByRole("textbox",{name:"Account Name"}).fill("bhargavi");
await page.locator("//button[normalize-space()='Save']").last().scrollIntoViewIfNeeded();
await page.locator("//button[normalize-space()='Save']").last().click();
await expect(page.locator("//span[contains(@class,'toastMessage')]")).toContainText("was created");

}
)