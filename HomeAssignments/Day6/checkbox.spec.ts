import { test, expect } from "@playwright/test";

test('Checkbox assignment', async ({ page }) => {

  await page.goto("https://leafground.com/checkbox.xhtml");

  await page.locator("(//div[contains(@class,'ui-chkbox-box')])[1]").click();

  await page.locator("(//div[contains(@class,'ui-chkbox-box')])[2]").click();

  await expect(page.locator(".ui-growl-message")).toBeVisible();

await page.locator("//label[text()='Java']").click();

  await page.locator("(//div[contains(@class,'ui-chkbox-box')])[5]").click();

  await page.locator(".ui-toggleswitch-slider").click();

  await expect(page.locator(".ui-growl-message")).toBeVisible();

await expect(page.getByText("Disabled", { exact: true })).toBeVisible();
});