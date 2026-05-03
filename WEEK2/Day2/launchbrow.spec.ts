import { chromium, test } from "@playwright/test";

test("test to launch browser", async () => {

    const browser = await chromium.launch({headless:true});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.waitForTimeout(5000);

    
});

/*import { chromium, test } from "@playwright/test";

test("test to launch browser", async ({page}) => {

    //const browser = await chromium.launch({headless:true});

    //const context = await browser.newContext();

    //const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.waitForTimeout(5000);

    
});
*/
