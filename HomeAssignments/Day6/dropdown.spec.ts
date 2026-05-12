import { test } from "@playwright/test";

test('Dropdown assignment', async ({ page }) => {

  await page.goto("https://leafground.com/select.xhtml");

  // Step 1: Select favorite tool
  await page.locator(".ui-selectonemenu").first().click();
await page.locator("select").first().selectOption({ label: "Playwright" });

  // Step 2: Get values count
  const options = await page.locator("li").allTextContents();
  console.log("Options:", options);
  console.log("Count:", options.length);

  // Step 3: Country
  // Open country dropdown
await page.locator("//label[text()='Select Country']").click();

// Select India
await page.locator("//li[text()='India']").click();
  // Step 4: City
  await page.locator("[id*='city']").click();
  await page.getByText("Chennai").click();

  // Step 5: Courses (multiple)
  await page.locator("[id*='course']").click();

  await page.getByText("Selenium WebDriver").click();
  await page.getByText("Playwright").click();
  await page.getByText("Cypress").click();

});