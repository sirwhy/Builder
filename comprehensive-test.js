const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Starting comprehensive website testing...\n');
  
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const pages = [
    { name: 'Home', url: 'https://builderer.vercel.app/', screenshot: 'screenshot-home.png' },
    { name: 'Browse', url: 'https://builderer.vercel.app/browse', screenshot: 'screenshot-browse.png' },
    { name: 'Latest', url: 'https://builderer.vercel.app/latest', screenshot: 'screenshot-latest.png' },
    { name: 'Series (Solo Leveling)', url: 'https://builderer.vercel.app/series/1', screenshot: 'screenshot-series.png' },
    { name: 'Reader', url: 'https://builderer.vercel.app/read?series=1&chapter=1', screenshot: 'screenshot-reader.png' },
  ];
  
  let results = [];
  
  for (const pageConfig of pages) {
    console.log(`\n📄 Testing ${pageConfig.name}...`);
    console.log(`URL: ${pageConfig.url}`);
    
    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 }
    });
    
    try {
      // Load page
      console.log('⏳ Loading...');
      await page.goto(pageConfig.url, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      console.log('✅ Page loaded');
      
      // Take screenshot
      await page.screenshot({
        path: `/root/.openclaw/workspace/shinigami-reader/${pageConfig.screenshot}`,
        fullPage: true
      });
      console.log(`✅ Screenshot saved: ${pageConfig.screenshot}`);
      
      // Get page metrics
      const title = await page.title();
      const heroCount = await page.locator('h1,h2,h3').count();
      const buttonCount = await page.locator('button,a').filter({ hasText: /browse|read|latest|popular|login|sign up/i }).count();
      const cardCount = await page.locator('a[href^="/series/"]').count();
      
      // Check for common issues
      const missingHero = heroCount === 0;
      const missingContent = cardCount === 0;
      
      results.push({
        page: pageConfig.name,
        status: 'OK',
        title,
        heroElements: heroCount,
        interactiveElements: buttonCount,
        seriesCards: cardCount,
        issues: []
      });
      
      if (missingHero) {
        results[results.length - 1].issues.push('Missing hero section');
      }
      if (missingContent) {
        results[results.length - 1].issues.push('No series cards displayed');
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      results.push({
        page: pageConfig.name,
        status: 'ERROR',
        error: error.message,
        issues: [`Load failed: ${error.message}`]
      });
    }
    
    await page.close();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Print summary
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 WEBSITE TESTING SUMMARY');
  console.log('='.repeat(60));
  
  results.forEach((result, index) => {
    console.log(`\n${index + 1}. ${result.page.toUpperCase()}`);
    console.log(`   Status: ${result.status}`);
    console.log(`   Title: ${result.title}`);
    console.log(`   Hero Elements: ${result.heroElements}`);
    console.log(`   Interactive Elements: ${result.interactiveElements}`);
    console.log(`   Series Cards: ${result.seriesCards}`);
    if (result.issues.length > 0) {
      console.log(`   Issues: ${result.issues.join(', ')}`);
    }
  });
  
  await browser.close();
  console.log('\n✅ Testing complete!');
})();
