const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  
  const page = await mobile.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 15000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${dir}/bug-home-mobile.png`, fullPage: false });
  console.log('OK home');
  
  // Try clicking hamburger
  const hamburger = await page.$('button[aria-label="Toggle menu"]');
  if (hamburger) {
    await hamburger.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${dir}/bug-menu-open.png`, fullPage: false });
    console.log('OK menu open');
  } else {
    console.log('NO hamburger found');
  }
  
  await page.close();
  await mobile.close();
  
  // Desktop check social position
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dp = await desktop.newPage();
  await dp.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 15000 });
  await dp.waitForTimeout(3000);
  await dp.screenshot({ path: `${dir}/bug-home-desktop.png`, fullPage: false });
  console.log('OK desktop');
  await dp.close();
  await desktop.close();
  
  await browser.close();
  console.log('DONE');
})();
