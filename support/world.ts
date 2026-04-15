import { setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30 * 1000);

export class CustomWorld extends World {}

setWorldConstructor(CustomWorld);
