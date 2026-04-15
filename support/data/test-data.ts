export interface UserCredentials {
  username: string;
  password: string;
}

export const TEST_USERS: Record<string, UserCredentials> = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  }
};
