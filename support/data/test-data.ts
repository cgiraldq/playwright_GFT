export interface UserCredentials {
  username: string;
  password: string;
}

export const TEST_USERS: Record<string, UserCredentials> = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  }
};

export const EXPECTED_MESSAGES = {
  lockedUserError: 'Epic sadface: Sorry, this user has been locked out.'
};
