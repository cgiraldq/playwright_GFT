export interface UserCredentials {
  username: string;
  password: string;
}

export interface CheckoutData {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export interface ProductData {
  name: string;
  price?: string;
}

export const TEST_USERS: Record<string, UserCredentials> = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  performance: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  },
  error: {
    username: 'error_user',
    password: 'secret_sauce'
  },
  visual: {
    username: 'visual_user',
    password: 'secret_sauce'
  }
};

export const CHECKOUT_DATA: Record<string, CheckoutData> = {
  default: {
    firstName: 'Juan',
    lastName: 'Perez',
    postalCode: '12345'
  },
  alternative: {
    firstName: 'Maria',
    lastName: 'Gonzalez',
    postalCode: '67890'
  }
};

export const PRODUCTS: Record<string, ProductData> = {
  backpack: {
    name: 'Sauce Labs Backpack',
    price: '$29.99'
  },
  bikeLight: {
    name: 'Sauce Labs Bike Light',
    price: '$9.99'
  },
  boltTShirt: {
    name: 'Sauce Labs Bolt T-Shirt',
    price: '$15.99'
  },
  fleeceJacket: {
    name: 'Sauce Labs Fleece Jacket',
    price: '$49.99'
  }
};

export const EXPECTED_MESSAGES = {
  orderConfirmation: 'Thank you for your order!',
  lockedUserError: 'Epic sadface: Sorry, this user has been locked out.',
  productsTitle: 'Products'
};
