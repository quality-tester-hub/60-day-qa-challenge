import { test, expect } from '@playwright/test';

test('notification message is rendered', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/notification-message-rendered');
  await page.getByRole('link', { name: 'Click here' }).click();

  await expect(page.locator('#flash')).toContainText(/Action (successful|unsuccessful)/);
});
