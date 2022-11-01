export interface User {
  userName: string,
  email: string,
  password: string,
  mobile: number
}

export interface UserCredential {
  username?: string,
  password?: string,
  token?: string
}

export class UserRegister{
  username: string;
  password: string;
}
