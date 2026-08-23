const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:4321/hikes', { waitUntil: 'networkidle' });
  const section = await page.$('.la-map-section');
  if (section) {
    await section.screenshot({ path: '/tmp/hikes-map-before.png' });
  } else {
    await page.screenshot({ path: '/tmp/hikes-map-before.png', fullPage: true });
  }
  await browser.close();
})();
