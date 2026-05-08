const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const pages = ['/', '/about', '/music', '/shows', '/contact'];
  const allLinks = new Map();
  const brokenImages = [];

  for (const path of pages) {
    const page = await ctx.newPage();
    await page.goto('http://localhost:3000' + path, { waitUntil: 'load', timeout: 15000 });
    await page.waitForTimeout(2000);

    // Check all links
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href]')).map(a => ({
        href: a.href,
        text: a.textContent?.trim().slice(0, 40) || a.getAttribute('aria-label') || '[no text]'
      }));
    });
    links.forEach(l => {
      if (!allLinks.has(l.href)) allLinks.set(l.href, { text: l.text, page: path });
    });

    // Check all images loaded
    const imgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        loaded: img.complete && img.naturalWidth > 0,
        alt: img.alt
      }));
    });
    imgs.filter(i => !i.loaded).forEach(i => brokenImages.push({ ...i, page: path }));

    await page.close();
  }

  // Check internal links
  console.log('=== INTERNAL LINKS ===');
  for (const [href, info] of allLinks) {
    if (href.startsWith('http://localhost:3000')) {
      const page = await ctx.newPage();
      try {
        const resp = await page.goto(href, { timeout: 10000 });
        const status = resp?.status() || 0;
        if (status >= 400) console.log('BROKEN ' + status + ': ' + href + ' (from ' + info.page + ')');
        else console.log('OK: ' + href.replace('http://localhost:3000', ''));
      } catch(e) {
        console.log('ERROR: ' + href);
      }
      await page.close();
    }
  }

  // External links
  console.log('\n=== EXTERNAL LINKS (' + [...allLinks].filter(([h]) => !h.startsWith('http://localhost')).length + ' total) ===');
  for (const [href, info] of allLinks) {
    if (!href.startsWith('http://localhost')) {
      console.log(info.text.padEnd(25) + ' => ' + href);
    }
  }

  // Broken images
  console.log('\n=== BROKEN IMAGES ===');
  if (brokenImages.length === 0) console.log('None!');
  else brokenImages.forEach(i => console.log('BROKEN: ' + i.src + ' on ' + i.page));

  await browser.close();
})();
