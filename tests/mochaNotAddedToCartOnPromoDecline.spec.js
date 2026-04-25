import { test, expect } from '@playwright/test';

test('Discounted Mocha NOT added to the Cart after promo rejecting', async ({
  page,
}) => {
  // 1. Open the Coffee Cart menu page
  await page.goto('https://coffee-cart.app/', {
    waitUntil: 'domcontentloaded'
  });

  // 2. Click on the "Cappuccino" cup
  await page.getByTestId('Cappuccino').click();

  // 3. Click on the "Espresso" cup
  await page.getByTestId('Espresso').click();

  // 4. Click on the "Americano" cup
  await page.getByTestId('Americano').click();

  // 5. Assert promo message
  const promoMessage = page.getByText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
  await expect(promoMessage).toBeVisible();

  // 6. Click "Nah, I'll skip."
  await page.getByRole('button', { name: "Nah, I'll skip." }).click();

  // 7. Click on the "Cart" link
  await page.getByLabel('Cart page').click();

  // 8. Wait for the URL
  await expect(page).toHaveURL('https://coffee-cart.app/cart');

  // ---------- ESPRESSO ----------
  const espressoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Espresso' });

  await expect(espressoItem).toBeVisible();

  // ---------- MOCHA (NÃO DEVE EXISTIR) ----------
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Mocha' })
  ).toHaveCount(0);

  // ---------- CAPPUCCINO ----------
  const cappuccinoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Cappuccino' });

  await expect(cappuccinoItem).toBeVisible();

  // ---------- AMERICANO ----------
  const americanoItem = page
    .getByRole('listitem')
    .filter({ hasText: 'Americano' });

  await expect(americanoItem).toBeVisible();
});