import {test ,expect } from "@playwright/test";

test('Learn Asertions in playwright',async ({page}) => {
    

    await page.goto('https://leaftaps.com/opentaps/control/main');

    // const textBoxStatus = await (page.locator('#username')).isEditable()

   // await expect.soft(page.locator('#username')).toBeDisabled({timeout:8000}); // Locator based assertion// keyword for asserting a locator or value


    const title = await page.title() // This is the method to retreive the title of a page

    console.log(`The title of the page is ${title}`);

    expect.soft(title).toBe("Leaftaps - TestLeaf Automation Platform"); // Negative testing 
    

    await page.locator('#username').fill('democsr2',{timeout:5000}); // action timeout

    await page.locator('#password').fill('crmsfa')



    await page.waitForTimeout(3000)

    
})

