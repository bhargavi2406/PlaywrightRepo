import { test, expect } from '@playwright/test';

test('Radio Button Assignment', async ({ page }) => {

  await page.goto("https://leafground.com/radio.xhtml");

  const defaultRadio = page.locator(".ui-selectoneradio .ui-state-active").first();

  await expect(defaultRadio).toBeVisible();

  await page.getByText("Chrome").first().click();

  const chrome = page.locator("//label[text()='Chrome']/preceding-sibling::div");

  await expect(chrome).toHaveClass(/ui-state-active/);

  await page.getByText("Bengaluru").click();

  await page.getByText("21-40 Years").click();

  const age = page.locator("//label[text()='21-40 Years']/preceding-sibling::div");

  await expect(age).toHaveClass(/ui-state-active/);

});