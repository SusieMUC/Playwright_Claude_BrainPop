const { test, expect } = require('@playwright/test');

test('homepage loads and shows BrainPOP branding', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/BrainPOP/i);
});

test('nav bar exposes core subject links', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('a[href*="brainpop.com"]:visible').first()).toBeVisible();
});

test('header links to login and plans', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Log In', exact: true }).first()).toHaveAttribute('href', /\/login\/?$/);
  await expect(page.getByRole('link', { name: 'Plans', exact: true }).first()).toHaveAttribute('href', /\/discover\/plans/);
});

test('footer lists the BrainPOP product family', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer.getByRole('link', { name: 'BrainPOP Jr.' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'BrainPOP Science' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'BrainPOP ELL' })).toBeVisible();
});
