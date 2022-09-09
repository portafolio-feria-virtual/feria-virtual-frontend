export interface IUserRegister {
  name?: string | undefined;
  lastname?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  phone?: string | undefined;
  country?: string | undefined;
  rut?: string | undefined;
  docNumber?: string | undefined;
  businessName?: string | undefined;
  productType?: string | undefined;
  capacity?: string | undefined;
  size?: string | undefined;
  cooling?: boolean | undefined;
  password?: string | undefined;
}

export interface IRegister extends IUserRegister {
  confirmPassword?: string | undefined;
  terms?: boolean | undefined;
}

export interface ILogin {
  email: string;
  password: string;
}
