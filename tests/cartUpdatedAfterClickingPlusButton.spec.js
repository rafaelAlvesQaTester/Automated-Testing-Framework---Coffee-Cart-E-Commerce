import { test, expect } from '@playwright/test';

test('Cart updated after clicking plus for drinks', async ({ page }) => {
  // 1. Open the Coffee Cart menu page (CORRIGIDO)
  await page.goto('https://coffee-cart.app/', {
    waitUntil: 'domcontentloaded'
  });

  // 2. Click on the "Cappuccino" cup
  await page.getByTestId('Cappuccino').click();

  // 3. Click on the "Espresso" cup
  await page.getByTestId('Espresso').click();

  // 4. Click on the "Cart" link
  await page.getByLabel('Cart page').click();

  // 5. Wait for the URL
  await expect(page).toHaveURL('https://coffee-cart.app/cart');

  // ---------- ESPRESSO ----------
  const espressoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Espresso' });

  // 6. Assert Total Cost for Espresso is '$10.00'
  await expect(espressoItem).toContainText('$10.00');

  // 7. Click + for Espresso (CORRIGIDO)
  await espressoItem.locator('button').filter({ hasText: '+' }).click();

  // 8. Assert that Total Cost for Espresso is '$20.00'
  await expect(espressoItem).toContainText('$20.00');

  // ---------- CAPPUCCINO ----------
  const cappuccinoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Cappuccino' });

  // 9. Assert Total Cost for Cappuccino is '$19.00'
  await expect(cappuccinoItem).toContainText('$19.00');

  // 10. Click + for Cappuccino (CORRIGIDO)
  await cappuccinoItem.locator('button').filter({ hasText: '+' }).click();

  // 11. Assert Total Cost for Cappuccino is '$38.00'
  await expect(cappuccinoItem).toContainText('$38.00');

  // 12. Assert the Total cost of the Cart is $58.00
  await expect(page.locator('text=Total:')).toContainText('$58.00');
});