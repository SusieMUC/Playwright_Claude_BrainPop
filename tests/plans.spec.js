const { test, expect } = require('@playwright/test');

test.describe('plans page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/discover/plans');
  });

  test('shows the plans overview heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /plans for teachers, schools, and districts/i })).toBeVisible();
  });

  test('surfaces a demo/contact-sales CTA', async ({ page }) => {
    await expect(page.getByRole('link', { name: /request a demo|contact sales/i }).first()).toBeVisible();
  });

  test('has an FAQ section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible();
  });
});
