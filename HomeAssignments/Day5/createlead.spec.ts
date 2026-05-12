import { test } from "@playwright/test";
test("creatlead from salesforcepage", async ({ page }) => {
await page.goto("https://login.salesforce.com/?locale=in");
await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", { name: "Log In" }).click();
await page.getByTitle("App Launcher",{exact:true}).click();
await page.getByText("View All",{exact:true}).nth(2).click();
await page.getByPlaceholder("Search apps or items...").fill("Leads");
await page.waitForTimeout(2000);
await page.getByText("Leads").last().click();
await page.getByRole("button", { name: "New" }).click();
await page.locator('button[aria-label="Salutation"]').click();
await page.getByRole("option", { name: "Mr." }).click();
await page.getByRole("textbox",{name:"Last Name"}).fill("bhargavi");
await page.getByRole("textbox",{name:"Company"}).fill("cg");
await page.getByRole("button", { name: "Save", exact: true }).first().click();

    await page.waitForTimeout(3000)


})