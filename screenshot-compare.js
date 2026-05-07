const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';

  // Desktop screenshots
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  for (const [name, url] of [
    ['original-home', 'https://lohraspkansara.com/'],
    ['original-about', 'https://lohraspkansara.com/about/'],
    ['original-music', 'https://lohraspkansara.com/music/'],
    ['original-shows', 'https://lohraspkansara.com/shows/'],
    ['original-contact', 'https://lohraspkansara.com/contact/'],
    ['replica-home', 'http://localhost:3000/'],
    ['replica-about', 'http://localhost:3000/about'],
    ['replica-music', 'http://localhost:3000/music'],
    ['replica-shows', 'http://localhost:3000/shows'],
    ['replica-contact', 'http://localhost:3000/contact'],
  ]) {
    const page = await desktop.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${dir}/${name}-desktop.png`, fullPage: true });
    console.log('done ' + name + '-desktop');
    await page.close();
  }
  await desktop.close();

  // Mobile screenshots
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });

  for (const [name, url] of [
    ['original-home', 'https://lohraspkansara.com/'],
    ['original-music', 'https://lohraspkansara.com/music/'],
    ['original-shows', 'https://lohraspkansara.com/shows/'],
    ['replica-home', 'http://localhost:3000/'],
    ['replica-music', 'http://localhost:3000/music'],
    ['replica-shows', 'http://localhost:3000/shows'],
  ]) {
    const page = await mobile.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${dir}/${name}-mobile.png`, fullPage: true });
    console.log('done ' + name + '-mobile');
    await page.close();
  }
  await mobile.close();

  await browser.close();
  console.log('All done!');
})();
