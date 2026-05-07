const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  for (const [name, url] of [
    ['replica-home', 'http://localhost:3000/'],
    ['replica-about', 'http://localhost:3000/about'],
    ['replica-music', 'http://localhost:3000/music'],
    ['replica-shows', 'http://localhost:3000/shows'],
    ['replica-contact', 'http://localhost:3000/contact'],
  ]) {
    const page = await desktop.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `${dir}/${name}-desktop-v2.png`, fullPage: true });
    console.log('OK ' + name);
    await page.close();
  }
  await desktop.close();
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  for (const [name, url] of [
    ['replica-home', 'http://localhost:3000/'],
    ['replica-about', 'http://localhost:3000/about'],
    ['replica-contact', 'http://localhost:3000/contact'],
  ]) {
    const page = await mobile.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `${dir}/${name}-mobile-v2.png`, fullPage: true });
    console.log('OK ' + name + '-mobile');
    await page.close();
  }
  await mobile.close();
  await browser.close();
  console.log('DONE');
})();
