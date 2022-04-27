export interface BaseUser {
  email: string;
}

export interface UserAuth extends BaseUser {
  password: string;
}

export interface User extends UserAuth {
  firstName: string;
  lastName: string;
}

export type LoginSuccess = {
  token: string;
  user: User;
};
