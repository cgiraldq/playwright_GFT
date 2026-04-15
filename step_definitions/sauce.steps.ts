import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { SauceDemoPage } from '../support/pages/sauce.page';
import { TEST_USERS, CHECKOUT_DATA, PRODUCTS, EXPECTED_MESSAGES } from '../support/data/test-data';

Given('que estoy en la página de login de SauceDemo', async function (this: CustomWorld) {
  if (!this.page) throw new Error('Page no inicializada');

  this.saucePage = new SauceDemoPage(this.page);
  await this.saucePage.gotoLogin();
});

When('ingreso con usuario {string} y contraseña por defecto', async function (this: CustomWorld, userKey: string) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  const user = TEST_USERS[userKey as keyof typeof TEST_USERS];
  if (!user) throw new Error(`Usuario '${userKey}' no encontrado en datos de test`);

  await this.saucePage.login(user.username, user.password);
});

Then('debería ver el catálogo de productos', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await this.saucePage.waitForInventory();
  await expect(this.saucePage.productTitle).toBeVisible();
});

When('agrego el producto {string} al carrito', async function (this: CustomWorld, productKey: string) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  const product = PRODUCTS[productKey as keyof typeof PRODUCTS];
  if (!product) throw new Error(`Producto '${productKey}' no encontrado en datos de test`);

  await this.saucePage.addProductToCartByName(product.name);
});

When('agrego el primer producto al carrito', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await this.saucePage.addFirstProductToCart();
});

Then('el carrito debería tener {int} producto', async function (this: CustomWorld, quantity: number) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  const count = await this.saucePage.getCartItemCount();
  await expect(count).toBe(quantity);
});

When('voy al carrito', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await this.saucePage.goToCart();
});

When('procedo al checkout', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await this.saucePage.startCheckout();
});

When('completo el formulario con datos de {string}', async function (this: CustomWorld, checkoutKey: string) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  const checkout = CHECKOUT_DATA[checkoutKey as keyof typeof CHECKOUT_DATA];
  if (!checkout) throw new Error(`Datos de checkout '${checkoutKey}' no encontrados en datos de test`);

  await this.saucePage.fillCheckoutInformation(checkout.firstName, checkout.lastName, checkout.postalCode);
});

When('finalizo la compra', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await this.saucePage.finishCheckout();
});

Then('debería ver el mensaje de confirmación de orden', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await expect(this.saucePage.orderConfirmation).toHaveText(EXPECTED_MESSAGES.orderConfirmation);
});

Then('debería ver el mensaje de error de usuario bloqueado', async function (this: CustomWorld) {
  if (!this.saucePage) throw new Error('Sauce page no inicializada');

  await expect(this.saucePage.errorMessage).toHaveText(EXPECTED_MESSAGES.lockedUserError);
});
