const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  
  const page = await mobile.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 15000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${dir}/fix-home-mobile.png`, fullPage: false });
  
  // Click hamburger
  const hamburger = await page.$('button[aria-label="Toggle menu"]');
  await hamburger.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${dir}/fix-menu-open.png`, fullPage: false });
  
  // Try clicking a menu link
  const aboutLink = await page.$('a[href="/about"]');
  const isVisible = aboutLink ? await aboutLink.isVisible() : false;
  console.log('About link visible after menu open: ' + isVisible);
  
  await page.close();
  await mobile.close();
  await browser.close();
  console.log('DONE');
})();
