const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('https://lohraspkansara.com/music/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Scroll down to load all images
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.scrollBy(0, 500);
      await new Promise(r => setTimeout(r, 300));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);
  
  // Get ALL links that wrap images
  const links = await page.evaluate(() => {
    const results = [];
    // Check all elementor widget image links
    document.querySelectorAll('.elementor-widget-image a, a img').forEach(el => {
      let a, img;
      if (el.tagName === 'A') {
        a = el;
        img = el.querySelector('img');
      } else {
        img = el;
        a = el.closest('a');
      }
      if (a && img) {
        const alt = img.alt || img.src.split('/').pop();
        results.push({ alt: alt.slice(0, 50), href: a.href });
      }
    });
    return results;
  });
  
  // Deduplicate
  const seen = new Set();
  links.forEach(l => {
    const key = l.alt + l.href;
    if (!seen.has(key)) {
      seen.add(key);
      console.log(`${l.alt.padEnd(52)} => ${l.href}`);
    }
  });
  
  console.log('\nTotal: ' + links.length);
  await browser.close();
})();
