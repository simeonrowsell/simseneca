import { test, expect } from '@playwright/test';

// Check mobile navigation opens and closes correctly
test('mobile nav toggle', async ({page}) => {
  await page.goto('http://localhost:4321/');

  // Make sure we're on mobile
  await page.setViewportSize({
    width: 300,
    height: 600,
  });

  // Check it opens
  await page.getByTestId('open-mobile-nav').click();  
  await expect(page.getByTestId('mobile-nav')).toBeVisible();

  // Check it closes
  await page.getByTestId('close-mobile-nav').click();
  await expect(page.getByTestId('mobile-nav')).not.toBeVisible();
});