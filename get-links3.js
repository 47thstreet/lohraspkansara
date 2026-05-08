const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 5000 } });
  const page = await ctx.newPage();
  await page.goto('https://lohraspkansara.com/music/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Get all links on the page and filter for music-related ones
  const links = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.href;
      if (href.includes('spotify') || href.includes('beatport') || href.includes('ffm.to') || href.includes('soundcloud')) {
        const img = a.querySelector('img');
        const alt = img ? (img.alt || img.src.split('/').pop()) : a.textContent.trim().slice(0, 40);
        results.push({ alt, href });
      }
    });
    return results;
  });
  
  const seen = new Set();
  links.forEach(l => {
    if (!seen.has(l.href)) {
      seen.add(l.href);
      console.log(`${(l.alt || '[no text]').padEnd(55)} => ${l.href}`);
    }
  });
  
  console.log('\nTotal unique music links: ' + seen.size);
  await browser.close();
})();
