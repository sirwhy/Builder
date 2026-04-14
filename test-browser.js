const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Starting browser automation...');
  
  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Create page
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });
  
  // Navigate to website
  console.log('🌐 Loading website...');
  await page.goto('https://builderer.vercel.app/', {
    waitUntil: 'networkidle',
    timeout: 30000
  });
  
  console.log('✅ Page loaded successfully!');
  
  // Take screenshot
  console.log('📸 Taking screenshot...');
  await page.screenshot({
    path: '/root/.openclaw/workspace/shinigami-reader/screenshot-home.png',
    fullPage: true
  });
  console.log('✅ Screenshot saved to /root/.openclaw/workspace/shinigami-reader/screenshot-home.png');
  
  // Get page info
  const title = await page.title();
  console.log('📄 Page title:', title);
  
  // Check if elements exist
  const hasHero = await page.locator('h1').first().count() > 0;
  console.log('📋 Hero section exists:', hasHero);
  
  const hasCards = await page.locator('a[href^="/series/"]').count();
  console.log('📋 Series cards:', hasCards);
  
  // Close browser
  await browser.close();
  console.log('✅ Browser automation complete!');
})();
