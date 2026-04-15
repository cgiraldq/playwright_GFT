import { setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';
import type { BrowserContext, Page } from '@playwright/test';
import type { SauceDemoPage } from './pages/sauce.page';

setDefaultTimeout(60 * 1000);

export class CustomWorld extends World {
  context?: BrowserContext;
  page?: Page;
  saucePage?: SauceDemoPage;

  constructor(options: any) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
