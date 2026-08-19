const { test, expect } = require('@playwright/test');

test.describe('login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login/');
  });

  test('renders username, password, and submit controls', async ({ page }) => {
    await expect(page.locator('input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  });

  test('offers a "Join by Code" path for students', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Join by Code' })).toBeVisible();
  });

  test('rejects an empty submission without navigating away', async ({ page }) => {
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page).toHaveURL(/\/login\/?/);
  });

  test('rejects invalid credentials with an error message', async ({ page }) => {
    await page.locator('input[type="text"]').first().fill('not-a-real-user@example.com');
    await page.locator('input[type="password"]').first().fill('wrong-password');
    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page.getByText('The username and password did not match.')).toBeVisible({ timeout: 10000 });
  });
});
