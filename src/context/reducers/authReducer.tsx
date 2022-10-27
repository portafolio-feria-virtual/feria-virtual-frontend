import { IAuthState, ILogin, IUser } from '../../interfaces';

type AuthAction =
  | { type: 'LOGIN'; payload: ILogin }
  | { type: 'REGISTER'; payload: IUser }
  | { type: 'LOGOUT' }
  | { type: 'GET_USER'; payload: IUser }
  | { type: 'ERROR'; payload: string };

export const authReducer = (state: IAuthState, actions: AuthAction) => {
  switch (actions.type) {
    case 'LOGIN':
      return {
        ...state,
        user: actions.payload
      };

    case 'REGISTER':
      return {
        ...state,
        user: actions.payload
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null
      };

    case 'GET_USER':
      return {
        ...state,
        user: actions.payload
      };

    case 'ERROR':
      return {
        ...state,
        error: actions.payload
      };

    default:
      return state;
  }
};
