import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:3000';
test('has title', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create a Cthulhu character/);
});

test('has header', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a h1 "to be visible"
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible();
});

test('has button', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a button "to be visible"
  const button = page.locator('button');
  const buttonContent = await button.textContent();
  await expect(button).toBeVisible();
  await expect(buttonContent).toBe('Create new character');
});

