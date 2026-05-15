import { test, expect } from '@playwright/test';

test('Dropdown Assignment', async ({ page }) => {

  await page.goto('https://leafground.com/select.xhtml');

  await page.locator("//select[@class='ui-selectonemenu']").selectOption("Playwright");

  const options = page.locator("//select[@class='ui-selectonemenu']/option");
  const count = await options.count();

  console.log("Dropdown Count =", count);

  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text);
  }

  await page.locator("#j_idt87\\:country_label").click();
  await page.getByRole('option', { name: 'India' }).click();

  await page.locator("#j_idt87\\:city_label").click();

  const cityVisible = await page.getByRole('option', { name: 'Bengaluru' }).isVisible();
  expect(cityVisible).toBeTruthy();

  await page.getByRole('option', { name: 'Bengaluru' }).click();


  
await page.locator("#j_idt87\\:auto-complete_input").fill("P");
await page.waitForTimeout(1000);
await page.getByRole('option', { name: 'Playwright' }).click();

await page.locator("#j_idt87\\:auto-complete_input").fill("A");
await page.waitForTimeout(1000);
await page.getByRole('option', { name: 'Appium' }).click();

  await page.locator("#j_idt87\\:lang_label").click();
  await page.getByRole('option', { name: 'English' }).click();

  await page.locator("#j_idt87\\:value_label").click();

  const values = page.locator("//ul[@id='j_idt87:value_items']/li");
  const valueCount = await values.count();

  console.log("Language values:");

  for (let i = 0; i < valueCount; i++) {
    const text = await values.nth(i).textContent();
    console.log(text);
  }

  await page.getByRole('option', { name: 'Two' }).click();

});