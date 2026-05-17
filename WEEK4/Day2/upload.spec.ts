import { test } from "@playwright/test";
import path from "path";

test("Learn to upload file input tag",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
const uploadfile= page.locator('[id="file-upload"]')
uploadfile.setInputFiles(path.join(__dirname,"../../Data/Absolute.png"))

await page.waitForTimeout(3000)


})

test.only("Learn to upload file without input tag",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
const filePromise=page.waitForEvent("filechooser");
page.locator('[id="drag-drop-upload"]').click();
const fileupload= await filePromise
await fileupload.setFiles(path.join(__dirname,"../../Data/Absolute.png"))
await page.waitForTimeout(3000)

})