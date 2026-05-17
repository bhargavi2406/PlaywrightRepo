import{test,expect} from"@playwright/test";
test('window handling',async({page,context})=>{
await page.goto("https://www.flipkart.com/");
const search = page.locator('[placeholder="Search for Products, Brands and More"]').first();
await search.fill("phone");

await search.press("Enter");
const pagepromise=context.waitForEvent("page");
await page.locator('//div[text()="Kechaoda A27"]').first().click();
const childpage=await pagepromise;
await childpage.waitForLoadState("domcontentloaded");
console.log(await childpage.title());
console.log(await page.title());

})