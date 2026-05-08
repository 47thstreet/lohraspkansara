const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const dir = '/home/tbp-3500tb/lohraspkansara/screenshots';
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  
  // Home - check social icons visible
  const p1 = await mobile.newPage();
  await p1.goto('https://lohraspkansara.vercel.app/', { waitUntil: 'load', timeout: 30000 });
  await p1.waitForTimeout(3000);
  await p1.screenshot({ path: `${dir}/live-mobile-home.png`, fullPage: false });
  console.log('OK home');
  
  // Open hamburger
  const btn = await p1.$('button[aria-label="Toggle menu"]');
  await btn.click();
  await p1.waitForTimeout(500);
  await p1.screenshot({ path: `${dir}/live-mobile-menu.png`, fullPage: false });
  
  // Click About to verify navigation works
  const aboutLink = await p1.$('a[href="/about"]');
  await aboutLink.click();
  await p1.waitForTimeout(2000);
  await p1.screenshot({ path: `${dir}/live-mobile-about.png`, fullPage: false });
  console.log('OK about nav');
  
  await p1.close();
  
  // Music page mobile
  const p2 = await mobile.newPage();
  await p2.goto('https://lohraspkansara.vercel.app/music', { waitUntil: 'load', timeout: 30000 });
  await p2.waitForTimeout(3000);
  await p2.screenshot({ path: `${dir}/live-mobile-music.png`, fullPage: false });
  console.log('OK music');
  await p2.close();
  
  await mobile.close();
  await browser.close();
  console.log('ALL DONE');
})();
