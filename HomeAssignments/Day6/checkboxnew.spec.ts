import { test, expect } from '@playwright/test';

test('checkbox assignment', async ({ page }) => {
  await page.goto('https://leafground.com/checkbox.xhtml');
  await page.locator('.ui-chkbox-box').first().click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  //await page.getByText('Checked').click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  await page.locator('.ui-toggleswitch-slider').click();
  await page.getByText('Checked').click();
  await page.locator('div').filter({ hasText: /^Disabled$/ }).click();
  await page.locator('div').filter({ hasText: /^Disabled$/ }).click();
  await page.getByRole('list').filter({ hasText: /^$/ }).click();
  await page.locator('[id="j_idt87:multiple_panel"]').getByText('London').click();
await page.close();
});