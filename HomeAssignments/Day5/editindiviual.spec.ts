import { test } from "@playwright/test";
test("edit individuals from salesforcepage", async ({ page }) => {
await page.goto("https://login.salesforce.com/?locale=in");
await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", { name: "Log In" }).click();
await page.getByTitle("App Launcher",{exact:true}).click();
await page.getByText("View All",{exact:true}).nth(2).click();
await page.getByPlaceholder("Search apps or items...").fill("ind");
await page.waitForTimeout(2000);
await page.getByRole("link", { name: "Individuals" }).click();
await page.getByPlaceholder("Search this list...").fill("bhargavis");
await page.getByTitle("bhargavis",{exact:true}).click();
await page.getByRole('link', { name: 'bhargavis' }).first().click();
await page.waitForTimeout(2000); // For demo purpse
 await page.getByRole('button', { name: 'Edit' }).last().click();
await page.getByRole("button", { name: "Salutation" }).click();
await page.getByText("Dr.").click();
await page.getByRole('textbox', { name: 'Last Name' }).fill('bhargavik');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.waitForTimeout(3000); // For demo purpse


});