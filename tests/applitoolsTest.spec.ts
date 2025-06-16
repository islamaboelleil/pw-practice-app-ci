import { test } from '@playwright/test';
import { Eyes, VisualGridRunner, Configuration, BrowserType, Target } from '@applitools/eyes-playwright';

test('Applitools VisualTest', async ({ page }) => {
  // Set up Applitools
  const runner = new VisualGridRunner({ testConcurrency: 1 });
  const eyes = new Eyes(runner);

  // Configure Applitools
  const configuration = new Configuration();
  configuration.setApiKey('YOUR_APPLITOOLS_API_KEY'); // Set your real key here
  configuration.setAppName('Demo App');
  configuration.setTestName('VisualTest');
  configuration.addBrowser(1024, 768, BrowserType.CHROME); // You can add more if needed
  eyes.setConfiguration(configuration);

  // Start Applitools visual testing
  await eyes.open(page);

  await page.goto('http://localhost:59488/');
  await eyes.check('Home Page', Target.window());

  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
  await eyes.check('Form Layouts Page', Target.window());

  // Close Eyes session
  await eyes.close();
});
