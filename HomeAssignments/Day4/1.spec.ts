import { test, chromium, firefox } from '@playwright/test';

test('RedBus in Edge and Flipkart in Firefox', async () => {

  // Edge browser (Chromium channel)
  const edgeBrowser = await chromium.launch({
    channel: 'msedge',
    headless: false
  });

  const edgePage = await edgeBrowser.newPage();
  await edgePage.goto('https://www.redbus.in');

  console.log('RedBus Title:', await edgePage.title());
  console.log('RedBus URL:', edgePage.url());


  // Firefox browser
  const firefoxBrowser = await firefox.launch({
    headless: false
  });

  const firefoxPage = await firefoxBrowser.newPage();
  await firefoxPage.goto('https://www.flipkart.com');

  console.log('Flipkart Title:', await firefoxPage.title());
  console.log('Flipkart URL:', firefoxPage.url());


  // Close browsers
  await edgeBrowser.close();
  await firefoxBrowser.close();
});