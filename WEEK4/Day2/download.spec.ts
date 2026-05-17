import { test } from "@playwright/test";
import path from "path";

test("Learn to handle download button",async ({page}) => {

    await page.goto("https://leafground.com/file.xhtml");

    const filePromise = page.waitForEvent("download") // Here we are asking playwright to listen to the downloaded file action

    await page.locator('//span[text()="Download"]').click();

    const fDown = await filePromise // resolving the download action after click action


 //   await fDown.saveAs('Data/PWApr26.png'); // Relative Path


   // await fDown.saveAs(path.join(__dirname,"../../Data/Absolute.png"))


await fDown.saveAs(path.join(__dirname, "../../Data", fDown.suggestedFilename()));


    
    await page.waitForTimeout(3000)
    
})