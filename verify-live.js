const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  for (const [name, url] of [
    ['live-home', 'https://lohraspkansara.vercel.app/'],
    ['live-music', 'https://lohraspkansara.vercel.app/music'],
    ['live-contact', 'https://lohraspkansara.vercel.app/contact'],
  ]) {
    const page = await desktop.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${dir}/${name}-final.png`, fullPage: true });
    console.log('OK ' + name);
    await page.close();
  }
  await desktop.close();
  await browser.close();
  console.log('DONE');
})();
