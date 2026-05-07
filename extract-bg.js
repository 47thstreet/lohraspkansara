const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  
  const allBgImages = new Set();
  
  for (const url of [
    'https://lohraspkansara.com/',
    'https://lohraspkansara.com/about/',
    'https://lohraspkansara.com/music/',
    'https://lohraspkansara.com/shows/',
    'https://lohraspkansara.com/contact/',
  ]) {
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    // Extract all background images from computed styles
    const bgImages = await page.evaluate(() => {
      const images = [];
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;
        if (bg && bg !== 'none') {
          const matches = bg.match(/url\(["']?(.*?)["']?\)/g);
          if (matches) {
            matches.forEach(m => {
              const url = m.replace(/url\(["']?/, '').replace(/["']?\)/, '');
              images.push({ url, tag: el.tagName, classes: el.className });
            });
          }
        }
      });
      // Also get all img src that might be photos (not album art)
      document.querySelectorAll('img').forEach(img => {
        images.push({ url: img.src, tag: 'IMG', classes: img.className, alt: img.alt });
      });
      // Check for video elements
      document.querySelectorAll('video source, video').forEach(v => {
        if (v.src) images.push({ url: v.src, tag: 'VIDEO', classes: '' });
      });
      return images;
    });
    
    bgImages.forEach(img => {
      if (img.url && img.url.includes('wp-content') && !img.url.includes('logo')) {
        allBgImages.add(JSON.stringify(img));
      }
    });
    
    console.log(`[${url}] found ${bgImages.length} image refs`);
    await page.close();
  }
  
  console.log('\n=== UNIQUE BACKGROUND/PHOTOS (non-logo) ===');
  allBgImages.forEach(img => console.log(JSON.parse(img)));
  
  await browser.close();
})();
