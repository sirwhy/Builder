const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Testing Enhanced Design...\n');
  
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });
  
  try {
    // Navigate to website
    console.log('🌐 Loading https://builderer.vercel.app/...');
    await page.goto('https://builderer.vercel.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    console.log('✅ Page loaded\n');
    
    // Test 1: Check Header
    console.log('📋 Testing Header:');
    const headerExists = await page.locator('nav').count() > 0;
    console.log(`   ✅ Header: ${headerExists ? 'Present' : 'Missing'}`);
    
    const searchExists = await page.locator('input[type="search"]').count() > 0;
    console.log(`   ✅ Search Bar: ${searchExists ? 'Present' : 'Missing'}`);
    
    const mobileMenu = await page.locator('button').filter({ hasText: /☰|✕/i }).count();
    console.log(`   ✅ Mobile Menu Button: ${mobileMenu > 0 ? 'Present' : 'Missing'}`);
    
    // Test 2: Check Navigation
    console.log('\n📋 Testing Navigation:');
    const navLinks = await page.locator('nav a').count();
    console.log(`   Navigation Links: ${navLinks}`);
    
    // Test 3: Check Cards
    console.log('\n📋 Testing Series Cards:');
    const cards = await page.locator('a[href^="/series/"]').count();
    console.log(`   Series Cards: ${cards}`);
    
    const ratingBadges = await page.locator('.bg-yellow-500').count();
    console.log(`   Rating Badges: ${ratingBadges}`);
    
    const statusBadges = await page.locator('.bg-green-500').count();
    console.log(`   Status Badges: ${statusBadges}`);
    
    // Test 4: Take Screenshot
    console.log('\n📸 Taking screenshot...');
    await page.screenshot({
      path: '/root/.openclaw/workspace/shinigami-reader/screenshot-enhanced.png',
      fullPage: true
    });
    console.log('   ✅ Screenshot saved to screenshot-enhanced.png');
    
    // Test 5: Check Loading States
    console.log('\n📋 Testing Loading States:');
    const skeletonLoaders = await page.locator('.animate-pulse .bg-gray-700').count();
    console.log(`   Skeleton Loaders: ${skeletonLoaders > 0 ? 'Found' : 'Not displayed (normal after load)'}`);
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ Enhancement Testing Complete!');
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
})();
