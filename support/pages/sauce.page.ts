import type { Locator, Page } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly productTitle: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly orderConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.productTitle = page.locator('.title');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.orderConfirmation = page.locator('.complete-header');
  }

  async gotoLogin() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async waitForInventory() {
    await this.page.waitForURL(/.*inventory.html$/);
    await this.productTitle.waitFor({ state: 'visible' });
  }

  async addProductToCartByName(productName: string) {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName });
    await product.locator('button').first().click();
  }

  async addFirstProductToCart() {
    await this.page.locator('.inventory_item button.btn_primary').first().click();
  }

  async getCartItemCount(): Promise<number> {
    if (!(await this.cartBadge.count())) {
      return 0;
    }

    const text = await this.cartBadge.textContent();
    return Number(text?.trim() ?? 0);
  }

  async goToCart() {
    await this.cartLink.click();
    await this.page.waitForURL(/.*cart.html$/);
  }

  async startCheckout() {
    await this.checkoutButton.click();
    await this.page.waitForURL(/.*checkout-step-one.html$/);
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
    await this.page.waitForURL(/.*checkout-step-two.html$/);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await this.page.waitForURL(/.*checkout-complete.html$/);
  }
}
