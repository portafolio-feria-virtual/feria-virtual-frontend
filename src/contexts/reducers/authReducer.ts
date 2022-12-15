import { IAuthstate, AuthActions } from '../../interfaces/auth.interface';

export const INITIAL_STATE: IAuthstate = {
  user: null,
  csrfToken: null,
  status: null,
  isAuthenticated: false,
  loading: true,
  error: null
};

export const authReducer = (state: IAuthstate, action: AuthActions) => {
  switch (action.type) {
    case 'SET_CSRF':
      return {
        ...state,
        csrfToken: action.payload
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false
      };

    case 'SIGNIN':
      return {
        ...state,
        status: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };

    case 'SIGNUP':
      return {
        ...state,
        status: action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};
