import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import * as fs from 'fs';
import * as path from 'path';

const reportsDir = path.join(process.cwd(), 'reports');
const videosDir = path.join(reportsDir, 'videos');
const screenshotsDir = path.join(reportsDir, 'screenshots');

function ensureDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

Before(async function (this: CustomWorld) {
  ensureDirectory(videosDir);
  ensureDirectory(screenshotsDir);

  const browser = await chromium.launch({
    headless: process.env.HEADLESS?.toLowerCase() !== 'false',
    slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
  });

  const context = await browser.newContext({
    recordVideo: { dir: videosDir },
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();
  context.setDefaultNavigationTimeout(60 * 1000);
  page.setDefaultNavigationTimeout(60 * 1000);

  this.context = context;
  this.page = page;
});

After(async function (this: CustomWorld, { result, pickle }) {
  if (result?.status === 'FAILED' && this.page) {
    try {
      await this.page.waitForLoadState('networkidle').catch(() => {});
      await new Promise(resolve => setTimeout(resolve, 500));
      const screenshot = await this.page.screenshot();
      const scenarioName = pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const timestamp = Date.now();
      const fileName = `${scenarioName}_${timestamp}.png`;
      const filePath = path.join(screenshotsDir, fileName);
      fs.writeFileSync(filePath, screenshot);
      await this.attach(screenshot, 'image/png');
    } catch (error) {
      console.error('Error capturando screenshot:', error);
    }
  }

  if (this.context) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.context.close();
  }
});
