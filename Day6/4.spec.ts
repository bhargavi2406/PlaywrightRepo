import {test,expect} from "@playwright/test";
 test('Create a Lead  using assertions', async({page})=>{

 await page.goto("https://leaftaps.com/opentaps/control/main");
 await page.getByRole("textbox",{name:"Username"}).fill("democsr2");
 await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
 await page.getByRole("button",{name:"Login"}).click();
 await page.getByRole("link",{name:"CRM/SFA"}).click();
 await page.getByRole("link",{name:"Leads"}).click();
 await page.getByRole("link",{name:"Create Lead"}).click();
await page.locator("#createLeadForm_companyName").fill("cg");
  await page.locator("#createLeadForm_firstName").fill("bhargavi");
  await page.locator("#createLeadForm_lastName").fill("koka");
  await page.locator("#createLeadForm_personalTitle").fill("assigned");

  await page.locator("#createLeadForm_generalProfTitle").fill("learning");
  await page.locator("#createLeadForm_annualRevenue").fill("234");
  await page.locator("#createLeadForm_departmentName").fill("cs");
  await page.locator("#createLeadForm_primaryPhoneNumber").fill("665642545");

  
await page.getByRole("button", { name: "Create Lead" }).click();
const company = await page.locator("#viewLead_companyName_sp").textContent();
  const firstName = await page.locator("#viewLead_firstName_sp").textContent();
  const lastName = await page.locator("#viewLead_lastName_sp").textContent();
  const status = await page.locator("#viewLead_statusId_sp").textContent();

  expect(company).toContain("cg");
  expect(firstName).toBe("bhargavi");
  expect(lastName).toBe("koka");
  expect(status).toContain("Assigned");
const title = await page.title();
console.log(title);

 })