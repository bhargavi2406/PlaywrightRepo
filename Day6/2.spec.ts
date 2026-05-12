import {test,expect} from "@playwright/test";
 test('edit a Lead  using assertions', async({page})=>{

 await page.goto("https://leaftaps.com/opentaps/control/main");
 await page.getByRole("textbox",{name:"Username"}).fill("democsr2");
 await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
 await page.getByRole("button",{name:"Login"}).click();
 await page.getByRole("link",{name:"CRM/SFA"}).click();
 await page.getByRole("link",{name:"Leads"}).click();
await page.getByRole("link",{name:"Find Leads"}).click();
await page.getByRole("textbox",{name:"First name"}).fill("bhargavi");
 await page.getByRole("button",{name:"Find Leads"}).click();
await page.getByRole("link",{name:"bhargavi"}).first().click();
await page.getByRole("link",{name:"Edit"}).click();
await page.locator("#updateLeadForm_companyName").fill("cg");
  await page.locator("#updateLeadForm_annualRevenue").fill("456");
  await page.locator("#updateLeadForm_departmentName").fill("ece");
  await page.locator("#updateLeadForm_description").fill("updated");
 await page.getByRole("button",{name:"Update"}).click();

await expect(page.locator("#viewLead_companyName_sp")).toContainText("cg");

await expect(page.locator("#viewLead_annualRevenue_sp"))
.toContainText("456");

await expect(page.locator("#viewLead_departmentName_sp"))
.toHaveText("ece");

await expect(page.locator("#viewLead_description_sp"))
.toHaveText("updated");



 });


