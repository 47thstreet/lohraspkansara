const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('https://lohraspkansara.com/music/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Get all album image links
  const links = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('a').forEach(a => {
      const img = a.querySelector('img');
      if (img && img.src.includes('wp-content/uploads')) {
        results.push({
          alt: img.alt || '[no alt]',
          src: img.src.split('/').pop(),
          href: a.href
        });
      }
    });
    return results;
  });
  
  links.forEach(l => console.log(`${l.alt.padEnd(45)} => ${l.href}`));
  await browser.close();
})();
