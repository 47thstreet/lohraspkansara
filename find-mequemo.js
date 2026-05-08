const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('https://www.beatport.com/search?q=me+quemo+lohrasp+kansara', { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).filter(a => 
      a.href.includes('/track/') || a.href.includes('/release/')
    ).map(a => ({ text: a.textContent.trim().slice(0,60), href: a.href }));
  });
  
  links.forEach(l => console.log(l.text + ' => ' + l.href));
  if (links.length === 0) console.log('No track/release links found');
  
  await browser.close();
})();
