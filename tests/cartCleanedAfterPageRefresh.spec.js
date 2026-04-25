import { test, expect } from '@playwright/test';

test('Cart cleaned after page refresh', async ({ page }) => {
  // 1. Open the Coffee Cart menu page
  await page.goto('https://coffee-cart.app/');

  // 2. Click on the "Cappuccino" cup
  await page.getByTestId('Cappuccino').click();

  // 4. Click on the "Cart" link
  await page.getByLabel('Cart page').click();

  // 5. Wait for the URL
  await expect(page).toHaveURL('https://coffee-cart.app/cart');

  // 6. Assert Cappuccino is visible in the cart
  const cappuccinoItem = page.getByRole('listitem').filter({ hasText: 'Cappuccino' }).first();
  await expect(cappuccinoItem).toBeVisible();

  // 7. Reload the page
  await page.reload();

  // 8. Assert Cappuccino is NOT visible
  await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toHaveCount(0);

  // 9. Assert empty cart message
  await expect(page.getByText('No coffee, go add some')).toBeVisible();
});