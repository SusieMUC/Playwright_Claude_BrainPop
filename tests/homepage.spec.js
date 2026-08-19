const { test, expect } = require('@playwright/test');

test('homepage loads and shows BrainPOP branding', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/BrainPOP/i);
});

test('nav bar exposes core subject links', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('a[href*="brainpop.com"]:visible').first()).toBeVisible();
});
