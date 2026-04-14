const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Testing current design...\n');
  
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });
  
  try {
    console.log('🌐 Loading https://builderer.vercel.app/...');
    await page.goto('https://builderer.vercel.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    console.log('✅ Page loaded\n');
    
    // Take full page screenshot
    await page.screenshot({
      path: '/root/.openclaw/workspace/shinigami-reader/screenshot-current.png',
      fullPage: true
    });
    console.log('✅ Screenshot saved to screenshot-current.png\n');
    
    // Check page structure
    console.log('📋 Page Analysis:');
    
    // Header
    const header = await page.locator('nav').count();
    console.log(`   Header: ${header > 0 ? '✅ Present' : '❌ Missing'}`);
    
    // Hero section
    const hero = await page.locator('section.relative').first().count();
    console.log(`   Hero Section: ${hero > 0 ? '✅ Present' : '❌ Missing'}`);
    
    // Check for content
    const h1 = await page.locator('h1').first().count();
    console.log(`   Headings: ${h1} found`);
    
    const cards = await page.locator('a[href^="/series/"]').count();
    console.log(`   Series Cards: ${cards} found`);
    
    // Check if gradients are rendering
    const gradientEls = await page.locator('.bg-gradient-to-br').count();
    console.log(`   Gradient Elements: ${gradientEls} found`);
    
    console.log('\n✅ Testing complete!\n');
    console.log('📸 Screenshots:');
    console.log('   - screenshot-current.png (full page)');
    console.log('\nPlease check the screenshot and tell me what looks wrong:');
    console.log('1. Colors are wrong?');
    console.log('2. Spacing is off?');
    console.log('3. Typography is bad?');
    console.log('4. Elements not aligned?');
    console.log('5. Images missing?');
    console.log('6. Overall design looks unprofessional?');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
})();
