const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://coffee-cart.app/');
  await page.waitForTimeout(1000);
  await page.waitForSelector('[data-testid="Cappuccino"]', { timeout: 10000 });
  await page.getByTestId('Cappuccino').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Cart page').click();
  await page.waitForURL('**/cart', { timeout: 10000 });
  console.log('URL', page.url());
  const items = await page.locator('li').elementHandles();
  console.log('li count', items.length);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = await item.innerText();
    const dataTestId = await item.getAttribute('data-testid');
    console.log(i, JSON.stringify(text.trim()), 'data-testid:', dataTestId);
  }
  await browser.close();
})();
