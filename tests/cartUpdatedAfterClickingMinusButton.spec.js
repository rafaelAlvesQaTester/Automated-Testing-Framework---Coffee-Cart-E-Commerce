import { test, expect } from '@playwright/test';

test('Cart updated after clicking minus for drinks', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  await page.getByTestId('Cappuccino').click();
  await page.getByTestId('Espresso').click();

  await page.getByLabel('Cart page').click();
  await expect(page).toHaveURL('https://coffee-cart.app/cart');

  // Espresso
  const espressoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Espresso' });

  await expect(espressoItem).toBeVisible();

  // 🔥 Correção aqui
  await espressoItem.locator('button').filter({ hasText: '-' }).click();

  await expect(
    page.getByRole('listitem').filter({ hasText: 'Espresso' })
  ).toHaveCount(0);

  // Cappuccino
  const cappuccinoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Cappuccino' });

  await expect(cappuccinoItem).toBeVisible();

  // 🔥 Correção aqui também
  await cappuccinoItem.locator('button').filter({ hasText: '-' }).click();

  await expect(
    page.getByRole('listitem').filter({ hasText: 'Cappuccino' })
  ).toHaveCount(0);

  await expect(page.getByText('No coffee, go add some')).toBeVisible();
});