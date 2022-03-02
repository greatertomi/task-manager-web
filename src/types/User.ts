export interface BaseUser {
  email: string;
}

export interface UserAuth extends BaseUser {
  password: string;
}
