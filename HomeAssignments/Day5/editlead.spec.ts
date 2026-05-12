import { test } from "@playwright/test";
test("edit lead from salesforcepage", async ({ page }) => {
await page.goto("https://login.salesforce.com/?locale=in");
await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", { name: "Log In" }).click();
await page.getByTitle("App Launcher",{exact:true}).click();
await page.getByText("View All",{exact:true}).nth(2).click();
await page.getByPlaceholder("Search apps or items...").fill("Leads");
await page.waitForTimeout(2000);
await page.getByText("Leads").last().click();
await page.getByPlaceholder("Search this list...").fill("bhargavikoka");
await page.getByTitle("bhargavikoka",{exact:true}).click();
await page.getByRole('link', { name: 'bhargavikoka' }).first().click();
await page.waitForTimeout(2000); // For demo purpse

 await page.getByRole('button', { name: 'Edit' }).last().click();
  await page.locator('button[aria-label="Salutation"]').click();
await page.getByRole("option", { name: "Dr." }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('bhargavik');
  await page.getByRole('textbox', { name: 'Company' }).fill('capgeminis');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.waitForTimeout(3000); // For demo purpse

});